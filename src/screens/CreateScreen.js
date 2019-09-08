import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import {Context as Context} from '../context/BlogContext'  
    // example of renaming context

const CreateScreen = ( props ) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addBlogPost } = useContext(Context)

    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput 
                style={styles.input} 
                value={title} 
                onChangeText={(text) => setTitle(text)} 
            />
            <Text style={styles.label}>Enter Content</Text>
            <TextInput 
                style={styles.input} 
                value={content} 
                onChangeText={(content) => setContent(content)} 
            />
            <Button 
                title="Add Blog Post"
                onPress={() => addBlogPost(title, content, () => {
                    props.navigation.navigate('Index')
                })}
            >
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18, 
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default CreateScreen