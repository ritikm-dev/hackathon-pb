import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, StatusBar } from 'react-native';
export default function App() {
    const open = (()=>{
        })
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/app-logo.jpeg')} 
        style={{ width: 200, height: 200 }} 
      />
      <Text style={styles.heading}>WELCOME{'\n'}Takes 15sec To Load</Text>
     <TouchableOpacity style={styles.button} onPress={() => {open()}}>
      <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
     <StatusBar barStyle="dark-content" backgroundColor="white" />
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'black',
    textAlign:'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#008cffff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
