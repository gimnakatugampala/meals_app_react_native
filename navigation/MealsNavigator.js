import React from 'react';
import {Platform} from 'react-native'
import { createStackNavigator , createBottomTabNavigator,createAppContainer, createDrawerNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Favorites from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';


const defaultStackNavOptions = {
    headerStyle:{
        backgroundColor: Platform.OS === 'android'? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle:'A Screen'
}

const MealsNavigator = createStackNavigator({
    Categories:{
        screen:CategoriesScreen,
        navigationOptions:{
            headerTitle :'Meal Categories',
        }
    },
    CategoryMeals:{
        screen:CategoryMealsScreen,
    },
    MealDetail:MealDetailScreen
},{
    // mode:'modal',
    defaultNavigationOptions:defaultStackNavOptions
})

const FavNavigator = createStackNavigator({
    Favorites:FavoritesScreen,
    MealDetail:MealDetailScreen
},{
    defaultNavigationOptions:defaultStackNavOptions
})

const tabConfig = {
    Meals:{
        screen:MealsNavigator,
        navigationOptions:{
        tabBarIcon:(tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        }, 
        tabBarColor:Colors.accentColor

    }
    },
    Favorites:{
        screen:FavNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
        }
    }
}


const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabConfig,{
    activeTintColor:'white',
    shifting:true
}) : 
createBottomTabNavigator(tabConfig,{
    tabBarOptions:{
        activeTintColor:Colors.accentColor
    }
});

// Filter Stack
const FiltsersNavigator = createStackNavigator({
    Filters:FiltersScreen,
})


const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters:FiltsersNavigator
})


export default createAppContainer(MainNavigator)