import React from 'react'
import { StyleSheet, Text, View ,Button } from 'react-native'

export default function MealDetailScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>Meal Details</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop()
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
