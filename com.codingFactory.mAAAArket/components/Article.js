import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';

export default class Article extends React.Component{
    render(){
        const{
            imgName
        } = this.props
        const imgArticle = <Image source={require("./../assets/" + imgName)}/>
        return (
            <View style={styles.container}>
                <Button
                title="Detail Article"
                onPress={() => this.props.navigation.navigate('DetailArticle')}
                style={styles.title}>
                Article</Button>   
            </View>
        )
    }
}