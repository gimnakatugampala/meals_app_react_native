import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CategoryMealsScreen() {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen !</Text>
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
