import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: { flex: 1 },
    view1: { flex: 1,flexDirection: "column",justifyContent: "center" },
    img: { width: 150,height: 150,alignSelf: "center",margin: 5 },
    btn1: { width: "90%",height: 45,borderRadius: 10,backgroundColor: "#F37021",alignSelf: "center",justifyContent: "center",alignItems: "center" },
    btn2: { width: "90%",height: 45,borderRadius: 10,backgroundColor: "#F37021",alignSelf: "center",marginTop: 10,justifyContent: "center",alignItems: "center" },
    txt: { color: "#fff",fontSize: 16,fontWeight: "500" },
    sView: { height: 120,width: "98%",flexDirection: "row",padding: 5 },
    s3View: { flex: .3,justifyContent: "center" },
    s31View: {  width: 60,height: 26,flexDirection: "row",backgroundColor: "#F37021",borderRadius: 5 },
    sAddView:{flex: 1,alignItems: "center",justifyContent: "center"},
    sAddTxt:{fontSize: 12,fontWeight: "700",color: "#fff"},
    sTxt1:{fontSize: 15,color: "#4A4A4A",fontWeight: "700",flex: 1},
    sTxt2:{color: "#F37021",fontSize: 15,fontWeight: "800",paddingTop: 10,flex: 1},
    s2View:{ flex: 1.1,flexDirection: "column",padding: 5 },
    mImage:{ width: "100%",height: 96,borderRadius: 15 },
});