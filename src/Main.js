import React, { Component } from 'react';
import Mywall from './Mywall';
import Addpost from './Addpost';
import { Route , Link} from 'react-router-dom';
import Single from './Single';

class Main extends Component {

    componentDidMount(){
        this.props.startLoadingPosts()
        this.props.startLoadingComments()
    }


    render() {
        
        return (
           
            <div>
                 <Link to='/' className="title">
                    <div>
                    <h1>MyInstagram</h1>
                 </div>
                </Link>
                <Route exact path="/" render={()=>
                    <div>
                    <Mywall {...this.props}/>
                 </div>
                }/>
            <Route path="/Addpost" render={()=>(
                    <Addpost {...this.props}  />
                )}/>

            <Route path="/singlePhoto/:id" render={(params)=>(
                    <Single {...this.props} {...params}/>
            )
            }/>  
            </div>
        )
    }
}

export default Main
