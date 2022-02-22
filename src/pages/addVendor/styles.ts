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
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff'
    },

    textt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },

    contform: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    inputs: {
        padding: 14,
        marginTop: 8,
        borderRadius: 8,
        backgroundColor: '#4d5663'
    },

    select: {
        padding: 14,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: '#4d5663',
    },

    scanner: {
        width: 150,
        height: 150,
    },

    button: {
        padding: 18,
        marginTop: 8,
        alignItems: 'center',
        backgroundColor: '#384658',
        borderRadius: 14
    }

});