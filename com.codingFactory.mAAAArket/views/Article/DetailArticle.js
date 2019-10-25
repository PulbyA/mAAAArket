import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../../components/CustomHeader';
import CustomFooter from '../../components/CustomFooter';
import headerStyles from '../../styles/HeaderStyles';

export default class DetailArticle extends React.Component {
    static navigatorOptions = {
        title: 'DetailArticle',
    };

    constructor(props){
        super(props);
    }

    render () {
        const { navigation } = this.props;
        return (
            <View style={headerStyles.container}>
                <CustomHeader title={'Panier'} navigation={this.props.navigation}/>
    
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.title}>{JSON.stringify(navigation.getParam('name')).replace(/"/gi, '')}</Text>
                        <Image 
                            source={require("./../../assets/vetement.png")}
                            style={styles.image}
                        />
                        <Text style={styles.text}>Cet article est pour {JSON.stringify(navigation.getParam('sexe')).replace(/"/gi, '')}{'\n'}</Text>
                        <Text style={styles.text}>
                            Taille de l'article : {JSON.stringify(navigation.getParam('size')).replace(/"/gi, '')}{'\n'}
                            Cet article convient aux {JSON.stringify(navigation.getParam('age')).replace(/"/gi, '')}{'\n'}
                        </Text>
                        <Text style={styles.text}>Prix de l'article : {JSON.stringify(navigation.getParam('price')).replace(/"/gi, '')} € {'\n'}</Text>
                        <Text style={styles.text}>Et est vendu par : {JSON.stringify(navigation.getParam('vendorName')).replace(/"/gi, '')}{'\n'}</Text>
                        <ScrollView>
                            <Text style={styles.description}>{JSON.stringify(navigation.getParam('description')).replace(/"/gi, '')} </Text>
                        </ScrollView>
                        <Text style={styles.text}>Donnez votre avis{'\n'}</Text>
                        <ScrollView>
                            <TextInput maxLength={100} style={styles.commentaire}>
                                Commentaire
                            </TextInput>
                        </ScrollView>
                        <Button title="Voir votre Panier"
                        onPress={() => this.props.navigation.navigate('Panier')}
                        style={styles.button}>
                        </Button>
                    </ScrollView>
                </View>
                <CustomFooter navigation={this.props.navigation}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    block: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        backgroundColor: '#fff',
        fontSize: 30
    },
    image: {     
       padding: 20,
       margin: 20,
       borderColor: '#fff'
    },
    prix: {
        backgroundColor: '#fff',
        right: 100,
        fontSize: 30,
        marginLeft: 50
    },
    description: {
        backgroundColor: '#fff',
        paddingBottom: 100,
        fontSize: 20
    },
    commentaire: {
        backgroundColor: '#fff',
        paddingBottom: 50,
        fontSize: 20
    },
    text: {
        backgroundColor: '#fff',
        fontSize: 20
    },
    
    
});