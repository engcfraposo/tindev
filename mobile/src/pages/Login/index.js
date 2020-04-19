import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles'
import logo from '../../assets/logo.png'
import api from '../../services/Api'


export default function Login() {

       
    const [login, setLogin] = useState('');

    const navigation = useNavigation();

    async function handleLogin(){

        const response = await api.post('devs', { login } )
        
        const { _id } = response.data

        navigation.navigate('Main', { _id });
    }
  return (
    <KeyboardAvoidingView 
    behavior="padding"
    enabled={Platform.OS == 'ios'}
    style={styles.container}
    
    >
        <Image source={logo}/>
        <TextInput
        autoCapitalize ="none"
        autoCorrect = {false} 
        placeholder="Digite seu usuário no Github"
        placeholderTextColor="#999"
        style={styles.input}
        value={login}
        onChangeText={setLogin}

        />
    <TouchableOpacity 
    style={styles.button}
    onPress={handleLogin}
    >
        <Text style={styles.buttonText}> Enviar </Text>
    </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}


