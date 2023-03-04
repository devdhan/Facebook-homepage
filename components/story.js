import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

export function Story() {
  return (
    <View style={styles.allStory}>
      <View>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/09/13/11/29/girl-7451711_960_720.jpg',
          }}
          style={styles.create}
        />
        <View style={styles.story1}></View>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
          }}
          style={styles.plus}
        />
        <Text style={styles.storyText}>Create Story</Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/09/16/08/48/girl-7458180_960_720.jpg',
          }}
          style={styles.other}
        />
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/05/24/17/04/face-7218927_960_720.jpg',
          }}
          style={styles.circleImage}
        />
        <Text style={styles.imageText}>Chukwu Nwagbogo</Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2019/02/06/00/54/yellow-pepper-3978205_960_720.jpg',
          }}
          style={styles.other}
        />
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/06/15/13/39/man-7263965_960_720.png',
          }}
          style={styles.circleImage}
        />
        <Text style={styles.imageText}>Lavish Popoola</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allStory: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  create: {
    margin: 10,
    height: 100,
    width: 90,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  story1: {
    marginVertical: 110,
    marginHorizontal: 10,
    height: 60,
    width: 90,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#F8F9F9',
    position: 'absolute',
  },
  plus: {
    height: 35,
    width: 35,
    position: 'absolute',
    marginVertical: 90,
    marginHorizontal: 38,
  },
  storyText: {
    position: 'absolute',
    marginVertical: 148,
    marginHorizontal: 15,
    fontSize:13,
  },
  circleImage: {
    height: 28,
    width: 28,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 15,
    position: 'absolute',
  },
  other: {
    margin: 10,
    height: 155,
    width: 90,
    borderRadius: 10,
  },
  imageText:{
    position:'absolute',
    marginVertical: 120,
    marginHorizontal: 15,
    color:'white',
    fontWeight:'bold'
  },
});
