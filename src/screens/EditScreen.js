import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = (props) => {
    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === props.navigation.state.params.id)

    console.log(blogPost) 

    return (
        <View>
            <Text>Edit Screen</Text>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default EditScreen