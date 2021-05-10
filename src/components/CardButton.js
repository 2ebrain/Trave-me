import React from 'react'

import {Image, TouchableOpacity, Text, View, StyleSheet} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import Banner from '../assets/Banner-Man.png'

export default () =>{
  return(
   <View style={styles.container}>
     
    <Image source={Banner} style={styles.bannerButton}/>

    <LinearGradient 
    start = { { x : 0 ,  y : 0 } }  
    end = { { x : 0 ,  y : 2 } }
    colors={['#4478B6','#16355A','#4478B6']}
    style={styles.linearGradient}
    >
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.textCardButton}>Adquira CLICKS a partir de{'\n'}
        <Text style={styles.textPreco}>R$00,00</Text>(*){'\n'}
        <Text>(*) Cras ultrices, turpis in varius commodo</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>

   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'85%',
  },
  bannerButton:{
    width:'100%',
  },
  linearGradient:{
    borderRadius:15,
    paddingVertical:7,
    position:'relative',
    top:-40,
  },
  Button:{
    width:350,
    height:100,
    borderRadius:15,
  },
  textCardButton:{ 
    color:'#fff',
    fontSize:14,
    textAlign:'center',
  },
  textPreco:{
    fontSize:40,
    fontFamily:'Roboto_700Bold',
  },
})