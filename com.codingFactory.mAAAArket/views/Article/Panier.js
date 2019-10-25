import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image } from 'react-native';
import Navigation from '../Navigation'
import LignePanier from '../../components/LignePanier';
import { connect } from 'react-redux'

class Panier extends React.Component {
    static navigatorOptions = {
        title: 'Panier',
    };

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.container_2}> 
                </View>
                <LignePanier 
                    data={this.props.favoritesArticles} 
                />
                
            </View>
        )
    }

}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    
});

const mapStateToProps = (state) => {
    return {
       favoritesArticles: state.favoritesArticles
    }
}

export default connect(mapStateToProps)(Panier)
