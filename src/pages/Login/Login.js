import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, Input, TouchableOpacity, View, Image } from 'react-native';
import Login_styles from '../../styles/Login_style';

export default function Login({navigation}) {
  
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Principal' }]
    })
  }

  const cadastro = () => {
    navigation.navigate("Cadastro_pt1")
  }

  return (
    <View style={Login_styles.container}>
      <ImageBackground
      source = {require('../../assets/wave-haikei.png')}
      style = {Login_styles.imagebackground}
      >
        <View style={container_style.quadradin}>
          <Image
            source={require('../../assets/logo.png')}
            style = {Login_styles.logo}
          />

          <TextInput style={Login_styles.input} 
          placeholder="Usuário"/>

          <TextInput style={Login_styles.input} 
          placeholder="Senha"/>

          <TouchableOpacity 
          style={Login_styles.botao}
          onPress={() => entrar()}
          >
            <Text>Entrar</Text>
          </TouchableOpacity>

          <Text style={Login_styles.text} 
          onPress={() => cadastro()}>Cadastre-se</Text>
          
        </View>

      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const container_style = StyleSheet.create({

  quadradin: {
    backgroundColor: '#002233',
    width: 320,
    height: 380,
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0066FF',
    borderWidth: 5,
    borderRadius: 60
  }

});