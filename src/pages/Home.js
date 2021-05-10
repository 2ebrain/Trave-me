import React from 'react'
import { View, Text, StyleSheet, 
         Image, ScrollView, TouchableOpacity} from 'react-native'

// Importe dos componentes criados para a aplicação
import Botao from '../components/button'
import CardButton from '../components/CardButton'
import Card from '../components/Card'

//importes das imagens do logo e banners.                                          '
import Logo from '../assets/logo-trave.png'

import BannerGirl from '../assets/imgs/banner-girl-vest.png'
import iconMyAccoutn from '../assets/icons/icon-accout-check.png'

//importes dos icones
import QrCode from '../assets/qrcode_icon.png'
import Clicks from '../assets/clicks_icon.png'
import Local from '../assets/local_icon.png'

export default function Home(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.boxContainer}>
                    {/* Logo  */}
                    <Image source={Logo} style={styles.logo}/>
                    {/* Seção de Cards */}
                    <Card color='#fff'>
                        <Text style={styles.acssFast}>Acesso Rápido</Text>
                        <View style={styles.boxIcons}>
                            <View style={styles.iconItem}>
                                <TouchableOpacity>
                                 <Image source={QrCode} style={styles.iconsRapidos}/>
                                </TouchableOpacity>
                                <Text style={styles.iconText}>Escanear QR-CODE</Text>
                            </View>
                            <View style={styles.iconItem}>
                                <TouchableOpacity>
                                    <Image source={Clicks} style={styles.iconsRapidos}/>
                                </TouchableOpacity>
                                <Text style={styles.iconText}>Ver Saldo</Text>
                            </View>
                            <View style={styles.iconItem}>
                                <TouchableOpacity>
                                 <Image source={Local} style={styles.iconsRapidos}/>
                                </TouchableOpacity>
                                <Text style={styles.iconText}>Ir para meu Locker</Text>
                            </View>
                        </View>
                        <Text style={styles.textMyacc}>
                            Em <Text style={styles.textBlue}>Minha Conta</Text> 
                            você poderá gerenciar os gastos de seus Clicks
                        </Text>
                    </Card>
                    {/*  */}
                    <Card color='#4478B6'>
                        <Image source={BannerGirl} style={styles.bannerGirl}/>
                        <Text style={styles.textCardGirl}>Suspendisse ac dolor vel eros interdum tempus vel in enim</Text>
                    </Card>
                    {/*  */}
                    <Card color='#DCDCDC'>
                        <View style={styles.boxMyAccount}>
                            <TouchableOpacity>
                                <Image source={iconMyAccoutn}/>
                            </TouchableOpacity>
                            <Text style={styles.acssFastMyAccount}>Minha Conta</Text>
                        </View>
                        <View style={styles.boxAccInfo}>
                            <Text style={styles.textInfoCard}
                                >Você possui:..........................0008</Text>
                            <Text style={styles.textInfoCard}
                                >Recarga automática de:.......................... 5</Text>
                            <Text style={styles.textInfoCard}
                                >Quando saldo mínimo for de:................... 3</Text>
                        </View>
                        <Botao tittle='Ir para Minha Conta'
                               color='#4478B6'/>
                    </Card>
                    {/*  Card Button componente criado */}
                    <CardButton/>
                </View>
            </ScrollView>
        </View>

    );
}



const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    boxContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width:190,
        height:89,
        marginVertical:30,
    },
    boxMyAccount:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:320,
    },
    boxAccInfo:{
        width:319,
    },
    textInfoCard:{
        fontSize:14,
        fontFamily:'Roboto_400Regular'
    },
    boxBanner:{
        
        height:350,
        borderRadius:14,  
    },
    boxText:{
        position:'absolute',
        top:185,
    },
    bannerGirl:{
        width:'100%',
        height:300,
        borderRadius:20,
        marginTop:25,
        overflow:'hidden',
    },
    textCardGirl:{
        position:'relative',
        top:-40,
        textAlign:'center',
        fontFamily:'Roboto_300Light',
        fontSize:22,
        color:'#fff',
    },
    acssFast:{
        fontFamily:'Roboto_300Light',
        fontSize:18,
    },
    acssFastMyAccount:{
        fontFamily:'Roboto_300Light',
        color:'#4478B6',
        fontSize:18,
    },
    boxIcons:{
        flexDirection:'row', 
        width:330,
        justifyContent:'space-evenly',
    },
    iconItem:{
        height:141,
        alignItems:'center',
        justifyContent:'center',
    },
    iconText:{
        fontFamily:'Roboto_500Medium',
        fontSize:12,
        textAlign:'center',
    },
    iconsRapidos:{
        width:90,
        height:90,
    },
    textMyacc:{
        fontFamily:'Roboto_300Light',
        fontSize:16,
        marginHorizontal:25,
        textAlign:'center',
    },
    textBlue:{
        color:'#4478B6',
        fontFamily:'Roboto_500Medium',
    },

    textDes:{
        fontFamily:'Roboto_300Light',
        fontSize:22,
        color:'#fff',
        textAlign:'center',
    },

})