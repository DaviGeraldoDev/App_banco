import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Login_styles from '../../styles/Login_style';

export default function Cadastro_pt1({navigation}) {

  const continuacao_cadastro = () => {
    navigation.navigate("Cadastro_pt2")
  }

  const entrar = () => {
    navigation.navigate("Login")
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
          placeholder="Nome Completo"/>

          <TextInput style={Login_styles.input} 
          placeholder="E-mail"/>

          <TextInput style={Login_styles.input} 
          placeholder="CPF"/>

          <TouchableOpacity 
          style={Login_styles.botao}
          onPress={() => continuacao_cadastro()}>
            <Text>Continuar</Text>
          </TouchableOpacity>

          <Text style={Login_styles.text}
          onPress={() => entrar()}>Entrar</Text>
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
    height: 460,
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0066FF',
    borderWidth: 5,
    borderRadius: 60
  }

});