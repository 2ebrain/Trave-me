import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import { useNavigation } from '@react-navigation/core'


import CardButton from '../components/CardButton'
import Link from '../components/Link'

export default function Clicks(){
    const navigation = useNavigation()

    function handleNavigateToTermsAndPolitcDetails(){
        navigation.navigate('Termos');
    }
    return(
        <SafeAreaView style={styles.container}>
                <Text style={styles.contentText}>
                    <Text style={styles.contentSubText}>Non Justo Felis. Sed Ornare Tellus</Text> 
                    Sed Ornare Tellus Eu Molestie Ullamcorper. 
                    Phasellus Cursus Mattis Interdum. Quisque Eu Imperdie
                </Text>
                <CardButton/>
                <Text style={styles.contentTextInfo}>
                    Entenda:  Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. sapien vel 
                    orcino blandit ullamco
                </Text>
                <Text style={styles.contentTextLink}>
                    Para obter mais informações consulte nossos <Link tittle='Termos de serviço e Política de privacidade' 
                                                                      size={11} 
                                                                      onPress={handleNavigateToTermsAndPolitcDetails}/>
                </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'auto',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    contentText:{
        fontFamily:'Roboto_400Regular',
        width:342,
        fontSize:14,
        textAlign:'center',
    },
    contentSubText:{
        fontSize:18,
    },
    contentTextInfo:{
        fontFamily:'Roboto_300Light',
        width:349,
        fontSize:14,
        textAlign:'center',
    },
    contentTextLink:{
        fontFamily:'Roboto_300Light',
        width:224,
        fontSize:11,
        textAlign:'center',
    },
})