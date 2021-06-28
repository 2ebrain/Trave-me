import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import LoginDuasFases from './pages/LoginDuasFases'
import Cadastro from './pages/Cadastro'
import Welcome from './pages/Welcome'
import Destravar from './pages/Destravar'
import Termos from './pages/Termos'
import Home from './pages/Home'
import RoutesTab from './routes/RoutesTab'

const { Navigator, Screen} = createStackNavigator();

export default function Routes() {
   return(
    <NavigationContainer>
        <Navigator>
            <Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Screen name="LoginDuasFases" component={LoginDuasFases} options={{headerShown:false}}/>
            <Screen name="Cadastro" component={Cadastro} options={{headerShown:false}}/>
            <Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
            <Screen name="RoutesTab" component={RoutesTab}  options={{headerShown:true}}/>
            <Screen name="Destravar" component={Destravar} options={{headerShown:true}} />
            <Screen name="Termos" component={Termos}  options={{headerShown:false}}/>
            <Screen name="Home" component={Home}  options={{headerShown:true}}/>
        </Navigator>
    </NavigationContainer>
   );
}