import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

//importações das Screens
import Itens from './pages/Itens';
import addItem from './pages/addItem';
import Vendors from './pages/Vendors';
import addVendor from "./pages/addVendor";

/***********************/

export default function Routes(){
    return (
        <NavigationContainer>

            <AppStack.Navigator>

                <AppStack.Screen name='Itens' component={Itens} />
                <AppStack.Screen name='addItem' component={addItem} />
                <AppStack.Screen name='Vendors' component={Vendors} />
                <AppStack.Screen name='addVendor' component={addVendor} />

            </AppStack.Navigator>

        </NavigationContainer>
    );
}