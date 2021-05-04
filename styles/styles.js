import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontFamily: "Inter-Black",
    color: "#5DB075",
  },
  text: {
    fontSize: 18,
    fontFamily: "Inter-Light",
    fontWeight: "700",
    color: "#5DB075",
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    marginRight: 10,
  },
  input: {
    height: 40,
    width: 170,
    margin: 15,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 40,
    backgroundColor: "#F6F6F6",
    paddingLeft: 15,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    height: 220,
    width: "100%",
    backgroundColor: "#5DB075",
    justifyContent: "center",
    alignItems: "center",
  },
  navbar_text: {
    fontFamily: "Inter-Medium",
    fontSize: 16,
    color: "#fff",
  },
  resultBox: {
    marginTop: 30,
    height: 100,
    width: 330,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  dataBox: {
    marginTop: 30,
    height: 150,
    width: 360,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  dataText: {
    fontSize: 12,
    fontFamily: "Inter-Light",
    fontWeight: "700",
    color: "#5DB075",
  },
});
