import { StyleSheet } from "react-native";

const FONT = {
  CairoRegular: "CairoRegular",
  CairoBold:"CairoBold"
  };
  const styles=StyleSheet.create({
    colorcurve:{
      backgroundColor:"#CAE9D9",
      height:50,
     borderBottomRightRadius:35,
     borderBottomLeftRadius:35,
     zIndex:0,
    },
    addressText:{
      color:"#5C5757",
      fontFamily:FONT.CairoRegular,
      fontSize:10,
    },
    headerText: {
      fontFamily:FONT.CairoBold,
      fontWeight:"600",
      color:"#164261"
      },
      modalView: {
        width:200,
        height:200,
        marginTop:40,
        marginLeft:20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        paddingTop:34,
       opacity:0.92
     
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#58CC02',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily:FONT.CairoBold,
        textAlign: 'center',
      },
      modalText: {
        textAlign: 'center',
      },
      headerTitle: {
        fontSize:20,
        fontFamily: FONT.CairoBold,
        color:"#164261",
        marginTop:50
     
   
      },
  
    });
  export default styles