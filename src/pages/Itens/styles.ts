import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#333744',
    },

    title: {
        color: '#f3f3f3',
        fontSize: 24,
        fontWeight: 'bold'
    },

    products: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 14,
        borderRadius: 8,
        backgroundColor: '#4d5663',
        marginBottom: 8,
    },

    productsProperty: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },

    productsValue: {
        marginTop: 4,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#fff'
    },

    Cbuttom: {
        position: 'absolute',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#395676',
        borderRadius: 70
    },

    Bbuttom: {
        position: 'absolute',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 110,
        backgroundColor: '#395676',
        borderRadius: 70
    },
});