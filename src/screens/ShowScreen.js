import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Context as Context} from '../context/BlogContext'  
import { EvilIcons } from '@expo/vector-icons'
    // example of renaming context

const ShowScreen = ( props ) => {
    const { state } = useContext(Context)
    
    const blogPost = state.find((blogPost) => blogPost.id === props.navigation.getParam('id'))

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = (props) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => props.navigation.navigate('Edit')}>
                <EvilIcons name="pencil" size={35}></EvilIcons>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({})

export default ShowScreen