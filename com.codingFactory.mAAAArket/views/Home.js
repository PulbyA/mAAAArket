import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import Article from '../components/Article';

import firebase from "firebase";

export default class Home extends React.Component {

    static navigatorOptions = {
        title: 'Home',
    };

    constructor(props){
        super(props);
        this.state={
            title: 'Accueil',
            article: []
        };
    };

    readArticleData = () => {
        firebase.database().ref('articles/').once('value', (snapshot) => {
            this.setState({ article :  snapshot.val()}, () => {
                console.log(this.state.article);
            });
        });
    };

    componentWillMount(){
        this.readArticleData();
    }

    render () {
        
        let arrayHomeWorks = Object.values(this.state.article);

            const allArticles = arrayHomeWorks.map((myArticle)=>{

                return(
                <Article 
                    id={myArticle["id"]}
                    productName={myArticle["name"]} 
                    description={myArticle["desc"]} 
                    type={myArticle["type"]} 
                    sexe={myArticle["sexe"]}
                    age= {myArticle["age"]}
                    size= {myArticle["taille"]} 
                    vendorName= {myArticle["nomVendeur"]} 
                    price={myArticle["prix"]} 
                    navigation={this.props.navigation}
                />
            );
        })
        return (
            
            <View style={headerStyles.container}>
                <CustomHeader title={'Accueil'} navigation={this.props.navigation}/>            
                    <ScrollView>
                        {allArticles}
                    </ScrollView>
                <CustomFooter navigation={this.props.navigation}/>
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
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap'
    }
    
});