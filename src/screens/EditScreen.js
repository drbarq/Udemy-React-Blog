import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = (props) => {
    const { state } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === props.navigation.state.params.id)

    return (
        <BlogPostForm></BlogPostForm>
    )
}

const styles = StyleSheet.create({})

export default EditScreen