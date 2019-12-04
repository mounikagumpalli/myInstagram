
import React from 'react';
import Mypost from './Mypost';
import { Link } from 'react-router-dom';
function Mywall({posts,startRemovingPosts,comments,history}) {
    console.log(typeof comments)
    return (
        <div>
            <Link to="/Addpost" className="add-icon"></Link>
            <div className="wallContainer">
                {
                    posts.sort(function(x,y){return y.id-x.id}).map((post,index)=>(<Mypost key={post.id} index={index} post={post} startRemovingPosts={startRemovingPosts} comments={comments} history={history} />))
                }
            </div>
        </div>
    )
}

export default Mywall
