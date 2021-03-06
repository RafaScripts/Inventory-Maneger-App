import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import api from '../../services/api';

export default function Itens(){
    const navigation = useNavigation();
    const [ products, setProducts ] = useState([]);


    async function loadProducts() {
        const response = await api.get('/itens');

        setProducts(response.data);
    }

    useEffect(() => {
        loadProducts();
    }, [products]);


    function navigationToAdd() {
        navigation.navigate('addItem');
    }

    function navigationToVendors() {
        navigation.navigate('Vendors');
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.products}>
                            <Text style={styles.productsProperty}>ID: { item.id }</Text>
                            <Text style={styles.productsValue}>{ item.name }</Text>
                            <Text style={styles.productsValue}>{ item.total }</Text>
                            <Text style={styles.productsValue}>{ item.VendorName }</Text>
                        </View>
                    )
                }}/>
            <TouchableOpacity
                style={styles.Cbuttom}
                onPress={() => navigationToAdd()}>
                <Ionicons name="add" size={40} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.Bbuttom}
                onPress={() => navigationToVendors()}>
                <AntDesign name="idcard" size={24} color="#fff" />
            </TouchableOpacity>

        </View>
    );
}
