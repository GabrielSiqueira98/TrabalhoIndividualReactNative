import React from 'react';
import { View, Text, ImageBackground, StyleSheet} from 'react-native';
import { ExerciciosProps } from '../interface/interface';



export function Exercicios({ titulo, duracao, exercicios, imagem }: ExerciciosProps) {
  return (
    <ImageBackground source={imagem} style={styles.card} imageStyle={styles.cardImage}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.info}>{duracao} • {exercicios} EXERCÍCIOS</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  cardImage: {
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 5,
  },
});
