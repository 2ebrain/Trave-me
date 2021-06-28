import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Dimensions} from 'react-native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'

import mapMaker from '../assets/icons/Pin-Locker.png'


export default function Locais(){
    return(
        <SafeAreaView style={styles.container}>
            
            <MapView style={styles.map}
                     provider={PROVIDER_GOOGLE}
                     initialRegion={{
                         latitude:-23.6307505,
                         longitude:-46.6889475,
                         latitudeDelta: 0.008,
                         longitudeDelta: 0.008,
                     }}>
                         <Marker
                            icon={mapMaker}
                            calloutAnchor={{
                                x:0.5,
                                y:-0.2,
                            }}
                            coordinate={{
                                latitude:-23.6307405,
                                longitude:-46.6889475,
                            }}>
                                <Callout tooltip onPress={() => { alert('Em breve')}}>
                                    <View style={styles.calloutContainer}>
                                        <Text style={styles.calloutText}>Lipsum</Text>
                                    </View>
                                </Callout>
                         </Marker>
                         <Marker
                            icon={mapMaker}
                            calloutAnchor={{
                                x:0.5,
                                y:-0.2,
                            }}
                            coordinate={{
                                latitude:-23.628880,
                                longitude:-46.683766,
                            }}>
                                <Callout tooltip onPress={() => { alert('Em breve')}}>
                                    <View style={styles.calloutContainer}>
                                        <Text style={styles.calloutText}>Lipsum</Text>
                                    </View>
                                </Callout>
                         </Marker>
                         <Marker
                            icon={mapMaker}
                            calloutAnchor={{
                                x:0.5,
                                y:-0.2,
                            }}
                            coordinate={{
                                latitude:-23.626726,
                                longitude:-46.683894,
                            }}>
                                <Callout tooltip onPress={() => { alert('Em breve')}}>
                                    <View style={styles.calloutContainer}>
                                        <Text style={styles.calloutText}>Lipsum</Text>
                                    </View>
                                </Callout>
                         </Marker>
                         <Marker
                            icon={mapMaker}
                            calloutAnchor={{
                                x:0.5,
                                y:-0.2,
                            }}
                            coordinate={{
                                latitude:-23.631237,
                                longitude:-46.686852,
                            }}>
                                <Callout tooltip onPress={() => { alert('Em breve')}}>
                                    <View style={styles.calloutContainer}>
                                        <Text style={styles.calloutText}>Lipsum</Text>
                                    </View>
                                </Callout>
                         </Marker>
                         <Marker
                            icon={mapMaker}
                            calloutAnchor={{
                                x:0.5,
                                y:-0.2,
                            }}
                            coordinate={{
                                latitude:-23.626445,
                                longitude:-46.685388,
                            }}>
                                <Callout tooltip onPress={() => { alert('Em breve')}}>
                                    <View style={styles.calloutContainer}>
                                        <Text style={styles.calloutText}>Lipsum</Text>
                                    </View>
                                </Callout>
                         </Marker>
                         <Marker
                            icon={mapMaker}
                            calloutAnchor={{
                                x:0.5,
                                y:-0.2,
                            }}
                            coordinate={{
                                latitude:-23.629323,
                                longitude:-46.683894,
                            }}>
                                <Callout tooltip onPress={() => { alert('Em breve')}}>
                                    <View style={styles.calloutContainer}>
                                        <Text style={styles.calloutText}>Lipsum</Text>
                                    </View>
                                </Callout>
                         </Marker>
                         <Marker
                            icon={mapMaker}
                            calloutAnchor={{
                                x:0.5,
                                y:-0.2,
                            }}
                            coordinate={{
                                latitude:-23.629323,
                                longitude:-46.685603,
                            }}>
                                <Callout tooltip onPress={() => { alert('Em breve')}}>
                                    <View style={styles.calloutContainer}>
                                        <Text style={styles.calloutText}>Lipsum</Text>
                                    </View>
                                </Callout>
                         </Marker>
            </MapView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Pesquise aqui</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        position:'absolute',
        left:25,
        right:24,
        
        top:50,
        paddingLeft:45,

        backgroundColor:'white',
        borderRadius:5,
        width:350, 
        height:46,

        justifyContent:'center',
        alignItems:'flex-start',

        elevation:8,
        
    },

    headerText:{
        fontFamily:'Roboto_300Light',
        fontSize:18,
    },

    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    calloutContainer:{
        elevation:8,
        width:90,
        height:44,
        paddingHorizontal:16,
        backgroundColor:'#FFFFFF',
        borderRadius:5,
        justifyContent:'center',
    },
    calloutText:{
        fontSize:14,
        fontFamily:'Roboto_500Medium',
    },
});