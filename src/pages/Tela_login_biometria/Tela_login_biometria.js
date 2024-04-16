import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Tela_login_biometria() {
  return (
    <View style={unique_style.container}>
        <Image
            source={require('../../assets/logo.png')}
            style = {unique_style.logo}
        />
        
        <View style={unique_style.container_menor}>

            <View style={unique_style.bola_com_nome}>
              <Text style={unique_style.nome_cliente}>
                  NS
              </Text>
            </View>

            <View style={unique_style.div_cliente}>
              <Text style={unique_style.cliente_codecash}>
                  Cliente CodeCash
              </Text>
            </View>

            <Text style={unique_style.text_nome}>
              Nome Sobrenome
            </Text>

            <Text style={unique_style.text_cpf}>
              CPF ***.289-668-**
            </Text>
        </View>

        <Text style={unique_style.text_fora_div}>
            Trocar ou abrir conta
        </Text>
        <StatusBar style="auto" />
    </View>
    
  );
}

const unique_style = StyleSheet.create({

   container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#002233'
   },

   container_menor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002233'
  },

  logo: {
    width: 110,
    height: 110,
    marginTop: 50
  },

  bola_com_nome: {
    width: 150,
    height: 150,
    backgroundColor: '#002233',
    borderColor: '#0066FF',
    borderWidth: 5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  nome_cliente: {
    fontSize: 75,
    color: '#0066FF', 
    fontWeight: "bold"
  },

  div_cliente: {
    width: 160,
    height: 25,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066FF',
    borderRadius: 10
  },

  cliente_codecash: {
    fontSize: 15,
    color: 'white'
  },

  text_nome: {
    fontSize: 28,
    color: 'white'
  },

  text_cpf: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white'
  },

  text_fora_div: {
    fontSize: 17,
    color: 'white',
    marginBottom: 30
  }

});