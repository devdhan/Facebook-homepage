import { Text, View, StyleSheet, Image } from 'react-native';

export function First() {
  return (
    <View>
      <View>
        <View style={styles.dpDetails}>
            <View style={styles.idk}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2022/09/16/13/07/woman-7458584_960_720.jpg',
              }}
              style={styles.postPic}
            />
            <Text style={styles.dpName}>City Boy</Text>
          </View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/512/512142.png',
            }}
            style={styles.nav1}
          />
          <Text style={styles.userTime}></Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3394/3394785.png',
            }}
            style={styles.userIcon}
          />
        </View>
      </View>
      <View>
        <Text style={styles.postText}>
          Happy Birthday to me long life and prosperity many more yaers to come
          more blessings upon me.
        </Text>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/09/16/13/07/woman-7458584_960_720.jpg',
          }}
          style={styles.postPic1}
        />
      </View>
      <View style={styles.likeDetails}>
        <View style={styles.likeNum}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3670/3670215.png',
            }}
            style={styles.likeIcon}
          />
          <Text style={styles.idc}>53</Text>
        </View>
        <Text style={styles.comNum}>21 Comments</Text>
      </View>
      <View style={styles.likeLine}></View>
      <View style={styles.likeDownn}>
        <View style={styles.likeOn}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114886.png',
            }}
            style={styles.onIcon}
          />
          <Text style={styles.iconText}>Like</Text>
        </View>
        <View style={styles.commentOn}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3318/3318523.png',
            }}
            style={styles.conIcon}
          />
          <Text style={styles.iconText}>Comment</Text>
        </View>
        <View style={styles.shareOn}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2958/2958783.png',
            }}
            style={styles.shIcon}
          />
          <Text style={styles.iconText}>Share</Text>
        </View>
        <View style={styles.down}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dpDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postPic: {
    margin: 10,
    height: 28,
    width: 28,
    borderRadius: 10,
  },
  idk: {
    flexDirection: 'row',
  },
  dpName: {
    marginTop: 8,
    fontWeight:'bold'
  },
  nav1: {
    height: 20,
    width: 20,
    marginLeft:250
  },
  postText: {
    marginBottom: 10,
    marginHorizontal:5
  },
  postPic1: {
    height: 500,
    width: null,
  },
  likeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  likeNum: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  likeIcon: {
    height: 20,
    width: 20,
  },
  idc: {
    marginLeft: 3,
  },
  comNum: {
    marginRight: 8,
  },
  likeLine: {
    borderBottomWidth: 1,
    borderColor: '#BDC3C7',
  },
  likeDownn: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10
  
  },
  likeOn: {
    flexDirection:'row'},
  onIcon: {
    height: 20,
    width: 20,
    marginLeft:25
  },
  commentOn: {
    flexDirection:'row'},
  conIcon: {
    height: 20,
    width: 20,
    marginLeft:15
  },
  shareOn: {
    flexDirection:'row'},
  shIcon: {
    height: 20,
    width: 20,
    marginLeft:15
  },
  iconText:{
    marginLeft:8
  },
});