import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Context as Context} from '../context/BlogContext'  
    // example of renaming context

const ShowScreen = ( props ) => {
    const { state } = useContext(Context)
    
    const blogPost = state.find((blogPost) => blogPost.id === props.navigation.getParam('id'))



    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ShowScreen