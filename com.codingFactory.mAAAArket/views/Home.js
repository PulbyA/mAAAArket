import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image, ScrollView } from 'react-native';
import Article from '../components/Article';

export default class Home extends React.Component {
    static navigatorOptions = {
        title: 'Home',
    };

    render () {

        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                
                <Text style={styles.title}>Home</Text>
                <ScrollView style={styles.articleFlex}>
                    <Article productName="ProduitTest1" type="Test" sexe= "Apache Helicopter" 
                        age= "Adulte" size= "L" vendorName= "invalidUsername" price="over 9000" 
                    />
                    <Article productName="Short sale" type="Pantalons" sexe= "Homme" 
                        age= "Enfant" size= "10-12 ans" vendorName= "Gamin" price="500"
                    />
                    <Article productName="Short sale" type="Pantalons" sexe= "Homme" 
                        age= "Enfant" size= "10-12 ans" vendorName= "Gamin" price="500"
                    />
                </ScrollView>
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
        flex:1,
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
    articleFlex: {
        flex:0,
        flexDirection:'row',
        flexWrap: 'wrap'
    }
    
});