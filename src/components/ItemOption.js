import React from 'react'

import {
        View, 
        Text, 
        StyleSheet, 
        Image,
        TouchableOpacity,
} from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

export default ({tituloItem, sourceImg, colorText})=> {
  return(
   <View style={styles.container}>
     <TouchableOpacity style={styles.button}>
       <Image source={sourceImg} 
              style={styles.iconOptions}
        />

       <View style={styles.itemOption}>
        <Text style={[styles.textOption, {color: colorText }]}>
          {tituloItem}
        </Text>
        <FontAwesome name='chevron-right' 
                      size={24}
                      style={styles.iconArrow}
                      color='#6C6D70'
        />
        </View>
     </TouchableOpacity>
   </View>
  );

}

const styles = StyleSheet.create({
  container:{
    height:55,
    width:'100%',
    justifyContent:'center',

  },
  button:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    alignItems:'center',
    paddingHorizontal:10,
    
  },
  iconOptions:{
    width:39,
    height:42,
  },
  itemOption:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'85%',
    borderBottomWidth:2,
    borderColor:'#fff',
  },
  textOption:{
    fontSize:18,
  },
 
});