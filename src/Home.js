import React from 'react';
import './App.css';
import {Card,Container,Row,Col} from 'react-bootstrap';
import CardComp from './component/CardComp';
import MainComp from './component/MainComp';

function Home() {

  return (
 <div className="App">
 <Container>

 <br/>
 <br/>
 <br/>
 <br/>
 
  <Row>

  <Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}><CardComp/></Col>

   <Col xs={12} sm={12} md={8} lg={8} xl={8}><MainComp/></Col>
    
  </Row>


</Container>
</div>
  );
}

export default Home;
