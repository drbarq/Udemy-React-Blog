import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ( props ) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

    useEffect(() => {
        getBlogPosts()

        const listener = props.navigation.addListener('didFocus', () => {
            getBlogPosts()
        })

        return () => {
            listener.remove()
        }
    }, [])

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={ (blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => props.navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id} 
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather 
                                        style={styles.icon} 
                                        name="trash" 
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ( props ) => {
    return {
        headerRight: 
            <TouchableOpacity onPress={() => props.navigation.navigate('Create')}>
                <Feather name="plus" size={30} style={styles.plus} />
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18, 
    }, 
    icon: {
        fontSize: 24
    },
    plus:  {
        marginRight: 10
    }
})

export default IndexScreen