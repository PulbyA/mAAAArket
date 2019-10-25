import React from 'react';
import { Button, StyleSheet, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'



class DetailArticle extends React.Component {
    static navigatorOptions = {
        title: 'DetailArticle',
    };
    
    constructor(props){
        super(props);
        this.state={
            titleArticle: "Nom de L'article",
            pictureArticle: "",
            priceArticle: "Prix de L'article en $"
        };
    };

    _toggleFavorite() {
        const action = { 
            type: "TOGGLE_FAVORITE", 
            value: { 
                name: this.state.titleArticle, 
                picture: this.state.pictureArticle, 
                price: this.state.priceArticle} 
            }
        this.props.dispatch(action)
    }

    _displayFavoriteImage() {
        var sourceImage = require('../../assets/favorite/favorite.png')
        if (this.props.favoritesArticles.findIndex(item => item.id === this.state.titleArticle.id) !== -1) {
          sourceImage = require('../../assets/favorite/favorite_border.png')
        }
        return (
          <Image
            style={styles.favorite_image}
            source={sourceImage}
          />
        )
    }

    render () {

        return (
            <View style={styles.container}>
            
                <Text style={styles.title}>{this.state.titleArticle}</Text>
                <Image source={require('./../../assets/vetement.png')}
                style={styles.image}/>
                <Text style={styles.prix}>{this.state.priceArticle}</Text>
                <Text></Text>
                <ScrollView>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut vitae ornare ligula. Phasellus finibus lobortis tellus, eu rutrum augue. Vivamus blandit 
                eros et augue mattis blandit. Sed posuere nulla est, non consequat dolor tincidunt ac. 
                Vivamus id diam eu nunc posuere rhoncus. Nullam posuere blandit dignissim. Donec feugiat ut 
                lacus sed accumsan. Suspendisse sit amet imperdiet eros, at convallis nibh.

                Nulla diam elit, accumsan faucibus augue euismod, gravida lobortis eros. Nam eget nisl tempor, 
                sodales ex nec, pharetra erat. Mauris vitae vulputate quam. In vitae condimentum velit. In 
                eleifend diam laoreet lorem rhoncus, quis efficitur lacus convallis. Maecenas nec elementum 
                libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc blandit ante est, 
                in lobortis lectus consectetur a. Curabitur blandit erat et purus congue facilisis. Proin 
                tempor tempor tincidunt. Etiam ullamcorper, augue eu feugiat sagittis, metus orci blandit est, 
                non vulputate dui nisi ac metus. Fusce ornare mi ac gravida viverra. Duis accumsan eleifend 
                enim, quis posuere quam tincidunt sit amet. Sed in dapibus ante, non posuere lorem. Duis 
                volutpat mauris vel augue commodo, a consequat sem faucibus. Ut vitae bibendum urna.

                Vivamus vitae volutpat sem, a varius elit. Interdum et malesuada fames ac ante ipsum primis in 
                faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Sed diam turpis, tincidunt ac facilisis bibendum, lacinia a arcu. Donec mattis tellus a mi 
                vehicula posuere. Aliquam iaculis tincidunt interdum. Ut non eros faucibus, maximus leo vel, 
                tempus sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                himenaeos. Vestibulum viverra id ante volutpat viverra. Sed nec accumsan est, nec auctor odio. 
                Nam vel nisi id felis ornare volutpat at sit amet neque. Proin volutpat, lorem vel hendrerit 
                sagittis, nunc erat tincidunt dolor, ac ultrices leo eros hendrerit dolor. Mauris id pretium diam, 
                sed interdum ex. Donec auctor turpis id rhoncus luctus.
                </Text>
                </ScrollView>
                <Text style={styles.text}>Donenz votre avis</Text>
                <Text></Text>
                <ScrollView>
                <TextInput maxLength={100}
                style={styles.commentaire}>Commentaire</TextInput>
                </ScrollView>
                <Button title="Voir votre Panier"
                onPress={() => this.props.navigation.navigate('Panier')}
                style={styles.button}>
                </Button>
                <TouchableOpacity
                    style={styles.favorite_container}
                    onPress={() => this._toggleFavorite()}>
                    {this._displayFavoriteImage()}
                </TouchableOpacity>
                
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
    favorite_image: {
        width: 40,
        height: 40
    }
    
});

const mapStateToProps = (state) => {
    return {
       favoritesArticles: state.favoritesArticles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: (action) => { dispatch(action) }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(DetailArticle)
