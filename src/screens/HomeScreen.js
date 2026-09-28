import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Imagem do Goku no topo */}
      <ImageBackground
        source={require('../assets/goku.png')}
        style={styles.imagemGoku}
        imageStyle={styles.imagem}
      >
        {/* Escurece um pouco a imagem para o texto ficar visível */}
        <View style={styles.overlay} />
      </ImageBackground>

      {/* Conteúdo da tela */}
      <View style={styles.conteudo}>

        <Text style={styles.title}>
          Dragon Ball
        </Text>

        <Text style={styles.description}>
          Conheça os personagens de Dragon Ball
          e descubra seus poderes e habilidades!
        </Text>

        {/* Botão para acessar os personagens */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Personagens')}
        >
          <Text style={styles.buttonText}>
            👥  Ver Personagens
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  // Fundo principal
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  // Área onde ficará a imagem do Goku
  imagemGoku: {
    width: '100%',
    height: 430,
    justifyContent: 'flex-end',
  },

  // Configuração da imagem
  imagem: {
    resizeMode: 'cover',
  },

  // Camada escura sobre a imagem
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
  },

  // Conteúdo abaixo da imagem
  conteudo: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 15,
  },

  // Título
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },

  // Descrição
  description: {
    fontSize: 16,
    color: '#B0BEC5',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },

  // Botão laranja
  button: {
    width: '90%',
    backgroundColor: '#F57C00',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',

    // Sombra no Android
    elevation: 5,

    // Sombra no iPhone
    shadowColor: '#F57C00',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
  },

  // Texto do botão
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

});