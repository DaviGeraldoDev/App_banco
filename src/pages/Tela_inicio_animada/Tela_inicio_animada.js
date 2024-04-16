import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Tela_inicio_animada({navigation}) {
    useEffect(() => {
      const interval = setInterval(() => {
        navigation.replace('Login'); 
      }, 3000); 
  
      return () => clearInterval(interval);
    }, [navigation]);

  return (
    <View style={inicio_style.container}
    >
      <Animatable.Image
        animation="fadeInUp" delay={800} duration={700}
        source={require('../../assets/logo.png')}
        style = {inicio_style.logo}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const inicio_style = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002233'
  },

  logo: {
    width: 140,
    height: 140,
  }

});