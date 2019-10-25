import React from 'react';
import {TextInput, Button, Text, View, Image ,StyleSheet} from 'react-native';

export default class Article extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: this.props.id,
            productName: this.props.productName,
            description: this.props.description,
            type: this.props.type,
            sexe: this.props.sexe,
            age: this.props.age,
            size: this.props.size,
            vendorName: this.props.vendorName,
            price: this.props.price
        }
    }

    render(){
        /*const{
            productName,
            description,
            type,
            sexe,
            age,
            size,
            vendorName,
            price
        } = this.props*/
        return (
            <View style={styles.articles}>
                <Text style={styles.texts}>IMG en construction</Text>
                <Text style={styles.texts}>{this.state.productName}</Text>
                <Text style={styles.texts}>{this.state.size}</Text>
                <Text style={styles.texts}>{this.state.price}€</Text>
            
                <Button
                title="Detail Article"
                onPress={() => {
                    this.props.navigation.navigate('DetailArticle', {
                        id: this.state.id,
                        name: this.state.productName,
                        description: this.state.description,
                        type: this.state.type,
                        sexe: this.state.sexe,
                        age: this.state.age,
                        size: this.state.size,
                        vendorName: this.state.vendorName,
                        price: this.state.price
                    });
                }}
                style={styles.title}
                />
 
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