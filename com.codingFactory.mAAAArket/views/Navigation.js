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

import CustomFooter from '../components/CustomFooter';
import CustomHeader from '../components/CustomHeader';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const NavigationApp = createStackNavigator({

    Login: {
        screen: Login,
    },
    About: {
        screen: About,
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
          },
    },    
    Pay: {
        screen: Pay,
    },    
    AccountInformation: {
        screen: AccountInformation,
    },    
    NewUser: {
        screen: NewUser,
    },    
    DetailArticle: {
        screen: DetailArticle,
    },    
    NewArticle: {
        screen: NewArticle,
    },
    Panier: {
        screen: Panier,
    },
    CustomFooter: {
        screen: CustomFooter,
    },
    CustomHeader: {
        screen: CustomHeader
    }
});

export default createAppContainer(NavigationApp);
