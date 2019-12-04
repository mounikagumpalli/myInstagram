import React from 'react'
import { Link } from 'react-router-dom'

function Mypost({index,post,startRemovingPosts,comments,history}) {

  const handler=(event)=>{
      event.preventDefault();
      startRemovingPosts(post.id,index);
       history.push('/');
   }

        const id=post.id

        
    return (
        <figure className="singlePost">
            <Link to={`/singlePhoto/${post.id}`}>
                <img className="singlePhoto" src={post.imageLink} alt={post.description} />
            </Link>
            <figcaption className="caption">{post.description}</figcaption>
            <div className="btnContainer">
                <button className="btn" onClick={handler}>Remove</button>
                <Link className="btn cmntBtn" to={`/singlePhoto/${post.id}`}> 
                    <div className="comment-count"> 
                    <div className="speech-bubble"> </div>
                { comments[post.id] ? comments[post.id].length : 0  }
                    </div>
                </Link>
             </div>
        </figure>
    )
}

export default Mypost
