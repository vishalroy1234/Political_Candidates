import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
 
class App extends React.Component {
  state={
    
  }
  render(){
    return(
    
      <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/:id" component={UserDetails}/>
        </Switch>
      </div>
      </BrowserRouter>
        
    
    );
  }
    
  
}

export default App;
