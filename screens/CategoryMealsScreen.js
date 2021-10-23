import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

export default function CategoryMealsScreen(props) {

    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen !</Text>
            <Button title="Go to Meal Details" onPress={() => {
                props.navigation.navigate({routeName:'MealDetail'})
            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.goBack()
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
