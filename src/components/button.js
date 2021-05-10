import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    button:{
        width:250,
        height:55,
        borderRadius:30,
        elevation: 3,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:16,
    },
    buttonText:{
        fontSize: 18,
        color: "#fff",
        fontFamily:'Roboto_700Bold',
    },
})
export default ( { onPress , tittle, color } )=> {     
    return (
        /*Botão funcional do app, onde ele recebe as propriedades color, titulo e a função onPress */
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={ onPress }>
            <Text style={styles.buttonText}>{tittle}</Text>
        </TouchableOpacity>
    )
}