import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FavoritesScreen() {
    return (
        <View style={styles.screen}>
        <Text>The Favorite Screen!</Text>
    </View>
    )
}

FavoritesScreen.navigationOptions = {
    headerTitle:'Your Favorites'
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
