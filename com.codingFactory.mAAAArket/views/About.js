import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image, TouchableOpacity} from 'react-native';

export default class About extends React.Component {
    static navigatorOptions = {
        title: 'About',
    };

    render () {


        return (
            <View style={styles.container}>
                <Text style={styles.title}>A propos</Text>
                <Text style={styles.title}> </Text>

                <Text></Text>
                <Text>Antonin</Text>
                <Text>Antoine</Text>
                <Text>Anthony</Text>
                <Text>Alexandre</Text>
                <Text></Text>
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Home')}>
                    <Image style={styles.img_button}
                        source={require('../assets/header/home.png')}
                    />
                </TouchableOpacity>

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
    },
    img_button: {
        width: 80,
        height: 80
    }
});