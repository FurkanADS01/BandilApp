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


const SignUpPage = () => {

  const [isimSoy, setIsimSoy] = useState("")
  const [mail, setMail] = useState("")
  const [sifre, setSifre] = useState("")
  const [tekrarSifre, setTekrarSifre] = useState("")


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.tepe}>
        <Image 
          style={styles.image} 
          source={require('C:/Users/furka/OneDrive/Belgeler/GitHub/Spor-Salonu-Uygulamasi/firstapp/assets/images/signupicon.png')}
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
          placeholder='Tekrar Şifre' 
          placeholderTextColor={"gray"} 
          onChangeText={setTekrarSifre}
          value={tekrarSifre} 
          style={styles.textinput}></TextInput>
      </View>

      <View style={styles.alt}> 
        <Pressable 
          onPress={()=> setIsLoading(true)}
          style={({pressed})=>[{
            backgroundColor: pressed ? "gray" : "#6CA4E0"
          },styles.girisbutton] }>

          <Text style={styles.giristext}>Kayıt Ol</Text>

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

  tepe:{
    flex:1,
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
  },

  image:{
    height:149,
    width:149,
    
  },

  orta:{
    flex:2,
    width:"100%",
    paddingVertical:10,
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"yellow",
  },

  textinput:{
    borderWidth:1,
    height:"15%",
    width:"95%",
    borderRadius:40,
    textAlign:"center",
    borderColor:"white",
    color:"white",  
  },

  alt:{
    flex:3,
    width:"100%",
    height:"100%",
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
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

})