import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navigationbar';
import News from './component/News';
import Footer from './component/footer';
import Citys from './component/City';
function App() {
  return (
    <div className="App">
<Router>
  <Navbar/>
<Route path="/" exact component ={Home}/>
<Route path="/News"  component ={News}/>
<Route path="/City" component={Citys}/>
<br/>
<br/>
<Footer/>
</Router>
     </div>
  );
}

export default App;
