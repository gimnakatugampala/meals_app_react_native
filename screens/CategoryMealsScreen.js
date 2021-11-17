import React from 'react'
import { StyleSheet, Text, View,Button,Platform,FlatList } from 'react-native'

import { CATEGORIES,MEALS } from '../data/dummy-data'

// import MealItem from '../components/MealItem'
import MealList from '../components/MealList'


export default function CategoryMealsScreen(props) {


    const catId =  props.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    )

    return <MealList listData={displayedMeals} navigation={props.navigation} />
}

CategoryMealsScreen.navigationOptions = navigationData => {

    const catId =  navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle:selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    
})
