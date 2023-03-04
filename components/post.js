import { Text, View, StyleSheet, Image, TextInput } from "react-native";

export function Post() {
  return (
    <View>
      <View style={styles.dp}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2022/09/13/11/29/girl-7451711_960_720.jpg",
          }}
          style={styles.dp1}
        />
        <TextInput placeholder="What's on your mind?" style={styles.input} />
      </View>
      <View style={styles.line1}></View>
      <View style={styles.miniIcon}>
        <View style={styles.live}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/860/860832.png",
            }}
            style={styles.liveIcon}
          />
          <Text style={styles.liveText}>Live</Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.photo}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/7224/7224509.png",
            }}
            style={styles.photoIcon}
          />
          <Text style={styles.photoText}>Photo</Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.check}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            }}
            style={styles.checkIcon}
          />
          <Text style={styles.checkText}>Check</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dp: {
    flexDirection: "row",
  },
  dp1: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 5,
  },
  input: {
    height: 55,
    width: 280,
    margin: 12,
    borderRadius: 50,
    borderWidth: 1,
    padding: 10,
  },
  line1: {
    borderBottomWidth: 1,
    borderColor: "#BDC3C7",
    paddingTop: 10,
  },
  miniIcon: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  live: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  liveIcon: {
    width: 30,
    height: 40,
    resizeMode: "contain",
    paddingLeft: 5,
  },
  liveText: {
    paddingTop: 10,
    paddingLeft: 5,
  },
  verticalLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#BDC3C7",
  },
  photo: {
    flexDirection: "row",
  },
  photoIcon: {
    width: 30,
    height: 40,
    resizeMode: "contain",
    paddingLeft: 5,
  },
  photoText: {
    paddingTop: 10,
    paddingLeft: 5,
  },
  check: {
    flexDirection: "row",
  },
  checkIcon: {
    width: 30,
    height: 40,
    resizeMode: "contain",
    paddingLeft: 5,
  },
  checkText: {
    paddingTop: 10,
    paddingLeft: 5,
  },
});
