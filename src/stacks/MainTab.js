import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home'
import Search from '../screens/Search'
import Licenca from '../screens/Licenca'
import Monitoramento from '../screens/Monitoramento'
import Taxa from '../screens/Taxa'
import Educacao from '../screens/Educacao'
import Comunidade from '../screens/Comunidade'
import Desempenho from '../screens/Desempenho'
import Configuracao from '../screens/Configuracao'
import Suporte from '../screens/Suporte'
import UserConfig from '../screens/UserConfig'

import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default () =>(
    <Tab.Navigator tabBar={props=><CustomTabBar{...props}/>} screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Configuracao" component={Configuracao}/>
        <Tab.Screen name="Licenca" component={Licenca}/>
        <Tab.Screen name="Taxa" component={Taxa}/>
        <Tab.Screen name="Educacao" component={Educacao}/>
        <Tab.Screen name="Suporte" component={Suporte}/>
        <Tab.Screen name="Desempenho" component={Desempenho}/>
        <Tab.Screen name="Comunidade" component={Comunidade}/>
        <Tab.Screen name="UserConfig" component={UserConfig}/>
    </Tab.Navigator>
);