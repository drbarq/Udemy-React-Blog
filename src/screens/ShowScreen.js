import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Context as Context} from '../context/BlogContext'  
    // example of renaming context
import { EvilIcons } from '@expo/vector-icons'


const ShowScreen = ( props ) => {
    const { state } = useContext(Context)
    
    const blogPost = state.find((blogPost) => blogPost.id === props.navigation.getParam('id'))

    return (
        <View>
            <Text style={styles.label}>Blog Title</Text>
            <Text style={styles.input}>{blogPost.title}</Text>
            <Text style={styles.label}>Blog Content</Text>
            <Text style={styles.input}>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = (props) => {
    const blogId = props.navigation.state.params.id
    // console.log(blogId)

    return {
        headerRight: (
            <TouchableOpacity onPress={() => props.navigation.navigate('Edit', {id: blogId})}>
                <EvilIcons name="pencil" size={35}></EvilIcons>
            </TouchableOpacity>
        )
    }
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

export default ShowScreen