import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dragon Ball</Text>
      <Text style={styles.description}>
       Conheça os Personagens de Dragon ball e descubra seus poderes e habilidades!
      </Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Personagens')}
      >
        <Text style={styles.buttonText}>Ver Personagens</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'left', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#1A1A1A' 
},
  title: {
     fontSize: 28,
     fontWeight: 'bold', 
     color: '#FF9800', 
     marginBottom: 12, 
     textAlign: 'center' 
},
  description: { 
    fontSize: 16, 
    color: '#CCCCCC', 
    textAlign: 'center', 
    marginBottom: 30 
},
  button: { 
    backgroundColor: '#FF9800', 
    paddingVertical: 14, 
    paddingHorizontal: 32, 
    borderRadius: 8 
},
  buttonText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center'
}

});