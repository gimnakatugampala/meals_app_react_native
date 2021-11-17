import React from 'react'
import { StyleSheet, Text, View ,FlatList } from 'react-native'

import MealItem from './MealItem'

export default function MealList(props) {

    
    const renderMealItem = itemData =>{
        return(
           <MealItem title={itemData.item.title} image={itemData.item.imageUrl} complexity={itemData.item.complexity} affordability={itemData.item.affordability} duration={itemData.item.duration} onSelectMeal={() => {
               props.navigation.navigate({routeName:'MealDetail',
                params:{
                    mealId:itemData.item.id
                }
                })
           }} />
        )
    }

    return (
        <View style={styles.screen}>
        <FlatList style={{width:'100%'}} data={props.listData} renderItem={renderMealItem} keyExtractor={(item,index) => item.id} />
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
