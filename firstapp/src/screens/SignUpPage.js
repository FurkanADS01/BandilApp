import { StatusBar } from 'expo-status-bar';
import { 
      StyleSheet, 
      Text, 
      View,
      Image, 
      TextInput,
      SafeAreaView,
      Pressable,
      } from 'react-native'
import React, {useState} from 'react';


const SignUpPage = ({navigation}) => {

  const [isimSoy, setIsimSoy] = useState("")
  const [mail, setMail] = useState("")
  const [sifre, setSifre] = useState("")
  const [tekrarSifre, setTekrarSifre] = useState("")


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.bosüst}></View>

      <View style={styles.tepe}>
        <Image 
          style={styles.image} 
          source={require('C:/Users/furka/OneDrive/Belgeler/GitHub/Spor-Salonu-Uygulamasi/firstapp/assets/images/üyeekleme.png')}
        />
      </View>

      <View style={styles.orta}>
        <TextInput 
          placeholder='İsim Soyisim' 
          placeholderTextColor={"gray"} 
          onChangeText={setIsimSoy} 
          value={isimSoy}
          style={styles.textinput}></TextInput>
      
      <TextInput 
          placeholder='Mail' 
          placeholderTextColor={"gray"} 
          onChangeText={setMail} 
          value={mail}
          style={styles.textinput}></TextInput>

        <TextInput 
          secureTextEntry={true}
          placeholder='Şifre' 
          placeholderTextColor={"gray"} 
          onChangeText={setSifre}
          value={sifre} 
          style={styles.textinput}></TextInput>

        <TextInput 
          secureTextEntry={true}
          placeholder='Şifre Tekrar' 
          placeholderTextColor={"gray"} 
          onChangeText={setTekrarSifre}
          value={tekrarSifre} 
          style={styles.textinput}></TextInput>
      </View>

      <View style={styles.alt}> 
        <Pressable 
          onPress={()=> console.log(isimSoy," ",mail," ",sifre)}
          style={({pressed})=>[{
            backgroundColor: pressed ? "gray" : "#6CA4E0"
          },styles.girisbutton] }>

          <Text style={styles.girisbuttontext}>Kayıt Ol</Text>

        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.geri}>Zaten bir hesabınız var mı?<Text style={{fontSize:15,fontWeight:"bold", color:"blue"}}> Giriş Yap</Text></Text>
        </Pressable>

      </View>

      <StatusBar style="light" />  

    </SafeAreaView>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  bosüst:{
    height:50,
  },

  tepe:{
    flex:2,
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
  },

  image:{
    height:300,
    width:300,
    marginTop:10,
    marginLeft:20,
  },

  orta:{
    flex:2,
    width:"100%",
    paddingVertical:10,
    justifyContent:"flex-end",
    alignItems:"center",
  },

  textinput:{
    borderWidth:1,
    height:"23%",
    width:"95%",
    borderRadius:40,
    textAlign:"center",
    borderColor:"white",
    color:"white",  
    marginBottom:15,
  },

  alt:{
    flex:2.5,
    width:"100%",
    alignItems:"center",
    borderColor:"white",
    justifyContent:"space-between",
  },

  girisbutton:{
    width:"70%", 
    height:"15%", 
    borderRadius:50,
    justifyContent:"center",
  },

  girisbuttontext:{
    color:"white", 
    textAlign:"center",
  },

  geri:{
    color:"white",
    marginBottom:20,
  }

})