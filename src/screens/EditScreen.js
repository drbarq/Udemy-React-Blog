import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = (props) => {
    const { state, editBlogPost } = useContext(Context)
    const id = props.navigation.state.params.id 
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <BlogPostForm
            initialValues={{title: blogPost.title, content: blogPost.content}} 
            onSubmit={(title, content) => editBlogPost(id, title, content, () => props.navigation.pop())}    
        />
    )
}

const styles = StyleSheet.create({})

export default EditScreen