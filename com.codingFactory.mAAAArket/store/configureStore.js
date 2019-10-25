
import { createStore } from 'redux';
import toggleFavorite from './reducers/favoriteArticle'

export default createStore(toggleFavorite)