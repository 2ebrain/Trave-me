import React from 'react'

import { FontAwesome } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Mais from '../pages/Mais'
import Locais from '../pages/Locais'
import Home from '../pages/Home'
import Clicks from '../pages/Clicks'
import Travas from '../pages/Destravar'


const { Navigator, Screen } = createBottomTabNavigator();

{/** Esse é o sistema inicial de rotas por Tab.*/}

export default function RoutesTab() {
    return(
        <Navigator
        tabBarOptions={{
            style:{
                backgroundColor:'#fff',
            },
            iconStyle:{
                flex:0,
                width:40,
                height:20,
                
            },
        
        }}>
            <Screen name="Inicio" 
                    component={Home}
                    options={{
                        
                        tabBarIcon:() => {
                            return(
                                <FontAwesome name='home' size={20} color='#000'/>
                            );
                        }
                    }} 
            />
            <Screen name="Locais" 
                    component={Locais}
                    options={{
                        tabBarIcon:() => {
                            return(
                                <FontAwesome name='map-marker' size={20} color='#000'/>
                            );
                        },
                        
                    }} 
            />
            <Screen name="Travas" 
                    component={Travas}
                    options={{
                        tabBarIcon:() => {
                            return(
                                <FontAwesome name='qrcode' size={20} color='#000'/>
                            );
                        }
                    }} 
            />
            <Screen name="Clicks" 
                    component={Clicks}
                    options={{
                        tabBarIcon:() => {
                            return(
                                <FontAwesome name='credit-card' size={20} color='#000'/>
                            );
                        }
                    }} 
            />
            <Screen name="Mais" 
                    component={Mais}
                    options={
                        {    
                        tabBarIcon:() => {
                            return(
                                <FontAwesome name='align-justify' size={20} color='#000'/>
                            );
                        }
                    }} 
            />
            
        </Navigator>
    );
}