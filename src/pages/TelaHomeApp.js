import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TelaHomeApp extends React.Component{

    render(){

        return(

            <View style={styles.container}>

                <Text>OLÁ, USUÁRIO</Text>
                <Text>BEM VINDO!</Text>

            </View>

        );

        

    }
    

}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        color: '#5b5b58',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250
    }
})