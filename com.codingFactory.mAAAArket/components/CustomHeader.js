import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
//import Navigation from '../views/Navigation';

export default class CustomHeader extends React.Component{

    static navigatorOptions = {
        title: 'CustomHeader',
    };

    constructor(props){
        super(props);
    };

    render(){
        
        return (

            <View >
                <Header
                        statusBarProps={{ barStyle: 'dark-content' }}
                        barStyle="dark-content"
                        leftComponent={
                            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Home')}>
                            <Image style={styles.img_button}
                                source={require('../assets/header/home.png')}
                            />
                            </TouchableOpacity>
                        }
                        
                        centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 20 } }}
                        
                        rightComponent={
                            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('About')} >
                            <Image style={styles.img_logo}
                                source={require('../assets/header/logo_2.png')}
                            />
                            </TouchableOpacity>
                        }
                        containerStyle={{
                            backgroundColor: '#d9974a',
                        }}
                    />
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
        height: 1000
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
        height: 35
    },
    img_logo: {
        width: 100,
        height: 35,
    }
});