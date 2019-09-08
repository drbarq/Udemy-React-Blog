import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = (props) => {
    const { state } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === props.navigation.state.params.id)

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)

    return (
        <View>
            <Text>Edit Title:</Text>
            <TextInput 
                value={title}
                onChangeText={(newTitle) => setTitle(newTitle)}>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({})

export default EditScreen