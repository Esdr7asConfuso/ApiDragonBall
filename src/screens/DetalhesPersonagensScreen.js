import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { api } from '../services/api';

export default function DetalhesPersonagensScreen({ route }) {
  const { id } = route.params;
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const response = await api.get(`/characters/${id}`);
        setCharacter(response.data);
      } catch (err) {
        console.error('Erro ao buscar detalhes:', error);
      } 
      finally {
        setLoading(false);
      }
    }

    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#FF9800" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: character?.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{character?.name}</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.label}>Gênero: <Text style={styles.value}>{character?.gender}</Text></Text>
        <Text style={styles.label}>Afiliação: <Text style={styles.value}>{character?.affiliation}</Text></Text>
        <Text style={styles.label}>Max KI: <Text style={styles.value}>{character?.maxKi}</Text></Text>
      </View>

      <Text style={styles.sectionTitle}>Descrição</Text>
      <Text style={styles.description}>{character?.description || 'Sem descrição disponível.'}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', 
    padding: 16 
},
  centered: { 
    flex: 1, 
    justifyContent: 'left', 
    alignItems: 'center', 
    backgroundColor: '#121212' 
},
  image: { 
    width: '100%', 
    height: 260, 
    marginBottom: 16 
},
  title: { 
    fontSize: 26, 
    fontWeight: 'bold',
    color: '#FF9800', 
    textAlign: 'center', 
    marginBottom: 16 
},
  infoBox: { 
    backgroundColor: '#1E1E1E', 
    padding: 14, 
    borderRadius: 8, 
    marginBottom: 16 
},
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#FFF', 
    marginBottom: 6 
},
  value: {
    fontWeight: 'normal', 
    color: '#BBB' 
},
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#FF9800', 
    marginBottom: 8 
},
  description: { 
    fontSize: 15, 
    color: '#DDD', 
    lineHeight: 22, 
    marginBottom: 24 
},
});