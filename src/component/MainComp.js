import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

import firebase from 'firebase';
import { Config } from '../component/config';


  class MainComp extends Component {

 constructor()
  {
    super()
    this.app = firebase.initializeApp(Config);
    this.database = this.app.database().ref().child('eth');
    this.state = {
      text: 1
    }
  }

  componentDidMount() {
    this.database.on('value',snap => {
      this.setState({
        text: snap.val()
      });
    });
    
  }
  render() {
    return(
    
     <>   
        <h1 className="text-color">Ethiopia</h1>
        <div class="jam">
        <Card bg="primary" >
        <Card.Text className="article-text">
        
        {this.state.text}
        
          </Card.Text>
          </Card>
         
            </div>
 
  </>   
                   
    )};
  }

    export default MainComp;
    