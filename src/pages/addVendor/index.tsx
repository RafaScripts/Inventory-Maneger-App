import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import api from "../../services/api";

export default function addVendor() {
    const [VendorName, setVendorName] = useState('');

    async function sub(){
        await api.post('/vendors', {
            VendorName: VendorName,
        });

        alert('fornecedor cadastrado');
    }

    console.log(VendorName);

    return (
        <View style={styles.container}>
            <View style={styles.contform}>
                <Text style={styles.title}>Adicionar Fornecedor</Text>

                <TextInput
                    style={styles.inputs}
                    placeholderTextColor={'#fff'}
                    placeholder={'Nome do Fornecedor'}
                    onChangeText={(text) => setVendorName(text)}/>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => sub()} >
                    <Text style={styles.textt}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}