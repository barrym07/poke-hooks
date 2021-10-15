import {React, useEffect, useState }from 'react';
import './App.css';
import Nav from './Nav.js';
import Characters from './Characters.js';
import Home from './Home.js';
import Favorites from './Favorites.js'
import CharacterDetails from './CharacterDetails.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  return (

    <Router>
        <div className="App">

          <Nav/>

          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/characters" exact component={Characters}/>  
          <Route path="/characters/:name" component={CharacterDetails}/> 
          {/* <Route path='/favorites' component={Favorites} favorite={favorite}/>   */}
          </Switch>      
        </div>
    </Router>
  );
}


export default App;
