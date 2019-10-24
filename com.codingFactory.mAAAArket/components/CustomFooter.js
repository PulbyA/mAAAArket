import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import Navigation from '../views/Navigation'

const { width, height } = Dimensions.get('window');

export default class CustomFooter extends React.Component{
    
    static navigatorOptions = {
        title: 'CustomFooter',
    };

    constructor(props){
        super(props);
    };

    render(){

        const {navigate} = Navigation;

        return (

            <View style={styles.container}>
                <Header
                    statusBarProps={{ barStyle: 'dark-content' }}
                    barStyle="dark-content"
                    leftComponent={
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('AccountInformation')}>
                        <Image style={styles.img_button}
                            source={require('../assets/header/person_2.png')}
                        />
                        </TouchableOpacity>
                    }
                    
                    centerComponent={
                        
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('NewArticle')} >
                        <Image style={styles.img_button}
                            source={require('../assets/header/panier.png')}
                        />
                        </TouchableOpacity>
                    }
                    
                    rightComponent={
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Pay')} >
                        <Image style={styles.img_button}
                            source={require('../assets/header/panier.png')}
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
        backgroundColor: '#d9974a',
        width: width,
        height: 80,
    },
    cont: {
        height: 80,
        width: 100,
        position: 'absolute'
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
        marginBottom: 80,
    },
    img_logo: {
        width: 100,
        height: 35,
    },
});