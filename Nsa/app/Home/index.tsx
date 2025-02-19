import { Image, Pressable, StyleSheet, Text, View } from "react-native";
function Home() {



  return (
    <View style={style.box}>

      <View style={style.boxPerson}>
        <View>
          <Image
            style={style.userImg}
            source={require('../../assets/images/user.png')}
          />

        </View>

        <View>
          <Text style={style.nameText}>
            Lucas Sousa
          </Text>
        </View>
      </View>

    <View>

    </View>

    <View>

    </View>
    </View>
  );
}

const style = StyleSheet.create({
  nameText: {
    fontSize: 20
  },
  box: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100%",


  },
  boxPerson: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    gap:20,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: "5px",
    marginTop: 20
  },
  userImg: {
    width: 50,
    height: 50,
  },
})

export default Home;
