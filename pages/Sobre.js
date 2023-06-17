import React, {useState}from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Sobre() {
		
  return (
    <View style={styles.container}>
     	<Text>Sobre</Text>
		
		
	    <Text>Sobre a empresa</Text>  
	
		
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});
