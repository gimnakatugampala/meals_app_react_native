import {Platform} from 'react-native'
import { createStackNavigator ,createAppContainer } from "react-navigation";


import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

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

export default createAppContainer(MealsNavigator)