import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'
import Visualization from './components/Pages/Visualization'
import FindYourType from './components/Pages/FindYourType'
import AboutUs from './components/Pages/AboutUs'

function App() {
  return (
      <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/visualization" component={Visualization} />
          <Route path="/findyourtype" component={FindYourType} />
          <Route path="/about us" component={AboutUs} />
        </Switch>
      </Router>
      </>

  );
}

export default App;

