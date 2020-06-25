
import {StyleSheet} from 'react-native';

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({

    face_portrait: {
      flex: 1,
      flexDirection: 'column',
      //backgroundColor: 'green'
      opacity: 1
    },
    face_landscape: {
      flex: 1,
      flexDirection: 'column',
      opacity: 1
    },

    title_portrait: {
      flex: 1
      ,backgroundColor: 'white'
      ,margin: 10
      ,borderRadius : 20,
    },

    title_landscape: {
      flex: 1
      ,backgroundColor: 'white'
      ,margin: 5
      ,borderRadius : 20,
    },

    title_in_portrait: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#38BBC6', 
      flexDirection: 'row', 
      borderRadius : 20,
    },

    title_in_landscape: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#38BBC6', 
      flexDirection: 'row', 
      borderRadius : 20,
    },

    barcodeView_1_portrait: {
      flex: 16,      
      //padding: 20,
      marginLeft: 10,
      marginRight: 10,
      width: '100%',
      height: '100%',
      borderRadius : 20,
      //opacity: 0.9

    },
    barcodeView_1_landscape: {
      flex: 16,
      //padding: 20,
      marginLeft: 5,
      marginRight: 5, 
      borderRadius : 20,   
      //opacity: 0.9
    },


    
    barcodeView_2_portrait: {
      flex: 2, 
      flexDirection: 'column', 
      margin: 10,
      //backgroundColor: 'white'
      //position: 'absolute',
      //width: '100%',
      //height: '100%',        
      //zIndex: 10,
      //opacity: 0.8
      borderRadius : 20,
    },
    barcodeView_2_landscape: {
      flex: 2, 
      flexDirection: 'row', 
      //padding: 20,
      margin: 5,
      //backgroundColor: 'red'
      //position: 'absolute',
      //width: '100%',
      //height: '100%',        
      //zIndex: 10,
      //opacity: 0.8
      borderRadius : 20,
    },      

    webview: {
      flex: 1,
      //opacity: 0.8
      borderRadius : 20,
    },

    barcodeScanner: {
      flex: 1, 
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      //backgroundColor: 'yellow',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
   
    },

    barcodeRescanBtn_portrait: {      
      flex: 1,
      backgroundColor: '#48d1cc',
      width: 150,
      height: 150,
      borderRadius : 20,
      position: 'absolute',
      top: '85%',
      left: '80%',    
      opacity: 0.9,
      alignItems: 'center',
      justifyContent: 'center'
    },
    barcodeRescanBtn_landscape: {      
      flex: 1,
      backgroundColor: '#48d1cc',
      width: 150,
      height: 150,
      borderRadius : 20,
      position: 'absolute',
      top: '78%',
      left: '87%',    
      opacity: 0.9,
      alignItems: 'center',
      justifyContent: 'center'
    },   
    
    cameraChange_portrait: {      
      flex: 1,
      backgroundColor: '#48d1cc',
      width: 50,
      height: 50,
      borderRadius : 20,
      position: 'absolute',
      top: '80%',
      left: '92%',    
      opacity: 0.9,
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    cameraChange_landscape: {      
      flex: 1,
      backgroundColor: '#48d1cc',
      width: 50,
      height: 50,
      borderRadius : 20,
      position: 'absolute',
      top: '70%',
      left: '95%',    
      opacity: 0.9,
      alignItems: 'center',
      justifyContent: 'center'
    },    

    scanBtnText: {
      fontSize: 36,
      fontWeight: 'bold',
    }

  }); 


  module.exports = styles;