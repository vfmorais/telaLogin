import React from 'react';
import { View, Text, TextInput, Alert, StyleSheet, Button } from 'react-native';

import firebase from 'firebase';

export default class TelaCadastro extends React.Component {

     /* STATE */
    constructor(props) {

        super(props);

            this.state = {

            email: '',
            password: ''

        }

    }

    //MÉTODO DE CAPTURA DE E-MAIL:
    onChangeEmail(value) {

        this.setState({

            email: value

        })

    }

    //MÉTODO DE CAPTURA DE SENHA:
    onChangePassword(value) {

        this.setState({

            password: value

        })

    }

    Cadastro() {

        console.log('CLICOU EM CADASTRAR!');
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => {

                console.log('USUÁRIO CRIADO COM SUCESSO->', user)
                
                this.props.navigation.navigate('Home');

            }).catch(error => {

                console.log('ERRO AO CRIAR USUÁRIO->', error)

            })

    }


    //DADOS DE CONXEXÃO COM O FIREBASE
    componentDidMount(){

        const firebaseConfig = {
            apiKey: "AIzaSyCwJ3oMybjvauSDEGg9-29NmhM1F8SahRA",
            authDomain: "ds-pam1-vinicius.firebaseapp.com",
            projectId: "ds-pam1-vinicius",
            storageBucket: "ds-pam1-vinicius.appspot.com",
            messagingSenderId: "126298516807",
            appId: "1:126298516807:web:79d177d32e50e47d5a3062",
            measurementId: "G-977XDQFB1F"
          };

          if(firebase.apps.length === 0){

            firebase.initializeApp(firebaseConfig);

          }

    
    }

    render() {

        return (

            <View>

                <TextInput
                    style={styles.input}
                    placeholder="seuemail@gmail.com"
                    onChangeText={value => {

                        this.onChangeEmail(value);
                        
                    }
                    }
                />

                <TextInput
                    style={styles.input}
                    placeholder="******"
                    secureTextEntry
                    onChangeText={value => {

                        this.onChangePassword(value);
                      
                    }
                    }
                />

                <Button title="Cadastrar" onPress={() => this.Cadastro()} />
              
            </View>

        );

    }

}

const styles = StyleSheet.create({

    input: {
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#000'

    }

})