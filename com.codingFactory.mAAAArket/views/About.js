import React from 'react';
import { Button, StyleSheet, TextInput, Text, View } from 'react-native';

export default class About extends React.Component {
    static navigatorOptions = {
        title: 'About',
    };

    render () {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>A propos</Text>
                <Text style={styles.title}> </Text>

                <Text></Text>
                <Text>Antonin</Text>
                <Text>Antoine</Text>
                <Text>Anthony</Text>
                <Text>Alexandre</Text>

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