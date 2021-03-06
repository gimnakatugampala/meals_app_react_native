import React from 'react'
import { StyleSheet, Text, View ,Button } from 'react-native'

import { MEALS } from '../data/dummy-data'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

export default function MealDetailScreen(props) {

    const mealId = props.navigation.getParam('mealId')

    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) =>{
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return{
        headerTitle:selectedMeal.title,
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
