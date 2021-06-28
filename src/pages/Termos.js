import React from 'react'
import { useNavigation } from '@react-navigation/core'

import { View, Text, 
         StyleSheet, ScrollView, 
         StatusBar, Image, TouchableOpacity} from 'react-native'

import CloseIcon from '../assets/icon-close.png'

import Estilo from './Estilos'

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        
        
      },
    boxTermos:{
        backgroundColor:"#DCDCDC",
        borderRadius:20,
        marginHorizontal:15,
        marginVertical:15,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:'#707070',
            
    },
    boxClose:{
        width:'100%',
        alignItems:"flex-end",
        padding:10,
    },
    buttonClose:{},
    CloseIcon:{
        width:24,
        height:24,
    },
    tituloText:{
        fontSize:22,
        fontFamily:'Roboto_500Medium',
    },
    txt:{
        fontFamily:'Roboto_300Light',
        marginTop:14,
        marginBottom:10,
        marginRight:56,  
        fontSize:18,  
    },

});

export default function Termos(){
    const navigation = useNavigation();
    return(
        <View style={Estilo.cont}>
            <ScrollView style={styles.boxTermos}>
                <View style={styles.boxClose}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}
                                     style={styles.buttonClose}>
                         <Image source={CloseIcon}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.tituloText}>Termos e condições de uso</Text>
                <Text style={styles.txt}>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Donec eros elit, mollis id hendrerit sit amet, 
                    pharetra ut massa. Sed id sodales nibh. Ut rutrum urna vitae purus porttitor, 
                    eu malesuada sapien tempus. Aliquam sapien nunc, dictum ac lacus sit amet, tincidunt facilisis odio. Curabitur non libero ac arcu dignissim vulputate. 
                    Duis non justo felis. Sed ornare tellus eu molestie ullamcorper. Phasellus cursus mattis interdum. Quisque eu imperdiet lorem. Vivamus et dignissim augue, ut lacinia dolor. 
                    Mauris efficitur ex urna, vitae fermentum orci posuere in. In et sem scelerisque, convallis orci ac, euismod nisl.
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    Ut a condimentum dolor. Suspendisse et purus consequat, molestie mauris nec, semper purus. Vivamus sollicitudin augue risus, imperdiet molestie purus iaculis id. Nulla sem tortor, ullamcorper condimentum lectus ut, 
                    cursus rhoncus lacus. Donec volutpat varius tempor. Nulla lobortis neque ut elit condimentum vestibulum. Integer turpis sem, commodo sagittis ornare in, tincidunt non elit. Integer non faucibus odio. 
                    Vivamus porttitor id ex a luctus. In hac habitasse platea dictumst. Nulla nec interdum augue, in venenatis mauris. Praesent tempus ullamcorper feugiat. Nam posuere quis diam elementum volutpat. 
                    Quisque finibus ex nec augue mollis, at gravida eros malesuada.
                </Text>
            </ScrollView>

        </View>
    );
}