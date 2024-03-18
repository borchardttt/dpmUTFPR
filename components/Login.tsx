import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import Car from './Car';

export default function Login() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const realizarLogin = () => {
    console.log('Nome de Usuário:', nomeUsuario);
    console.log('Senha:', senha);
  };

  return (
    <View>
      <Text>Smit</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira seu login"
        value={nomeUsuario}
        onChangeText={setNomeUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Insira sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <Button title="Logar" onPress={realizarLogin} />
			<View>
				<Text>Aqui estão alguns carros</Text>
				<Car car='Civic do Cesinha Monstro' brand='Honda' Hp={10}/>
			</View>
			<View>
				<Text>Aqui estão alguns carros</Text>
				<Car car='Goleta do Murilo Monstro' brand='Volks' Hp={10}/>
			</View>
			<View>
				<Text>Aqui estão alguns carros</Text>
				<Car car='Sandero do Seffrinho Monstro' brand='Renault' Hp={11}/>
			</View>
			<View>
				<Text>Aqui estão alguns carros</Text>
				<Car car='Siena do Alef Monstro' brand='Fiat' Hp={5}/>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderColor: '#FFFFF',
    borderWidth: 1,
    borderRadius: 8,
  },
	nomeDoCarro: {
		backgroundColor: 'black',
		color: 'white'
	},
  button: {
    backgroundColor: 'orange',
  },
});
