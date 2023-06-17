import React, {useState}from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
     	
		<TouchableOpacity  
			onPress={() => navigation.navigate('Sobre')}
			style={styles.botao}
		>
			<Text style={styles.TextoBotao}>Suporte</Text>  
		</TouchableOpacity>
		  
		<TouchableOpacity  
			onPress={() => navigation.navigate('Sobre')}
			style={styles.botao}
		>
			<Text style={styles.TextoBotao} >Sobre</Text>  
		</TouchableOpacity>
		  
		<TouchableOpacity  
			onPress={() => navigation.navigate('Sobre')}
			style={styles.botao}
		>
			<Text style={styles.TextoBotao} >Sair</Text>  
		</TouchableOpacity>
		
		
		  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  botao:{
	backgroundColor: '#5289DE',
	width:'80%',
	marginLeft:'10%',
	marginTop:20
  },
  TextoBotao:{
	fontSize:20,
  },
});
