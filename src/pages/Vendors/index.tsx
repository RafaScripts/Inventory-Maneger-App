import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import api from '../../services/api';

export default function Vendors(){
    const navigation = useNavigation();
    const [ vendors, setVendors ] = useState([]);


    async function LoadVendors() {
        const response = await api.get('/vendors');

        setVendors(response.data);
    }

    useEffect(() => {
        LoadVendors();
    }, [vendors]);


    function navigationToAdd() {
        navigation.navigate('addVendor');
    }

    return (
        <View style={styles.container}>

            <FlatList
                data={vendors}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.products}>
                            <Text style={styles.productsProperty}>ID: { item.id }</Text>
                            <Text style={styles.productsValue}>{ item.VendorName }</Text>
                        </View>
                    )
                }}/>

            <TouchableOpacity
                style={styles.Cbuttom}
                onPress={() => navigationToAdd()}>
                <Ionicons name="add" size={40} color="#fff" />
            </TouchableOpacity>

        </View>
    );
}
