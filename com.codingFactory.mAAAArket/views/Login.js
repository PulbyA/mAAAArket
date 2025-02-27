import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, UserList, TouchableHighlight } from 'react-native';
//import Navigation from './Navigation'

import firebase from 'firebase';
import Home from './Home';

const firebaseConfig = {
    apiKey: "AIzaSyCTbgszuHpCwPFQtDMVTbxeajlNwUDeCwY",
    authDomain: "cf-maaaarket.firebaseapp.com",
    databaseURL: "https://cf-maaaarket.firebaseio.com",
    storageBucket: "cf-maaaarket.appspot.com"
};
firebase.initializeApp(firebaseConfig);


export default class Login extends React.Component {

    static navigatorOptions = {
        title: 'Login',
        header: null,
    };

    constructor(props){
        super(props);
        this.state={
            userName:'',
            userPassword:'',
            error:false,
            isLogin:false,
            error:false,
            colorButton:'#d9974a'
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
        if (this.state.userName === "" && this.state.userPassword === ""){
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

                <TouchableHighlight style={styles.buttons}>
                    <Button 
                    onPress={() => this.login()}          
                    title="Login"
                    color={this.state.colorButton}
                    /> 
                </TouchableHighlight> 
                {this.state.error && <Text style={styles.error}>Identifiant ou Mot de passe incorrect</Text>}
                </View>
            );
        }
        else {
            /*return (
                
                <View style={styles.container}>
                    <View>
                        <Button
                        title="Login"
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={styles.buttons}   
                        />
                    </View>
                    <View>
                        <Button
                        title="About"
                        onPress={() => this.props.navigation.navigate('About')}
                        style={styles.buttons}   
                        />
                    </View>
                    <View>
                        <Button
                        title="Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={styles.buttons}   
                        />
                    </View>
                    <View>
                        <Button
                        title="Pay"
                        onPress={() => this.props.navigation.navigate('Pay')}
                        style={styles.buttons}   
                        />
                    </View>
                    <View>
                        <Button
                        title="AccountInformation"
                        onPress={() => this.props.navigation.navigate('AccountInformation')}
                        style={styles.buttons}   
                        />
                    </View>
                    <View>
                        <Button
                        title="NewUser"
                        onPress={() => this.props.navigation.navigate('NewUser')}
                        style={styles.buttons}   
                        />
                    </View>
                    <View>
                        <Button
                        title="DetailArticle"
                        onPress={() => this.props.navigation.navigate('DetailArticle')}
                        style={styles.buttons}   
                        />
                    </View>
                    <View>
                        <Button
                        title="NewArticle"
                        onPress={() => this.props.navigation.navigate('NewArticle')}
                        style={styles.buttons}   
                        />
                    </View>
                    <View>
                        <Button
                        title="Panier"
                        onPress={() => this.props.navigation.navigate('Panier')}
                        style={styles.buttons}   
                        />
                    </View>
                </View>
                
            );*/
            return(
                <Home navigation={this.props.navigation}/>
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
        color : '#d9974a',
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
        height: 40,
        width:160,
        borderRadius:10,
        marginLeft :50,
        marginRight:50,
        marginTop :20,
        justifyContent :'center'            
    }
});
