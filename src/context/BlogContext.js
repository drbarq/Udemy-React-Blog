import createContext from './createDataContext'
import CreateDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload
        case 'edit_blogpost':
                return state.map((blogPost) => {
                    return blogPost.id === action.payload.id 
                        ? action.payload 
                        : blogPost
                })
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload )
        default:
            return state
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({ type: 'get_blogposts', payload: response.data})
    }
}

// const addBlogPost = dispatch => {
//     return (title, content, callback) => {
//         dispatch({ type: 'add_blogpost', payload: {title, content} })
//         if (callback) {
//             callback()
//         }
//     }
// }

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content })
        if (callback) {
            callback()
        }
    }
}

// const deleteBlogPost = dispatch => {
//     return (id) => {
//         dispatch({ type: 'delete_blogpost', payload: id})
//     }
// }
const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id})
    }
}

// const editBlogPost = dispatch => {
//     return(id, title, content, callback) => {
//         dispatch({ type: 'edit_blogpost', payload: {id, title, content}})
//         if (callback) {
//             callback()
//         }
//     }
// }

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content })
        dispatch({ type: 'edit_blogpost', payload: {id, title, content}})
        if (callback) {
            callback()
        }
    }
}

export const { Context, Provider } = CreateDataContext( 
    blogReducer, 
    { addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost, editBlogPost: editBlogPost, getBlogPosts: getBlogPosts },
    []
)


// example of using specific Context and Provider 

// import React, { useReducer } from 'react'
// const BlogContext = React.createContext()

// const blogReducer = (state, action) => {
//     switch (action.type) {
//         case 'add_blogpost':
//             return [...state, { title: `Blog Post # ${state.length + 1}`}]
//         default:
//             return state
//     }
// }

// export const BlogProvider = ( {children} ) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer, [])

//     const addBlogPost = () => {
//         dispatch({ type: 'add_blogpost' })
//     }

//     return (
//         <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
//             {children}
//         </BlogContext.Provider>
//     ) 
// }

// export default BlogContext




//  an example of using useState
// import React, { useState } from 'react'

// const BlogContext = React.createContext()

// export const BlogProvider = ( {children} ) => {
//     const [blogPosts, setBlogPosts] = useState([])

//     const addBlogPost = () => {
//         setBlogPosts([
//             ...blogPosts, 
//             { title: `Blog Post # ${blogPosts.length + 1}`}
//         ])
//     }

//     return (
//         <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost}}>
//             {children}
//         </BlogContext.Provider>
//     ) 
// }

// export default BlogContext