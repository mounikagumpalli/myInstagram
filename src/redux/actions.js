import {database} from '../database/config';


export function startAddingPost(post){
    return(dispatch)=>{
       return database.ref('posts').update({[post.id]:post}).then(()=>{
        dispatch(addPost(post))
    }).catch((error)=>console.log(error))
            
    }
}

export function startLoadingPosts(){
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot)=> {
            let posts=[]
            snapshot.forEach((childSnapshot)=>{
                    posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function startRemovingPosts(postId,index){
    const updates = {
        [`posts/${postId}`]: null,
        [`comments/${postId}`]: null
       }
    return(dispatch)=>{
        return database.ref().update(updates).then(()=>{
            dispatch(removePost(index))
        })

    }
}

export function startAddingComment(comment,postId){
    return(dispatch)=>{
        return database.ref(`comments/${postId}`).push(comment).then(()=>{
            dispatch(addComment(comment,postId))
        })
    }
}


export function startLoadingComments(){
    return(dispatch)=>{
        return database.ref('comments').once('value').then((snapshot)=>{
                let comments={}
                snapshot.forEach((childSnapshot)=>{
                    comments[childSnapshot.key] = Object.values(childSnapshot.val())
                })
                dispatch(loadComments(comments))
        })
    }
}

export function loadComments(comments){
    return {
        type : 'LOAD_COMMENTS',
        comments
    }
}


export function loadPosts(posts){
    return {
        type : 'LOAD_POSTS',
        posts
    }
}


export function removePost(index){
    return{
        type:'REMOVE_POST',
        index
    }
}

export function addPost(post){
    return {
        type : 'ADD_POST',
        post
    }
}

export function addComment(comment,postId){
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}