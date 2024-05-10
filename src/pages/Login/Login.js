import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Vibration } from 'react-native';
import Login_styles from '../../styles/Login_style';
import * as Animatable from 'react-native-animatable';

export default function Login({navigation}) {

  const entrar = () => {
    // Vibration.vibrate(500),
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
        <Animatable.View style={container_style.quadradin}
        animation="fadeInUp" duration={700}>
          <Image
            source={require('../../assets/logo.png')}
            style = {Login_styles.logo}
          />

          <TextInput style={Login_styles.input} 
          placeholder="Nome do cliente"/>

          <TextInput style={Login_styles.input}
          secureTextEntry={true} 
          placeholder="Senha"/>

          <TouchableOpacity 
          style={Login_styles.botao}
          onPress={() => entrar()}
          >
            <Text>Entrar</Text>
          </TouchableOpacity>

          <Text style={Login_styles.text} 
          onPress={() => cadastro()}>Cadastre-se</Text>
        </Animatable.View>

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