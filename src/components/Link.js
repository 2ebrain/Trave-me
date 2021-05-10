import React from 'react'
 
import { Text, StyleSheet} from 'react-native'
/*
 *Um simplescomponente de link que recebe tres propriedades, 
 *baseado no projetos podemos assim escolher seu tamanho e titulo.
 *sua cor esta no padrão do projeto onde não ira ter alteração, sendo assimm podendo ter apenas uma cor por padrão.
 *mas caso queira implementar é só adicionar um color no destructi e adicionar no style.{color:color.} 
*/

const styles = StyleSheet.create({
    link:{
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        color:'#4478B6',
        fontFamily:'Roboto_300Light',
        
    },
});

export default ({onPress, tittle, size}) => <Text style={[styles.link, {fontSize:size}]} onPress={onPress} >{tittle}</Text>
    
