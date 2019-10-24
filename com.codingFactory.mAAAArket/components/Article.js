import React from 'react';
import {TextInput, Button, Text, View, Image ,StyleSheet} from 'react-native';

export default class Article extends React.Component{
    render(){
        const{
            productName,
            type,
            sexe,
            age,
            size,
            vendorName,
            price
        } = this.props
        return (
            <View onClick={() => this.props.navigation.navigate('About')} style={styles.articles}>
                <Text style={styles.texts}>IMG en construction</Text>
                <Text style={styles.texts}>Nom produit : {productName}</Text>
                <Text style={styles.texts}>Taille : {size}</Text>
                <Text style={styles.texts}>Prix : {price}€</Text>
            
                <Button
                title="Detail Article"
                onPress={() => this.props.navigation.navigate('DetailArticle')}
                style={styles.title}>
                Article</Button>   
            </View>
        )
    }
}


const styles = StyleSheet.create({
    articles: {
        justifyContent: 'center',
        alignContent:'center',
        textAlign:'center',
        height:200,
        width:180,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        margin:10
    },
    texts:{
        flex:1
    }
    
});