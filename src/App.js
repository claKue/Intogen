import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'
import Visualization from './components/Pages/Visualization'
import Nationality from './components/Pages/Nationality'
import Education from './components/Pages/Education'
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
          <Route path="/nationality" component={Nationality} />
          <Route path="/education" component={Education} />
          <Route path="/findyourtype" component={FindYourType} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </Router>
      </>

  );
}

export default App;

