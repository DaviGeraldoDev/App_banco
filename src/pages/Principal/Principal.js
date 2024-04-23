import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Principal() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../../assets/logo_desenho.png')}
            style = {styles.logo}
            />
            <View style={styles.icons_view}>
              <Image source={require('../../assets/Olho.png')}
              style = {styles.icons}
              />
              <Image source={require('../../assets/Busca.png')}
              style = {styles.icons}
              />
              <Image source={require('../../assets/conta.png')}
              style = {styles.icons}
              />
            </View>
        </View>

        <View style={styles.saldo}>
          <View style={styles.saldo_e_seta}>
            <Text style={styles.saldo_text}>R$ 40.000,00</Text>
            <Image source={require('../../assets/seta.png')}
            style={styles.img_seta}/>
          </View>
            <View style={styles.formas_pagamentos}>

              <View style={styles.caixa_pag}>
                <Image source={require('../../assets/pix.png')}
                  style = {styles.img_pag}
                  />
              </View>

              <View style={styles.caixa_pag}>
                <Image source={require('../../assets/cartao.png')}
                  style = {styles.img_pag}
                  />
              </View>

              <View style={styles.caixa_pag}>
                <Image source={require('../../assets/boleto.png')}
                  style = {styles.img_pag}
                  />
              </View>

            </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
    // backgroundColor: '#181A1C'
  },

  header: {
    backgroundColor: '#002233',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    height: 110,
    flexDirection: 'row'
  },

  icons_view: {
    flexDirection: 'row',
    gap: 10
  },

  logo: {
    width: 60,
    height: 60
  },

  icons: {
    width: 35,
    height: 35
  },

  saldo: {
    backgroundColor: '#002233',
    marginTop: 40,
    width: 340,
    height: 190,
    borderRadius: 40
  },

  saldo_text: {
    color: 'white',
    fontSize: 30,
    marginLeft: 30,
    marginTop: 50
  },

  formas_pagamentos: {
    marginTop: 30,
    marginLeft: 30,
    flexDirection: 'row',
    gap: 10
  },

  img_pag: {
    width: 35,
    height: 35,

  },

  caixa_pag: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: '100%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },

  img_seta: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 60,
    width: 40,
    height: 40
  },

  saldo_e_seta:{
    flexDirection: 'row'
  }

});