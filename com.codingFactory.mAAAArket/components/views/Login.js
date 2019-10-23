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

export class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
            userName:'',
            userPassword:'',
            error:false,
            isLogin:false,
            error:false
        };
        this.userInput = React.createRef();
        this.passwordInput = React.createRef();
    };

    logout = () => {
        this.setState({isLogin : false});
        this.setState({userName : ''});
        this.setState({userPassword : ''});
    };

    login = () => {
        if (this.state.userName === "admin" && this.state.userPassword === "admin"){
            this.setState({isLogin : true});
            this.setState({error :false});
        }
        else {
            this.setState({error :true});
            this.userInput.current.clear();
            this.passwordInput.current.clear();
        }
    };

    render() {
        if (!this.state.isLogin) {
            return (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>mAAAArket</Text>
                    </View>
                    <TextInput
                        placeholder="Identifiant"
                        style={styles.input}
                        onChangeText={userName => this.setState({userName})}
                        ref={this.userInput}
                    />
                    <TextInput
                        placeholder="Mot de Passe"
                        style={styles.input}
                        onChangeText={userPassword => this.setState({userPassword})}
                        secureTextEntry={true}
                        ref={this.passwordInput}
                    />

                <Button
                    title={"Login"}
                    onPress={() => this.login()}
                    color="#000"
                    style={styles.buttons}
                />
                {this.state.error && <Text style={styles.error}>Identifiant ou Mot de passe incorrect</Text>}
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 300
    },
    title : {
        color : '#FFD281',
        fontSize : 68,
        alignItems: "stretch",
        textAlign :'center',
        margin: 'auto',
        marginBottom: 70
    },
    input :{
        width: 200,
        margin: 10,
        padding: 5,
        backgroundColor: '#fff'
    },
    error :{
        color : 'red',
        backgroundColor: 'white'
    },
    buttons: {
        marginBottom: 10 ,
        margin:75,
        padding:75,
        justifyContent: 'center',
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
