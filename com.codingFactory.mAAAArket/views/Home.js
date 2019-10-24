import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import Navigation from './Navigation'
const { width, height } = Dimensions.get('window');

import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';

export default class Home extends React.Component {

    static navigatorOptions = {
        title: 'Home',
    };

    constructor(props){
        super(props);
        this.state={
            title: 'Accueil',
        };
    };

    render () {

        const {navigate} = Navigation;

        return (

            <View>
                <CustomHeader 
                    Navigat={this.props.navigation.navigate('About')} 
                    Title={this.state.title} 
                />

                <View style={styles.container}>                
                    <Button
                    title="About"
                    onPress={() => this.props.navigation.navigate('About')}
                    style={styles.buttons} 
                    /> 
                </View>

                <CustomFooter style={styles.footer}  />



            </View>
        )
    }

}

const styles = StyleSheet.create({
    title : {
        fontSize:20
    },
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 40,
        height: (height - 160)
    },
    buttons: {
        marginBottom: 10 ,
        margin:75,
        padding:5
    },
    tab: {
        padding: 20,
        height: 100,
    },
    img_button: {
        width: 35,
        height: 35,
        color: '#ffffff',
    },
    img_logo: {
        width: 100,
        height: 35,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
});