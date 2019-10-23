import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, UserList } from 'react-native';

import About from './About';
import Home from './Home';
import Pay from './Pay';

import AccountInformation from './Account/AccountInformation';
import NewUser from './Account/NewUser';
import Article from './Article/Article';
import NewArticle from './Article/NewArticle';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            toto: '',
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Button
                title="Login"
                onPress={() => this.props.navigation.navigate('Login')}
                style={styles.buttons}   
                />
                <Button
                title="About"
                onPress={() => this.props.navigation.navigate('About')}
                style={styles.buttons}   
                />
                <Button
                title="Home"
                onPress={() => this.props.navigation.navigate('Home')}
                style={styles.buttons}   
                />
                <Button
                title="Pay"
                onPress={() => this.props.navigation.navigate('Pay')}
                style={styles.buttons}   
                />
                <Button
                title="AccountInformation"
                onPress={() => this.props.navigation.navigate('AccountInformation')}
                style={styles.buttons}   
                />
                <Button
                title="NewUser"
                onPress={() => this.props.navigation.navigate('NewUser')}
                style={styles.buttons}   
                />
                <Button
                title="Article"
                onPress={() => this.props.navigation.navigate('Article')}
                style={styles.buttons}   
                />
                <Button
                title="NewArticle"
                onPress={() => this.props.navigation.navigate('NewArticle')}
                style={styles.buttons}   
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    title : {

        justifyContent: 'center'
    },
    title_2 : {
        marginBottom: 10,
        fontSize:28
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
        padding:75
    }
});

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
    },
    About: {
        screen: About,
    },    
    Home: {
        screen: Home,
    },    
    Pay: {
        screen: Pay,
    },    
    AccountInformation: {
        screen: AccountInformation,
    },    
    NewUser: {
        screen: NewUser,
    },    
    Article: {
        screen: Article,
    },    
    NewArticle: {
        screen: NewArticle,
    }

});

export default createAppContainer(AppNavigator);
