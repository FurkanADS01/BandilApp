import { StatusBar } from 'expo-status-bar';
import { 
  Alert, 
  Button, 
  Image, 
  KeyboardAvoidingView, 
  Pressable, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
} from 'react-native';

import React, {useState} from 'react';
import Loading from './src/components/Loading';

export default function App() {

  const [kullaniciAdi, setKullaniciAdi] = useState("")
  const [sifre, setSifre] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  return (
    
    <View style={styles.container}>   

      <View style={styles.baslik}>
        <Text style={styles.bandil}>BANDIL</Text>
      </View>

      <View style={styles.girisbilgi}>
        <TextInput 
          placeholder='Kullanıcı Adınız' 
          placeholderTextColor={"gray"} 
          onChangeText={setKullaniciAdi} 
          value={kullaniciAdi}
          style={styles.textinput}></TextInput>
      </View>

      <View style={styles.girisbilgi}>
        <TextInput 
          secureTextEntry={true}
          placeholder='Şifreniz' 
          placeholderTextColor={"gray"} 
          onChangeText={setSifre}
          value={sifre} 
          style={styles.textinput}></TextInput>
      </View>
        
      <Pressable 
        onPress={()=> setIsLoading(true)}
        style={({pressed})=>[{
          backgroundColor: pressed ? "gray" : "#6CA4E0"
        },styles.girisbutton] }>

        <Text style={styles.giristext}>Giriş Yap</Text>

      </Pressable>
        
      <View style={{width:"85%", height:"10%", flexDirection:"row",marginTop:10}}>

        <View style={{flex:2, alignItems:"flex-end"}}>
        <Text style={{color:"white", fontSize:15 }}>       Yeni misiniz ?  O halde  </Text>
        </View>

        <View style={{flex:1}}>
          <Text style={{color:"#3616D5",  fontSize:15 }}>Kayıt Ol</Text>
        </View>

      </View>
      <StatusBar style="light" />  

      {isLoading ? <Loading/> : null}



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
    color:"white",    
  },
  girisbilgi:{
    width:"85%",
    height:"10%",
    justifyContent:"center"
  },
  girisbutton:{
    width:"60%", 
    height:"5%", 
    borderRadius:50,
    justifyContent:"center", 
    marginVertical:25,
  },
  giristext:{
    color:"white", 
    textAlign:"center",
  },
  baslik:{
    width:"85%",
    height:"10%", 
    justifyContent:"flex-end",
  },

});
