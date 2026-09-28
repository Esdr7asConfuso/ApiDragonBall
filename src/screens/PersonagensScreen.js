import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { api } from '../services/api';

export default function ListScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCharacters() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await api.get('/characters');
        
        const data = Array.isArray(response.data) ? response.data : response.data.items;
        
        if (data) {
          setCharacters(data);
        } else {
          setError('Nenhum dado encontrado.');
        }
      } catch (err) {
        console.error('Erro detalhado da API:', error.response?.data || error.message);
        setError('Não foi possível carregar os dados. Verifique a conexão com a internet.');
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#ff7b00" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes', { id: item.id })}
          >
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.info}>Raça: {item.race}</Text>
              <Text style={styles.info}>KI: {item.ki}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>         
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', 
    padding: 10 
},
  centered: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#121212' 
},
  card: { 
    flexDirection: 'row', 
    backgroundColor: '#1E1E1E', 
    borderRadius: 8,
     marginBottom: 12, 
     padding: 10, 
     alignItems: 'center' 
},
  image: { 
    width: 70, 
    height: 100, 
    marginRight: 12 
},
  cardContent: { 
    flex: 1 
},
  name: { fontSize: 18,
     fontWeight: 'bold', 
     color: '#FF9800'
},
  info: { 
    fontSize: 14,
    color: '#AAA',
    marginTop: 2 
},
  errorText: { 
    color: '#FF5252',
    fontSize: 16 
}
});