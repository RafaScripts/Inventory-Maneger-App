import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import api from "../../services/api";

export default function addItem() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [data, setData] = useState('');
    const [name , setName] = useState('');
    const [total , setTotal] = useState('');
    const [vendor, setVendor] = useState([]);
    const [vendor_id, setVendor_id] = useState({});

    async function loadProducts() {
        const response = await api.get('/vendors');

        setVendor(response.data);
    }


    useEffect(() => {
        loadProducts();
    }, []);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        setData(data);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    function changeName(value){
        const nameComplete = data + ' - ' + value ;
        setName(nameComplete);
    }

    function changeTotal(Tl){
        setTotal(Tl)
    }

    async function sub(){
        const data = { name, total, vendor_id };

        await api.post('/itens', data);

        alert('Produto Cadastrado');
    }


    return (
        <View style={styles.container}>
            <View style={styles.contform}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.scanner}
                />

                {scanned && <Button
                    color='#384658'
                    title={'Tap to Scan Again'}
                    onPress={() => setScanned(false)} />}

                <TextInput
                    style={styles.inputs}
                    placeholderTextColor={'#fff'}
                    placeholder='Nome do Produto'
                    onChangeText={(Prname) => changeName(Prname) }  />
                <TextInput
                    style={styles.inputs}
                    placeholderTextColor={'#fff'}
                    placeholder='Quantidade'
                    onChangeText={(Tl) => changeTotal(Tl)} />
                <Picker
                    style={styles.select}
                    selectedValue={vendor_id}
                    onValueChange={(itemValue:any, itemIndex: any) => { setVendor_id(itemValue) }} >
                    {
                        vendor.map(vr => {
                            return <Picker.Item key={vr.id} label={vr.VendorName} value={vr.id} />
                        })
                    }
                </Picker>
                <Button color='#384658' title={'Cadastrar'} onPress={() => sub()} />
            </View>
        </View>
    );
}