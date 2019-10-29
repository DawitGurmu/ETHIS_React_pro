import React from 'react';
import '../App.css';
import {Row,Col} from 'react-bootstrap';
import CardComp from './CardComp';
import MainComp from './MainComp';

function Home() {

  return (
 <div className="App">
 <div>
 <br/>
 <br/>
 <br/>
 <br/>
 
  <Row>

  <Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}><CardComp/></Col>

   <Col xs={12} sm={12} md={8} lg={8} xl={8}><MainComp/></Col>
    
  </Row>


</div>
</div>
  );
}

export default Home;
