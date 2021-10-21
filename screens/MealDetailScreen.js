import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MealDetailScreen() {
    return (
        <View style={styles.screen}>
            <Text>Meal Details</Text>
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
