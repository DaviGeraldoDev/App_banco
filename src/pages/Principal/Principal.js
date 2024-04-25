import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Share } from 'react-native';

export default function Principal() {

  const shareMessage = async () => { 
      await Share.share({message: 'Mensagem de compatilhamento'})
      }

  const [showValue, setShowValue] = useState(false);

  return (
    <ScrollView style={styles.container0}>
      <View style={styles.container}>
          <View style={styles.header}>
              <Image source={require('../../assets/logo_desenho.png')}
              style = {styles.logo}
              />
              <View style={styles.icons_view}>
              
                <TouchableOpacity
                onPress={ () => setShowValue(!showValue)}>
                  {showValue ? (
                    <Image source={require('../../assets/Olho.png')}
                    style = {styles.icons}/>
                  ) : (
                    <Image source={require('../../assets/Olho_riscado.png')}
                    style = {styles.icons}/>
                )}
                  
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => shareMessage()}>
                  <Image source={require('../../assets/Share.png')}
                  style = {styles.icons}/>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image source={require('../../assets/conta.png')}
                  style = {styles.icons}/>
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.saldo}>
            <TouchableOpacity style={styles.row_direction}>

              {showValue ? (
                <Text style={styles.saldo_text}>R$ 40.000,00</Text>
              ) : (
                <View style={styles.saldo_text_apagado}>
                </View>
              )}

              <Image source={require('../../assets/seta.png')}
              style={styles.img_seta}/>
            </TouchableOpacity>
            {/* ScrollViewHorizontal aqui dps */}
              <View style={styles.formas_pagamentos}>
                <TouchableOpacity style={styles.caixa_pag}>
                  <Image source={require('../../assets/pix.png')}
                    style = {styles.img_pag}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.caixa_pag}>
                  <Image source={require('../../assets/cartao.png')}
                    style = {styles.img_pag}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.caixa_pag}>
                  <Image source={require('../../assets/boleto.png')}
                    style = {styles.img_pag}
                    />
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.div_caixas}>
            <TouchableOpacity style={styles.caixas}>
              <Image source={require('../../assets/Foguete.png')}
                  style = {styles.img_pag}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.caixas}>
              <Image source={require('../../assets/Dindin.png')}
                  style = {styles.img_pag}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.caixas}>
              <Image source={require('../../assets/Guardar.png')}
                  style = {styles.img_pag}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.caixas}>
              <Image source={require('../../assets/PC.jpg')}
                  style = {styles.img_pag}/>
            </TouchableOpacity>
          </View>
          <View style={styles.text_div}>
            <Text style={styles.caixas_text}>Decolar</Text>
            <Text style={styles.caixas_text}>Investir</Text>
            <Text style={styles.caixas_text}>Guardar</Text>
            <Text style={styles.caixas_text}>Comprar</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/Cartao_anuncio.jpg')}
              style = {styles.anuncio}/>
          </TouchableOpacity>
          
      </View>
          <Text style = {styles.texto_solto}>Minha vida financeira</Text>
          <View style = {styles.row_direction}>
            <TouchableOpacity style = {styles.divs_de_baixo}>
              <Text style = {styles.text_banner}>Pontos</Text>
              <Image source={require('../../assets/din_din.png')}
                style = {styles.img_banner}/>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.divs_de_baixo}>
              <Text style = {styles.text_banner}>Ações</Text>
              <View>

                <View style = {styles.row_direction}>
                  <Text style = {styles.nome_acao_preco}>BOVA11</Text>
                  <Text style = {styles.nome_acao_preco}>R$ 123,55</Text>
                </View>
                <Text style = {styles.porcentagem}>-0,48</Text>
              </View>

              <View>
                <View style = {styles.row_direction}>
                  <Text style = {styles.nome_acao_preco}>SMAL11</Text>
                  <Text style = {styles.nome_acao_preco}>R$ 105,90</Text>
                </View>
                <Text style = {styles.porcentagem}>-0,70</Text>
              </View>
              <View>

                <View style = {styles.row_direction}>
                  <Text style = {styles.nome_acao_preco}>GOOGL1</Text>
                  <Text style = {styles.nome_acao_preco}>R$ 100,90</Text>
                </View>
                <Text style = {styles.porcentagem}>-1,65</Text>
              </View>
              
            </TouchableOpacity>
          </View>
    <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor: '#fff'
  },

  container: {
    alignItems: 'center',
  },
  
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
    gap: 15
  },

  logo: {
    width: 60,
    height: 60
  },

  icons: {
    width: 30,
    height: 30
  },

  saldo: {
    backgroundColor: '#fff',
    borderColor: '#002233',
    borderWidth: 7,
    marginTop: 30,
    width: 340,
    height: 190,
    borderRadius: 40
  },

  saldo_text: {
    color: '#002233',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 30,
    marginTop: 40
  },

  saldo_text_apagado: {
    width: 183,
    height: 20,
    backgroundColor: 'grey',
    marginLeft: 30,
    marginTop: 52,
    borderRadius: 20
  },

  img_seta: {
    marginTop: 40,
    width: 40,
    height: 40
  },

  formas_pagamentos: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  img_pag: {
    width: 35,
    height: 35,
    marginLeft: 5,
    marginRight: 2
  },

  caixa_pag: {
    backgroundColor: '#fff',
    borderColor: '#002233',
    borderWidth: 4,
    flexDirection: 'row',
    height: 50,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },

  row_direction:{
    flexDirection: 'row'
  },

  div_caixas: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  caixas: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderColor: '#002233',
    borderWidth: 6,
    borderRadius: 20,
    alignItems: 'center', 
    justifyContent: 'center'
  },

  caixas_text: {
    color: '#000',
    marginTop: 5,
    marginLeft: 6,
    fontSize: 15,
    fontWeight: 'bold'
  },

  text_div: {
    width: '100%',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },

  anuncio: {
    width: 350,
    height: 170,
    borderWidth: 15,
    borderRadius: 10
  },

  texto_solto: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: '500'
  },

  divs_de_baixo: {
    width: '45%',
    height: 220,
    marginLeft: 12,
    backgroundColor: '#fff',
    borderColor: '#002233',
    borderRadius: 15,
    borderWidth: 8,
    marginTop: 20,
    marginBottom: 50,
  },

  img_banner: {
    width: 100,
    height: 100,
    marginLeft: 35,
    marginTop: 40
  },

  text_banner: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 12,
    fontWeight: '500',
    color: '#3D3A3A',
    fontSize: 22
  },

  nome_acao_preco: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '500'
  },

  porcentagem: {
    marginLeft: 104,
    marginBottom: 8,
    fontSize: 15,
    color: 'red'
  }
});