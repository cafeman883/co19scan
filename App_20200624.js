import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ImageBackground  } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { WebView } from 'react-native-webview';
import { Camera } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';
import styles from './Styles.js';
import page2 from './page2.js';

//import NotificationSounds, { playSampleSound } from 'react-native-notification-sounds';
//import { Audio } from 'expo-av';
//import * as ScreenOrientation from 'expo-screen-orientation';
//import { DeviceMotion } from 'expo-sensors';
//import { Audio, Video } from 'expo-av';


export default function App() {


  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [returnType, setReturnType] = useState('type1');
  const [returnData, setReturnData] = useState('data1');
  //const [timerValue, setTimer] = useState(false);
  const [orientation, setOrientation] = useState('portrait');

  const [runFirst, setRunFirst] = useState('none');  // 웹뷰 페이지에 javascript 인젝션

  const [bgmToggle, setbgmToggle] = useState(false); // 음악재생 토글

  const [type, setType] = useState(undefined);       // 카메라 전후면 설정


  /*
  const soundObject = new Audio.Sound();
  
  async function countPlayer(toggle) {
    console.log(`toggle : ${toggle}`)

    if (toggle === 'ON') {
      await soundObject.stopAsync();
      setbgmToggle('OFF');
    } else { // OFF
      await soundObject.loadAsync(require('./assets/wind.mp3'));    
      await soundObject.playAsync();
      setbgmToggle('ON');
    }


    console.log('재생')
  };
  */

  

  // async function countPlayer(data) {
  //   const soundObject = new Audio.Sound();

  //   if (data === 'Y') {
  //     await soundObject.loadAsync(require("./assets/bell.wav"));
  //   } else {
  //     await soundObject.loadAsync(require("./assets/alert.mp3"));
  //   }

  //   await soundObject.playAsync();
  // }


  Dimensions.addEventListener('change', () => {

    const dim = Dimensions.get('screen'); 

    if (dim.width <= dim.height) {
      setOrientation('portrait');
    } else {
      setOrientation('landscape');
    }
  });


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const setInit = () => {
    setScanned(false);
    setReturnType('typeInit');
    //setReturnData('dataInit');
    setReturnData(`http://m.emc.ac.kr/co19/in.jsp?srno=00000000`);

    // let javascript = '';

    // javascript = `var init = document.getElementById("init");       
    //               var pTagText = document.createTextNode("초기화. 다시 스캔하세요.");
    //               init.appendChild(pTagText);
    //               alert(init);
    //               `
    //  setRunFirst(javascript);
  }
  

  const handleBarCodeScanned = ({ type, data }) => {

      if (returnData === data) {
        //let javascript = '';
        // javascript = `var parentEl = document.getElementById("createTest");
        //               var pTag = document.getElementById("same");                

        //               if ( pTag == null )
        //               {
        //                 var createPtag = document.createElement("p");
        //                 createPtag.innerHTML = "스캔 완료";
        //                 createPtag.id = "same";
                          
        //                 parentEl.appendChild(createPtag);
        //               } else {
        //                 pTag.remove();
        //               }`;

        // setRunFirst(javascript);
      }

      
      if ( (scanned === false) && returnData !== data) {

        setScanned(true);
        setReturnType(type);
        setReturnData(data);  
      }      
      
    // if (myCount >= 5) {
    //   console.log(`reset!!`)
    //   setCount(0);
    // }
    // 바코드 읽는게 동적이라서, 여기서 returnType, returnData 출력해도 적용이 바로 안 됨
  };


  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  handleWebViewNavigationStateChange = (newNavState) => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }

       
    

    const { url } = newNavState;

    if (!url) return;

    // one way to handle a successful form submit is via query strings
    if (url.includes('Message=success')) {
      setScanned(false);
      //this.WebView.stopLoading();
      //countPlayer('Y')
      
    } else if (url.includes('Message=fail')) {
      setScanned(false);
      //countPlayer('N')
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      this.webview.injectJavaScript(redirectTo);
    }
  };


  return (
    <ImageBackground style={orientation === 'portrait'? styles.face_portrait : styles.face_landscape}
                     source={ require('./assets/logo.png') } >

      <View style={orientation === 'portrait'? styles.title_portrait : styles.title_landscape }>
        <View style={orientation === 'portrait'? styles.title_in_portrait : styles.title_in_landscape }>
          <Text style={{fontSize: 52, fontWeight: 'bold', color: 'white'}}>CO19 HI-PASS</Text>
        </View>
      </View>
      <View style={orientation === 'portrait'? styles.barcodeView_1_portrait : styles.barcodeView_1_landscape }>

          
          <BarCodeScanner 
            style={ styles.barcodeScanner }
            //style={ [StyleSheet.absoluteFill, styles.container] }
            type={ type }
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            autoFocus={Camera.Constants.AutoFocus.on} 
          >
          <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <View style={{width: 200, height: 200, borderRadius: 20, borderColor: 'yellow', borderWidth: 2 }}></View>
          </View>
          </BarCodeScanner>
  
      </View >
      <View style={orientation === 'portrait'? styles.barcodeView_2_portrait : styles.barcodeView_2_landscape}>  
            <WebView style={ styles.webview } 
                     source={{ uri: `${returnData}` }}
                     onNavigationStateChange={handleWebViewNavigationStateChange}
                     />             
      </View>
      <TouchableOpacity style={ orientation === 'portrait'? styles.barcodeRescanBtn_portrait : styles.barcodeRescanBtn_landscape } 
                        onPress={() => setInit()}>   
        <Text style={ styles.scanBtnText}>다시 스캔</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ orientation === 'portrait'? styles.cameraChange_portrait : styles.cameraChange_landscape } 
                        onPress={() => setType(type === undefined
                                                      ? Camera.Constants.Type.front
                                                      : undefined )}>   
        <AntDesign name="camera" size={24} color="black" />
      </TouchableOpacity>   
    </ImageBackground>
  );
}


