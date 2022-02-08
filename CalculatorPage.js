import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function CalculatePage({ navigation }){
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState('');
    const [data, setData] = useState([]); 

    const calcSum = () => {
        setResult(Number(firstNumber) + Number(secondNumber));
        setData([...data, {key : `${firstNumber} + ${secondNumber} = ${Number(firstNumber) + Number(secondNumber)}`}]);
        setFirstNumber('');
        setSecondNumber(''); 
    }

    const calcSubtraction = () => {
        setResult(Number(firstNumber) - Number(secondNumber));
        setData([...data, {key : `${firstNumber} - ${secondNumber} = ${Number(firstNumber) - Number(secondNumber)}`}]);
        setFirstNumber('');
        setSecondNumber(''); 
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Result: {result}</Text>
            <TextInput
                style={{width: 200, borderColor: 'gray', borderWidth: 1}}
                keyboardType='numeric'
                onChangeText={firstNumber => setFirstNumber(firstNumber)}
                value={firstNumber}
            />
            <TextInput
                style={{width: 200, borderColor: 'gray', borderWidth: 1}}
                keyboardType='numeric'
                onChangeText={secondNumber => setSecondNumber(secondNumber)}  
                value={secondNumber}
            />
            <View style={styles.buttonContainer}>
                <Button onPress={calcSum} title=' + '/>
                <View style={styles.space}/>
                <Button onPress={calcSubtraction} title= ' - '/>
                <View style={styles.space}/>
                <Button title="History" onPress={() => navigation.navigate('History', {data})}/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      padding: 30, 
      marginBottom: 20
    }, 
    space: {
      width: 50, 
      height: 20
    }
  });