import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CategoriesScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen!</Text>
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
