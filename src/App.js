import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navigationbar';
function App() {
  return (
    <div className="App">
<Router>
  <Navbar/>
<Route path="/" exact component ={Home}/>
</Router>

     </div>
  );
}

export default App;
