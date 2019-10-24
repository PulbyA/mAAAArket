import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';
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
                <View style={styles.articleFlex}>
                    <Article style={styles.articles} productName="ProduitTest1" type="Test" sexe= "Apache Helicopter" 
                        age= "Adult" size= "L" vendorName= "invalidUsername" price="over 9000" 
                    />
                    <Article style={styles.articles} productName="Short sale" type="Pantalons" sexe= "Homme" 
                        age= "10-12 ans" size= "S" vendorName= "Gamin" price="500"
                    />
                </View>
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
        flex:2,
        flexDirection:'row'
    },
    articles: {
        flex:1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    }
    
});