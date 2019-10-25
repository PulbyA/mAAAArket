import React from 'react';

import About from './About';
import Login from './Login';
import Home from './Home';
import Pay from './Pay';
// import Navigation from './Navigation';

import AccountInformation from './Account/AccountInformation';
import NewUser from './Account/NewUser';

import DetailArticle from './Article/DetailArticle';
import NewArticle from './Article/NewArticle';
import Panier from './Article/Panier';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const NavigationApp = createStackNavigator({

    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    About: {
        screen: About,
        navigationOptions: {
            header: null,
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
          },
    },    
    Pay: {
        screen: Pay,
        navigationOptions: {
            header: null,
        },
    },    
    AccountInformation: {
        screen: AccountInformation,
        navigationOptions: {
            header: null,
        },
    },    
    NewUser: {
        screen: NewUser,
        navigationOptions: {
            header: null,
        },
    },    
    DetailArticle: {
        screen: DetailArticle,
        navigationOptions: {
            header: null,
        },
    },    
    NewArticle: {
        screen: NewArticle,
        navigationOptions: {
            header: null,
        },
    },
    Panier: {
        screen: Panier,
        navigationOptions: {
            header: null,
        },
    }
});

export default createAppContainer(NavigationApp);
