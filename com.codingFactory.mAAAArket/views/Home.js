import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

import Navigation from './Navigation'
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import Article from '../components/Article';

export default class Home extends React.Component {

    static navigatorOptions = {
        title: 'Home',
    };

    constructor(props){
        super(props);
        this.state={
            title: 'Accueil',
        };
    };

    render () {

        const {navigate} = Navigation;

        return (

            <View>                
                <CustomHeader 
                    Navigat={this.props.navigation.navigate('About')} 
                    Title={this.state.title} 
                />
                <View style={styles.container}> 
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
                </View>
                

                <CustomFooter style={styles.footer}  />



            </View>
        )
    }

}

const styles = StyleSheet.create({
    title : {
        fontSize:20
    },
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: (height - 160),
        paddingTop: 40,
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
        width: 35,
        height: 35,
        color: '#ffffff',
    },
    img_logo: {
        width: 100,
        height: 35,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    articleFlex: {
        flex:0,
        flexDirection:'row',
        flexWrap: 'wrap'
    }
    
});