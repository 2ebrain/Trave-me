import React from 'react'
import { View, 
         Text, TextInput, 
         StyleSheet, Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import Botao from '../components/button'
import Link from '../components/Link'

import UserIcon from '../assets/icon-user.png'
import CameraIcon from '../assets/icons/icon-my-camera.png'
import Google from '../assets/icons/icon-google.png'
import Face from '../assets/icons/icon-face.png'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    boxUser:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginBottom:22,
    },
    boxIcon:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        
    },
    userIcon:{
        width:125,
        height:125,
    },
    cameraIcon:{
        width:55,
        height:55,
    },
    buttonCamera:{
        position:'absolute',
        left:'53%',
        bottom:0,
    },
    inputs:{
        fontFamily:'Roboto_300Light',
        fontSize:18,
        width: 304,
        height: 48, 
        borderRadius: 5,
        marginBottom: 16,
        backgroundColor: '#fff',
        padding:10,
    },   
    cadastrado:{
        fontFamily:'Roboto_300Light',
        fontSize:18,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        color:'#4478B6',
        marginTop:23,
        
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
        fontFamily:'Roboto_300Light',
        fontSize:18,
        marginTop:17,
    
    },
});

export default function Cadastro(){
    const navigation = useNavigation();

    function handleNavigateToLoginDetails(){
        navigation.goBack();
    }
    function handleNavigateToEntradaDetails(){
        navigation.navigate('Entrada');
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxUser}>
             <View style={styles.boxIcon}>
                <TouchableOpacity>
                    <Image source={UserIcon} style={styles.userIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCamera}>
                 <Image source={CameraIcon} style={styles.cameraIcon}/>
                </TouchableOpacity>
             </View>
            </View>
            <View style={styles.box}>
                <TextInput placeholder="Nome"
                        style={styles.inputs} 
                />
                <TextInput placeholder="E-mail"
                        style={styles.inputs}
                />
                <TextInput placeholder="Senha"
                        style={styles.inputs} 
                        secureTextEntry/>
                <TextInput placeholder="Confirmar senha"
                        style={styles.inputs}
                        secureTextEntry/>
            </View>
            <Botao tittle="Cadastrar" onPress={handleNavigateToEntradaDetails} color="#4478B6"/>
            
            <Link tittle="Já sou cadastrado"  onPress={handleNavigateToLoginDetails} size={18}/>
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