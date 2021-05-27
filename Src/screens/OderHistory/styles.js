import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: { flex: 1,backgroundColor:"#fff" },
    view1: { height: 205,width: "97%",alignSelf:"center" },
    view2: { width: "100%",height: 80,padding: 10 },
    view3: { flexDirection: "row",padding: 2 },
    view4: { flex: .3 },
    view5: { borderStyle: 'dotted',borderWidth: 1,borderRadius: 1,width: "95%",alignSelf: "center",borderColor: "#5A5A5A" },
    img: { width: 150,height: 150,alignSelf: "center",margin: 5 },
    btn1: { width: "90%",height: 45,borderRadius: 10,backgroundColor: "#F37021",alignSelf: "center",justifyContent: "center",alignItems: "center" },
    btn2: { width: "90%",height: 45,borderRadius: 10,backgroundColor: "#F37021",alignSelf: "center",marginTop: 10,justifyContent: "center",alignItems: "center" },
    txt: { color: "#fff",fontSize: 16,fontWeight: "500" },
    listview : {alignSelf: "center",width: "100%",marginTop: 10}
});