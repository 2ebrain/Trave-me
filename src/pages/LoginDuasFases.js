import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import Botao from '../components/button'
import Link from '../components/Link'

import Estilo from './Estilos'

import Logo from '../assets/logo-trave.png'

const styles = StyleSheet.create({
    inputBox:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom:34,
    },
    inputNumber:{
        width: 43,
        height: 48,
        margin: 10,
        backgroundColor:'#fff',
        borderRadius:5,
        
    },
    codEmail:{
        fontFamily:'Roboto_500Medium',
        fontSize:20,
        marginBottom:40,
    },
});

export default function LoginDuasFases(){

    const navigation = useNavigation();

    function handleNavigateToEntradaDetails(){
        navigation.navigate('Entrada');
    }

    return(
        <View style={Estilo.container}>
            <Image source={Logo} style={Estilo.logo} />
           <Text style={styles.codEmail}>Digite o código recebido pelo e-mail.</Text>
           <View style={styles.inputBox}>
            <TextInput placeholder="0" style={styles.inputNumber}/>
            <TextInput placeholder="0" style={styles.inputNumber}/>
            <TextInput placeholder="0" style={styles.inputNumber}/>
            <TextInput placeholder="0" style={styles.inputNumber}/>
            <TextInput placeholder="0" style={styles.inputNumber}/>
            <TextInput placeholder="0" style={styles.inputNumber}/>
           </View>
            <Botao tittle="Avançar" onPress={handleNavigateToEntradaDetails} color="#4478B6"/>
            <Link tittle='Cancelar' size={18}/>
        </View>
    );
}