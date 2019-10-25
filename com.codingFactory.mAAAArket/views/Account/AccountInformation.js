import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomFooter from '../../components/CustomFooter';
import headerStyles from '../../styles/HeaderStyles';


export default class AccountInformation extends React.Component {
    static navigatorOptions = {
        title: 'AccountInformation',
    };

    render () {


        return (
            <View style={headerStyles.container}>

                <CustomHeader title={'Compte'} navigation={this.props.navigation}/>
                <View style={styles.container}>
                    <Text style={styles.title}>Account Information</Text>
                </View>

                <CustomFooter navigation={this.props.navigation}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    title : {
        fontSize:20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        marginBottom: 10 ,
        margin:75,
        padding:5
    },
    tab: {
        padding: 20,
        height: 100,
    }
});