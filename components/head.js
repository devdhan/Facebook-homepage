import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";

export function Head() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headIcon}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRyoM-nqQ0xfNJIVJ64QM3rolhDhs6NLDzw&usqp=CAU",
          }}
          style={styles.fb}
        />
        <View style={styles.bubbleIcon}>
          <View style={styles.circle1}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3626/3626504.png",
              }}
              style={styles.srch1}
            />
          </View>
          <View style={styles.circle2}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4701/4701477.png",
              }}
              style={styles.srch2}
            />
          </View>
        </View>
      </View>
      <View style={styles.homeIcon}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/263/263115.png",
          }}
          style={styles.notBell1}
        />
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4406/4406139.png",
          }}
          style={styles.notBell2}
        />
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3119/3119338.png",
          }}
          style={styles.notBell3}
        />
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/5107/5107718.png",
          }}
          style={styles.notBell4}
        />
      </View>
      <View style={styles.iconLine1}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  headIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fb: {
    width: 120,
    height: 50,
    resizeMode: "contain",
    margin: 10,
  },
  bubbleIcon: {
    flexDirection: "row",
    marginRight: 10,
    marginTop: 10,
  },
  circle1: {
    backgroundColor: "#F8F9F9",
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 15,
  },
  srch1: {
    width: 25,
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
  },
  circle2: {
    backgroundColor: "#F8F9F9",
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  srch2: {
    width: 30,
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
  },
  homeIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notBell1: {
    width: 25,
    height: 30,
    resizeMode: "contain",
    marginLeft: 20,
  },
  notBell2: {
    width: 25,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
  notBell3: {
    width: 25,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
  notBell4: {
    width: 25,
    height: 30,
    resizeMode: "contain",
    marginRight: 20,
  },
  iconLine1: {
    borderBottomWidth: 1,
    padding: 4,
    borderBottomColor: "#BDC3C7",
  },
});
