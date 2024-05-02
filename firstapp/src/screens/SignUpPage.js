import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <Text>SignUpPage</Text>


      <StatusBar style="dark" />  

    </View>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },

})