import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function Principal() {
  return (
    <View style={styles.container}>
      <ImageBackground
      source = {require('../../assets/wave-haikei.png')}
      style = {styles.imagebackground}
      >
        <View>
            <Text style={styles.title}>Entrou</Text>
        </View>

      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  imagebackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    color: 'white',
    fontSize: 20
  }
});