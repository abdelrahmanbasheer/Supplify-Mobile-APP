import { StyleSheet } from "react-native";


const FONT = {
  CairoRegular: "CairoRegular",
  CairoBold:"CairoBold"
  };
const styles = StyleSheet.create({
  itemContainer:{
    alignItems:'center'
  },
  container: {
    marginTop: 24,
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
  cardsContainer: {
    marginTop: 16,
    paddingLeft:27,
    paddingRight:27,
  },
});

export default styles;
