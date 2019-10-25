import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';


export default class DesignPanier extends React.Component {

    render () {

        const { 
            titleArticle,
            priceArticle, 
            pictureArticle,
        } = this.props;

        return (
            <View>
                
                <Text>{titleArticle}</Text>
                <Text>{priceArticle}{'\n'}</Text>
                
            </View>
            
        )
    }

}

/*
<Image source={require(pictureArticle)} style={styles.image}/>
*/
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