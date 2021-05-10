import React, { Children } from 'react'

import { StyleSheet, View} from 'react-native'

export default (props) => {
  return(
    <View style={[styles.card,
          {backgroundColor:props.color}]}>
     {props.children}
    </View>
  )
}
const styles = StyleSheet.create({
  card:{
    width:'85%',
    height:300,
    borderRadius:20,
    paddingVertical:15,
    marginBottom:25,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
})


