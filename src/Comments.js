import React from 'react'

function Comments(props) {
    function submitHandler(event){
        event.preventDefault();
        const comment = event.target.elements.comment.value
        props.startAddingComment(comment,props.id)
        event.target.elements.comment.value=''
    }
    return (
        <div className="comments" >
            {
                props.comments.map((comment , i )=><p key={i}> {comment}</p>)
            }
            <form className="comment-form" onSubmit={submitHandler}>
                <input type="text" placeholder="comment" name="comment" required/>
                <input type="submit"  hidden  />
            </form>
        </div>
    )
}

export default Comments
