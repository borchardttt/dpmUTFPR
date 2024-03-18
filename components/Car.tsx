import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

type CarProps = {
	car: string,
	brand: string,
	Hp: number
}

function Car({car, brand, Hp}: CarProps) {

	return (
		<View>
			<Text style= {styles.nomeDoCarro}>{car}</Text>
			<Text>{brand}</Text>
			<Text>{Hp}</Text>
			<Button 
			title="Ver ano" ></Button>
		</View>
	)
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
export default Car
