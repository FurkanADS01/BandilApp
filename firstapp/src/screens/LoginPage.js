import { StatusBar } from 'expo-status-bar';
import {
  Pressable, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Image,
} from 'react-native';

import React, { useState } from 'react';
import Loading from '../components/Loading';
import { login } from '../redux/userSlice';


import { useSelector, useDispatch } from 'react-redux';
import {setIsLoading } from '../redux/userSlice';

const LoginPage = ({navigation}) => {

  const [mail, setMail] = useState('')
  const [sifre, setSifre] = useState('')


  // userSlice içerisindeki verilerin okunması
  const {isLoading} = useSelector((state)=> state.user)
 
  // userSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
  const dispatch = useDispatch()

  return (
    
    <View style={styles.container}>   

      <Image 
        style={styles.image} 
        source={require('C:/Users/furka/OneDrive/Belgeler/GitHub/Spor-Salonu-Uygulamasi/firstapp/assets/images/Logo.png')}
      />

      <View style={styles.girisbilgi}>
        <TextInput 
          placeholder='Mail' 
          placeholderTextColor={"gray"} 
          onChangeText={(text)=> setMail(text)} 
          value={mail}
          style={styles.textinput}></TextInput>
      </View>

      <View style={styles.girisbilgi}>
        <TextInput 
          secureTextEntry={true}
          placeholder='Şifreniz' 
          placeholderTextColor={"gray"} 
          onChangeText={(password)=> setSifre(password)}
          value={sifre} 
          style={styles.textinput}></TextInput>
      </View>
        
      <Pressable 
        onPress={()=> dispatch(login({mail, sifre}))}
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
          <Text onPress={()=> navigation.navigate('SignUp')} style={{color:"#3616D5",  fontSize:15 }}>Kayıt Ol</Text>
        </View>

      </View>
      <StatusBar style="light" />  

      {isLoading ? <Loading/> : null}



    </View>
  );
}

export default LoginPage;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:400,
    height:200,
  },
  textinput:{
    borderWidth:1,
    width:'100%',
    height:'65%',
    borderRadius:40,
    textAlign:"center",
    borderColor:"white",
    color:"white",    
  },
  girisbilgi:{
    width:"95%",
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
});