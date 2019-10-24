import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';


export default class LignePanier extends React.Component {

    render () {

        return (
            <View style={styles.container}>
                
                <Text>Nom de l'Article</Text>
                <Image source={require("./../assets/vetement.png")}
                style={styles.image}/>
                <Text>Prix de L'article en $</Text>
                <Text></Text>
                
            </View>
            
        )
    }

}
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
   
    image: {     
       padding: 20,
       margin: 20,
       borderColor: '#fff',
       width: 50,
       height: 50
    }
    
    
});