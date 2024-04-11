import { StyleSheet } from 'react-native';
const Login_styles = StyleSheet.create({
  container: {
      flex: 1,
    },

    imagebackground: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    logo: {
      width: 100,
      height: 100,
      marginBottom: 15,
      marginTop: 15
    },

    text: {
      color: 'white',
      marginTop: 10
    },

    input:{
      backgroundColor: 'white',
      width: '75%',
      borderRadius: 100,
      paddingLeft: 15,
      padding: 5,
      margin: 10
    },

    botao:{
      margin: 5,
      marginTop: 15,
      backgroundColor: 'white',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 100
    }
})

export default Login_styles