import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,Platform , TouchableNativeFeedback} from 'react-native'

export default function CategoryGridTile(props) {
    let TouchableCmp = TouchableOpacity

    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
        <TouchableCmp style={{flex:1}}  onPress={props.onSelect}>
            <View style={{...styles.container,...{backgroundColor:props.color}}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:'hidden',
        elevation:3,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
    },
    container:{
        flex:1,
        borderRadius:10,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        fontSize:20,
        textAlign:'right'
    }
})
