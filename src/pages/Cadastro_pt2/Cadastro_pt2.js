import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Vibration } from 'react-native';
import Login_styles from '../../styles/Login_style';
import * as Animatable from 'react-native-animatable';

export default function Cadastro_pt2({navigation}) {

  const login = () => {
    Vibration.vibrate(500)
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
          placeholder="Número de telefone"/>

          <View style={container_style.div_inputs_menores}>
            <TextInput style={container_style.input_menor} 
            placeholder="CEP"/>

            <TextInput style={container_style.input_menor} 
            placeholder="Num. casa"/>
          </View>

          <TextInput style={Login_styles.input} 
          placeholder="E-mail"/>

          <TextInput style={Login_styles.input} 
          secureTextEntry={true}
          placeholder="Senha"/>

          <TouchableOpacity 
          style={Login_styles.botao}
          onPress={() => login()}>
            <Text>Cadastro</Text>
          </TouchableOpacity>

          <Text style={Login_styles.text}
          onPress={() => login()}>Entrar</Text>
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
    height: 500,
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0066FF',
    borderWidth: 5,
    borderRadius: 60
  },

  div_inputs_menores:{
    flexDirection: 'row' 
  },

  input_menor:{
    backgroundColor: 'white',
    width: '36%',
    borderRadius: 100,
    paddingLeft: 15,
    padding: 5,
    margin: 10
  }

});