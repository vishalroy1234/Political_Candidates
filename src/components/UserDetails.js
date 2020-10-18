import React, { Component } from 'react';
import axios from 'axios';
import Pic from './pic.jpg';

class UserDetails extends Component {
    state={
        info:null
    }
    componentDidMount(){
        let id=this.props.match.params.id;
        axios.get('http://jsonplaceholder.typicode.com/users/'+id)
             .then(res=>{
                 this.setState({
                     info:res.data
                 })
             })
    }
    render() {
        const {info}=this.state;
        const userDetails=(info)?(
            <div className="container center">
                <img class="responsive-img circle" src={Pic}/>
                <h4>Name : {info.name}</h4>
                <h4>Email : {info.email}</h4>
                <h4>City : {info.address.city}</h4>
                <h4>Zipcode : {info.address.zipcode}</h4>
            </div>
        ):(
            <div>
              <h1 className="center">Loading!!!</h1>
              <div class="progress">
              <div class="indeterminate"></div>
              </div>
            </div>  
        );
        return (
            <div className="ud">
                {userDetails}
            </div>
        )
    }
}
export default UserDetails