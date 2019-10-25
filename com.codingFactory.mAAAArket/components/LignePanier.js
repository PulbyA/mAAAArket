import React from 'react'
import { StyleSheet, FlatList, Text } from 'react-native'
import DesignPanier from './DesignPanier'

const _renderItem = ({ item }) => <DesignPanier titleArticle={item.name} pictureArticle={item.picture}  priceArticle={item.price} />

export default (LignePanier = props => (
  <FlatList data={props.data} renderItem={_renderItem} />
))

const styles = StyleSheet.create({
    image: {     
       padding: 20,
       margin: 20,
       borderColor: '#fff',
       width: 50,
       height: 50
    }
});
