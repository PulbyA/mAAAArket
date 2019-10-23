import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';

export default class Article extends React.Component {
    static navigatorOptions = {
        title: 'Article',
    };

    render () {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Article</Text>
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