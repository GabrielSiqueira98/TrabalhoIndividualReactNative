import React from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import { Exercicios } from "./src/components/Exercicios";


export function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TREINO EM CASA</Text>
      </View>

      <View style={styles.levels}>
        <Text style={styles.levelActive}>Iniciante</Text>
        <Text style={styles.level}>Intermediário</Text>
        <Text style={styles.level}>Avançado</Text>
      </View>

      <ScrollView>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  levels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  levelActive: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  level: {
    fontSize: 16,
    color: 'gray',
  },
});
