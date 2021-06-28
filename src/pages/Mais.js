import React from 'react'
import {View, 
        SafeAreaView, 
        StyleSheet, 
        StatusBar,} from 'react-native'

import ItemOption from '../components/ItemOption'


//impotes dos icones das opções
import IconAccount from '../assets/icons/Icon-user.png'
import IconQrcode from '../assets/icons/icon-qrcode.png'
import IconMyAccount from '../assets/icons/icon-myaccount.png'
import IconLocker from '../assets/icons/icon-locker.png'
import IconNotifications from '../assets/icons/icon-notifications.png'
import IconMyCard from '../assets/icons/icon-my-card.png'
import IconPolitics from '../assets/icons/icon-politics.png'
import IconConfig from '../assets/icons/icon-config.png'
import IconHelp from '../assets/icons/icon-help.png'
import IconExit from '../assets/icons/icon-exit.png'


export default function Mais(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View style={styles.optionsContainer}>
                <ItemOption sourceImg={IconAccount} tituloItem='Perfil'/>
                <ItemOption sourceImg={IconQrcode} tituloItem='Abrir / Fechar Lockers'/>
                <ItemOption sourceImg={IconMyAccount} tituloItem='Minha Conta'/>
                <ItemOption sourceImg={IconLocker} tituloItem='Lockers em Uso'/>
                <ItemOption sourceImg={IconNotifications} tituloItem='Notificações e Alertas'/>
                <ItemOption sourceImg={IconMyCard} tituloItem='Adquira Clicks'/>
                <ItemOption sourceImg={IconPolitics} tituloItem='Política de Privacidade'/>
                <ItemOption sourceImg={IconConfig} tituloItem='Configurações'/>
                <ItemOption sourceImg={IconHelp} tituloItem='Ajuda'/>
                <ItemOption sourceImg={IconExit} tituloItem='Sair' colorText='#FF0000'/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    optionsContainer:{
        flex:1,
        backgroundColor:'#DCDCDC',
        justifyContent:'space-around',
        alignItems:'center',
    },
    
})
