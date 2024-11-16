import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ExerciciosProps } from '../interface/interface';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Exercicios({ titulo, duracao, exercicios, imagem }: ExerciciosProps) {
  return (
    <ImageBackground source={imagem} style={styles.card} imageStyle={styles.ImagemCard}>
      <View style={styles.iconeContainer}>
        <MaterialCommunityIcons name="lightning-bolt" size={16} color="blue" />
        <MaterialCommunityIcons name="lightning-bolt" size={16} color="gray" />
        <MaterialCommunityIcons name="lightning-bolt" size={16} color="gray" />
      </View>
      <View style={styles.filtro}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.informacoes}>{duracao} • {exercicios} EXERCÍCIOS</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 5,
    top:-10,
  },
  ImagemCard: {
    borderRadius: 10,
  },
  filtro: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 10,
  },
  titulo: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  informacoes: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 5,
  },
  iconeContainer: {
    position: 'absolute',
    top: 12, 
    left: 10, 
    flexDirection: 'row', 
    alignItems: 'center', 
  },
});
