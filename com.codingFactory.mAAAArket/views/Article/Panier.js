import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';
import LignePanier from '../../components/LignePanier';


export default class Panier extends React.Component {
    static navigatorOptions = {
        title: 'Panier',
    };

    render () {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <LignePanier/>
                <LignePanier/>
            </View>
            
        )
    }

}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
    
    
});