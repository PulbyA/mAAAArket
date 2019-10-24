import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';

export default class Home extends React.Component {
    static navigatorOptions = {
        title: 'Home',
    };

    render () {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                
                <Text style={styles.title}>Home</Text>

                <Button
                title="About"
                onPress={() => this.props.navigation.navigate('About')}
                style={styles.buttons}   
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