import React from 'react'

import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native'

import Button from '../components/button'

import QrCode from '../assets/icon-qrcode-display.png'

export default function Destravar(){
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Conexão com Bluetooth",
      "Nenhum dispositivo encontrato, falha na conexão.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )

    return(
        <View style={styles.container}>
            <Text style={styles.textInfo}>Ligue o bluetooth, aponte o quadrado
                para o QR-code e <Text style={styles.textBold}>DESTRAVE</Text> seu locker
            </Text>

            {/* <Image source={QrCode} style={styles.qrCode}/> */}
            <Button color='#4478B6' 
                    onPress={createTwoButtonAlert} 
                    tittle='Conectar Dispositivo'/>

            <Text style={styles.text}>Em instantes o locker se abrirá .
                  Lembre-se de ter seu smartphone junto a você, 
                  sem ele não será possível trancar  o locker.
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20,
        alignItems:'center',
        justifyContent:'space-evenly',
        
    },
    textInfo:{
        width:290,
        fontSize:18,
        textAlign:'center',
        fontFamily:'Roboto_400Regular',
        },
    textBold:{
        fontFamily:'Roboto_700Bold',
    },
    qrCode:{
        width:200,
        height:200,
    },
    text:{
        width:290,
        fontFamily:'Roboto_300Light',
        fontSize:18,
        textAlign:'center', 
    },
   
});