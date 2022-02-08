import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function HistoryPage({ route, navigation}){

    const { data } = route.params; 

    return (
        <View style={styles.container}>
            <Text style={{marginTop: 30}}>History</Text>
            <FlatList
            data={data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
            keyExtractor={(item, index) => index}
        />
        </View>
    )
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