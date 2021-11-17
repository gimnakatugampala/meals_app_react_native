import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FiltersScreen() {
    return (
    <View style={styles.screen}>
        <Text>The Filter Screen!</Text>
    </View>
    )
}

FiltersScreen.navigationOptions = {
    headerTitle:'Filter Meals'
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
