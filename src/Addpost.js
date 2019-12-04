import React, { Component } from 'react'

class Addpost extends Component {
    constructor(props) {
        super(props)
    
        this.submitHandler = this.submitHandler.bind(this)
    }
    
    submitHandler(e){
        e.preventDefault();
        const desc=e.target.elements.desc.value;
        const url=e.target.elements.url.value;
        console.log(desc);
        const post={
            id:Number(new Date()),
            description:desc,
            imageLink:url
        }
        if(desc&&url){
            this.props.startAddingPost(post)
            
        }    
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <form className="form-container" onSubmit={this.submitHandler}>
                    <div>
                        <label>Image URL</label>
                        <input type="text" name="url" placeholder="URL" required />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="desc" placeholder="Description" required />
                    </div>
                    <button className="btn btn-default submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Addpost
