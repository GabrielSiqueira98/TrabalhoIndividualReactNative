import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Exercicios } from './src/components/Exercicios';
import { MaterialCommunityIcons, Ionicons, Foundation } from '@expo/vector-icons';

export function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>TREINO EM CASA</Text>
      </View>

      <View style={styles.modulos}>
        <Text style={styles.moduloSelecionado}>Iniciante</Text>
        <View style={styles.selecionado} />
        <Text style={styles.modulo}>Intermediário</Text>
        <Text style={styles.modulo}>Avançado</Text>
      </View>
      
        <Exercicios
          titulo="ABDÔMEN INICIANTE"
          duracao="20 MIN"
          exercicios="16"
          imagem={require('./assets/ABDOMEN.jpeg')}
        /> 
        <Exercicios
          titulo="PEITO INICIANTE"
          duracao="7 MIN"
          exercicios="11"
          imagem={require('./assets/PEITO.jpg')}
        />
        <Exercicios
          titulo="BRAÇO INICIANTE"
          duracao="17 MIN"
          exercicios="19"
          imagem={require('./assets/BRACO.jpg')}
        />
        <Exercicios
          titulo="PERNA INICIANTE"
          duracao="26 MIN"
          exercicios="23"
          imagem={require('./assets/PERNA.jpg')}
        />
      
      <View style={styles.footer}>
        <View style={styles.footerIcone}>
          <MaterialCommunityIcons name="clock" size={24} color="blue" />
          <Text style={styles.footermoduloTreino}>Treino</Text>
          <View style={styles.selecaoTreino} />
        </View>
        <View style={styles.footerIcone}>
          <Ionicons name="compass" size={24} color="gray" />
          <Text style={styles.footerTexto}>Descobrir</Text>
        </View>
        <View style={styles.footerIcone}>
          <Foundation name="graph-bar" size={24} color="gray" />
          <Text style={styles.footerTexto}>Relatório</Text>
        </View>
        <View style={styles.footerIcone}>
          <MaterialCommunityIcons name="account" size={24} color="gray" />
          <Text style={styles.footerTexto}>Definição</Text>
          <View style={styles.notificacao} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    top:-20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  modulos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    top: -5,
  },
  moduloSelecionado: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  modulo: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold'
  },
  selecionado: {
    position: 'absolute',
    top: 22,
    left: 19,
    width: 27,
    height: 5,
    backgroundColor: 'blue',
    borderRadius: 4,
  },
  
  footer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerIcone: {
    alignItems: 'center',
  },
  footerTexto: {
    fontSize: 12,
    color: 'gray',
    fontWeight:'bold',
  },

  footermoduloTreino: {
    fontSize: 12,
    color:'blue',
    fontWeight:'bold',
  },
  selecaoTreino: {
    position: 'absolute',
    top: 0,
    left: 14,
    width: 5,
    height: 2,
    backgroundColor: 'blue',
    borderRadius: 4,
  },
  notificacao: {
    position: 'absolute',
    top: -2,
    right: 6,
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
});
