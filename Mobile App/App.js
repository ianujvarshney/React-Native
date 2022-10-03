import React from 'react';
import { Text,View,StyleSheet } from 'react-native';
import CustomComponents from './src/screen/customcomponents';


const App = () => {
  return (
    <View style={style.container}>
    <View style={styles.box}>
      <Text>
        Hello, I am a text!
      </Text>
      <CustomComponents></CustomComponents>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box:{
    height:'300px',
    width:'300px',
    backgroundColor:'yellow',
    border:'1px solid blue'
  },
  container:{
    width:'100%',
    height:'100vh',
    flex:1,
    justifyContent:center,
    alignItems:center
  }
});

export default App;