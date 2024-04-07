import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>   

      <View style={{width:"85%",height:"10%", justifyContent:"flex-end",}}>
        <Text style={styles.bandil}>BANDIL APP</Text>
      </View>

      <View style={{width:"85%",height:"10%",justifyContent:"center"}}>
        <TextInput placeholder='Kullanıcı Adınız' placeholderTextColor={"gray"} style={styles.textinput}></TextInput>
      </View>

      <View style={{width:"85%",height:"10%", justifyContent:"center"}}>
        <TextInput placeholder='Şifreniz' placeholderTextColor={"gray"} style={styles.textinput}></TextInput>
      </View>
        
      <View style={{width:"60%", height:"5%", borderRadius:50, backgroundColor:"#6CA4E0", justifyContent:"center", marginBottom:10}}>
        <Text style={{color:"white", textAlign:"center",}}>Giriş Yap</Text>
      </View>
        
      <View style={{width:"85%", height:"10%", flexDirection:"row"}}>

        <View style={{flex:2, alignItems:"flex-end"}}>
        <Text style={{color:"white", fontSize:15 }}>       Yeni misiniz ?  O halde  </Text>
        </View>

        <View style={{flex:1}}>
          <Text style={{color:"#3616D5",  fontSize:15 }}>Kayıt Ol</Text>
        </View>

      </View>
      <StatusBar style="light" />   
    </View>
    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bandil:{
    fontWeight: "bold",
    textAlign:"center",
    fontSize:35,
    color:"white",
  },
  textinput:{
    borderWidth:2,
    width:'100%',
    height:'75%',
    borderRadius:40,
    textAlign:"center",
    borderColor:"white",
    
  },
});
