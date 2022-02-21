import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

//importações das Screens
import Itens from './pages/Itens'

/***********************/

export default function Routes(){
    return (
        <NavigationContainer>

            <AppStack.Navigator>

                <AppStack.Screen name='Itens' component={Itens} />

            </AppStack.Navigator>

        </NavigationContainer>
    );
}