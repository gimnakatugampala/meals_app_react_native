import React from 'react';
import {Platform} from 'react-native'
import { createStackNavigator , createBottomTabNavigator,createAppContainer } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Favorites from '../screens/FavoritesScreen'

import Colors from '../constants/Colors';



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
    mode:'modal',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android'? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
})

const tabConfig = {
    Meals:{screen:MealsNavigator,navigationOptions:{
        tabBarIcon:(tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        },
        tabBarColor:Colors.primaryColor
    }},
    Favorites:{screen:Favorites,
    navigationOptions:{
        tabBarIcon:(tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        },
        tabBarColor:Colors.accentColor

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



export default createAppContainer(MealsFavTabNavigator)