import React from 'react'
import Mypost from './Mypost'
import Comments from './Comments'

function Single(props) {
    const id= Number(props.match.params.id)
    const posts =  props.posts
    const post = posts.find((post) => post.id === id)
    const comments = props.comments[id] || []
    const index = posts.findIndex((post) => post.id === id)
    return (
        <div className="single-photo">
           <Mypost {...props} post={post} index={index}/>
           <Comments {...props} id={id} comments={comments}/>
        </div>
    )
}

export default Single
