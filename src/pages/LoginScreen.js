import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

import firebase from 'firebase';

export default class LoginScreen extends React.Component {

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

    
    tryLogin() {

        console.log(this.state);

            try {

            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(response => {

                    console.log('USUÁRIO AUTENTICADO -> ', response.user);
                   
                    this.props.navigation.replace('Home');

                }).catch(error => {

                    console.log('ERRO DE AUTENTICAÇÃO', error.code)

                    if (error.code === 'auth/user-not-found') {

                        //TRATAMENTO DE ERRO DE USUARIO NÃO ENCONTRADO
                        Alert.alert(
                            'USUÁRIO NÃO ENCONTRADO',
                            'NÃO FOI POSSÍVEL LOGAR, PARA PROSSEGUIR CADASTRE-SE!',
                            [
                                
                                {
                                    text: 'OK',
                                    onPress: () => { console.log('CLICOU OK!') }
                                },

                            ]

                        );

                    }


                })

        }

        
        catch (error) {

            console.log('ERRO NO TRY -> ', error);

        }

    }

    //DADOS DE CONXEXÃO COM O FIREBASE
    componentDidMount() {

        const firebaseConfig = {
            apiKey: "AIzaSyCwJ3oMybjvauSDEGg9-29NmhM1F8SahRA",
            authDomain: "ds-pam1-vinicius.firebaseapp.com",
            projectId: "ds-pam1-vinicius",
            storageBucket: "ds-pam1-vinicius.appspot.com",
            messagingSenderId: "126298516807",
            appId: "1:126298516807:web:79d177d32e50e47d5a3062",
            measurementId: "G-977XDQFB1F"
        };

        if (firebase.apps.length === 0) {

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

                <Button title="ENTRAR" onPress={() => { this.tryLogin() }} />
                <Button title="CADASTRAR" onPress={() => { this.props.navigation.navigate('Cadastro') }} />

            </View>

        )

    }

}

const styles = StyleSheet.create({

    input: {
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#000'

    }

})