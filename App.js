import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Head } from './components/head';
import { Post } from './components/post';
import { Story } from './components/story';
import { First } from './components/post1';
import { Second } from './components/post2';

export default function App() {
  return (
    <View>
      <Head/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Post/>
      <View style= {styles.down}></View>
      <Story/>
      <View style= {styles.down}></View>
      <First/>
      <View style= {styles.down}></View>
      <Second/>
      <View style= {styles.down}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  down:{
    height:8,
    width:null,
    backgroundColor:'gray'
  },
});
