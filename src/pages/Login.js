import { useNavigation } from '@react-navigation/core'
import React from 'react'

import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native'

import Botao from '../components/button'

import Estilo from './Estilos'

import Link from '../components/Link'

import Logo from '../assets/logo-trave.png'
import Google from '../assets/icons/icon-google.png'
import Face from '../assets/icons/icon-face.png'

const styles = StyleSheet.create({
    input:{  
        padding:11,
        width: 304,
        height: 48, 
        borderRadius: 5,
        marginBottom: 16,
        backgroundColor:'#fff',
        fontFamily:'Roboto_300Light',
        fontSize:18,
    },
    boxInput:{
        marginBottom:19,
    },
    boxsociais:{
        alignContent:'center',
        justifyContent:'center',
    },   
    sociais:{
        flexDirection:'row',
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
    }, 
    icon:{
        marginTop:7,
        marginRight:24,
        marginBottom:25,
        width:48,
        height:48,
    },
    redesSociais:{
        fontSize:18,
        fontFamily:'Roboto_300Light',
        marginTop:17,
    },
    esqueciSenha:{
        fontSize:18,
        fontFamily:'Roboto_300Light',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        color:'#4478B6',
        marginTop:23,
        
    },
});
export default function Login(){

    const navigation = useNavigation();

    function handleNavigateToCadastroDetails(){
        navigation.navigate('Cadastro');
    }
    function handleNavigateToEntradaDetails(){
        navigation.navigate('Welcome');
    }

    return(
        <View style={Estilo.container}>
            <Image source={Logo} style={Estilo.logo} />

            <View style={styles.boxInput}>
                <TextInput placeholder="E-mail" textContentType="emailAddress"
                           style={styles.input} />
                <TextInput placeholder="Senha" 
                            style={styles.input}  
                            secureTextEntry/>
            </View>
            
            <View >
                <Botao tittle="Entrar" onPress={handleNavigateToEntradaDetails} color="#707070"/>
                <Botao tittle="Quero me registrar" onPress={handleNavigateToCadastroDetails} color="#4478B6"/>
            </View>
        
            <Link tittle="Esqueci a senha" size={18}/>
          

            <View style={styles.boxsociais}>
                <Text style={styles.redesSociais}>Acesse com as Redes Sociais</Text>
                <View style={styles.sociais}>
                <TouchableOpacity>
                     <Image source={Face} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Google} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
