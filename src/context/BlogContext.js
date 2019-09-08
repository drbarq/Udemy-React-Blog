import createContext from './createDataContext'
import CreateDataContext from './createDataContext'

// example of using createContext reusable component
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload )
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]
        default:
            return state
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: {title, content} })
        callback()
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id})
    }
}

export const { Context, Provider } = CreateDataContext( 
    blogReducer, 
    { addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost },
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