import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';
import LignePanier from '../../components/LignePanier';
import CustomHeader from '../../components/CustomHeader';
import CustomFooter from '../../components/CustomFooter';
import headerStyles from '../../styles/HeaderStyles';

export default class Panier extends React.Component {
    static navigatorOptions = {
        title: 'Panier',
    };

    render () {

        return (
            <View style={headerStyles.container}>
                <CustomHeader title={'Panier'} navigation={this.props.navigation}/>
                <View style={styles.container}>
                    <LignePanier/>
                    <LignePanier/>
                </View>
                <CustomFooter navigation={this.props.navigation}/>
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