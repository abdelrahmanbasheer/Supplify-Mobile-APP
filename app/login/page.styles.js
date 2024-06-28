import { StyleSheet } from "react-native";
const FONT = {
    CairoRegular: "CairoRegular",
    CairoBold:"CairoBold"
    };
const styles=StyleSheet.create({
oldPrice:{
  fontSize:15,
        fontFamily: FONT.CairoBold,
        color:"#8F8F8F",
        textDecorationLine:"line-through"
},
textstyle:{
  fontSize:11,
        fontFamily: FONT.CairoBold,
        color:"#8F8F8F",
       
},
font:{
   fontFamily: FONT.CairoBold,   
},
loaction:{
   fontFamily: FONT.CairoBold,   
},
newPrice:{
  fontSize:15,
        fontFamily: FONT.CairoRegular,
        color:"#69B056",
        fontWeight:"bold"
        
},
offerName:{
      
        fontFamily: FONT.CairoBold,
        color:"#164261",
      lineHeight:25,
      textAlign:"right",
        
},
    offerCard:{
      width:160,
      height:386,
    backgroundColor:"white",
    borderRadius:20,
    padding:10,
    marginHorizontal:13,
    display:'flex',
    flexDirection:"column",
    gap:4

    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft:20,
        marginRight:20,
      },
      headerTitle: {
        fontSize:20,
        fontFamily: FONT.CairoBold,
        color:"#164261"
      },
      headerBtn: {
        fontSize: 16,
        fontFamily: FONT.CairoRegular,
        color:"#164261"
       
      },
})

export default styles