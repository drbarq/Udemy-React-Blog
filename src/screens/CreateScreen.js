import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import {Context as Context} from '../context/BlogContext'  
import BlogPostForm from '../components/BlogPostForm'
    // example of renaming context

const CreateScreen = ( props ) => {

    const { addBlogPost } = useContext(Context)

    return <BlogPostForm />
}

const styles = StyleSheet.create({})

export default CreateScreen