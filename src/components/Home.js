import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Pic from './pic.jpg';
class Home extends React.Component {
state={
    users:[]
}   
   componentDidMount(){
     
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
              this.setState({
                  users:res.data
              })
          })
   } 
   render(){
    const displayUsers=(this.state.users.length)?(
        this.state.users.map((user)=>{
        const link='/'+user.id;    
            return(

                  <div className="col s12 m6" key={user.id}> 
                  <img class="responsive-img" src={Pic}/>
                  <div className="card blue-grey darken-1 hoverable" >
                    <div className="card-content white-text">
                      <span className="card-title"><b>User     : </b>{user.name}</span>
                      <span className="card-title"><b>Username : </b>{user.username}</span>
                      <span className="card-title"><b>Email    : </b>{user.email}</span>
                      <span className="card-title"><b>Phone    : </b>{user.phone}</span>
                      <span className="card-title"><b>Comp_name: </b>{user.company.name}</span>
                      
                    </div>
                    <div className="card-action">
                      <Link to={link}>Know me</Link>
                      
                    </div>
                  </div>
               </div>
               
                        
            )
        })
    ):(
      <div className="lolo">
        <h1 className="center">Loading!!!</h1>
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </div>  
        
      
        
    );
    return (
        <div className="container">
            <div className="row">
              {displayUsers}
            </div>
        </div>
                    
            
    )
   }
}
export default Home
