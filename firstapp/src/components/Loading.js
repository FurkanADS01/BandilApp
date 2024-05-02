import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"red"} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
    },
    loadingText:{
        color:"blue",
        fontSize:20,
        margin: "center",
    }

})