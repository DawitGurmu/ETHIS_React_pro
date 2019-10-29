import React from 'react';
import '../App.css';
import {Card,Col,Row} from 'react-bootstrap';
import News3 from '../text_files/card1';
import Card2 from '../text_files/card2';
function City() {

  return (
 <div className="App">
 <div>
 <br/>
 <br/>
 <br/>
 <br/>
 
 <Row>
 <Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}>
 <Card bg="dark"  className=" jam Card-height" >
 <h4 class="hedertext"> Addis Ababa</h4> 
  <img src= "midia_file/56.jpg"class="card-img-top" width="340" height="200" alt="bird eye view of Addis ababa city"/> 
    <Card.Body className="jam ">
     <Card2/>
 
</Card.Body>
</Card>
</Col>
<Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}>
<Card bg="dark"  className=" jam Card-height" >
 <Card.Body className="jam"> 
 <h4 class="hedertext"> Gonder</h4> 
  <img src= "midia_file/56.jpg"class="card-img-top" width="340" height="200" alt="bird eye view of Addis ababa city"/> 
  <Card2/>
</Card.Body>
</Card>
</Col>
<br/>
 <Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}>
 <Card bg="dark"  className=" jam Card-height" >

 
 <h4 class="hedertext"> Hawassa</h4> 
  <img src= "midia_file/56.jpg"class="card-img-top" width="340" height="200" alt="bird eye view of Addis ababa city"/> 
  <Card.Body>
       <News3/> 
</Card.Body>
</Card>
</Col>
</Row>
<br/>

<Row>
 <Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}>
 <Card bg="dark"  className=" jam Card-height" >
 <h4 class="hedertext">Lalibela</h4> 
  <img src= "midia_file/56.jpg"class="card-img-top" width="340" height="200" alt="bird eye view of Addis ababa city"/> 
    <Card.Body className="jam ">
     <Card2/>
</Card.Body>
</Card>
</Col>

 <Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}>
 <Card bg="dark"  className=" jam Card-height" >
 <h4 class="hedertext"> Axume</h4> 
  <img src= "midia_file/56.jpg"class="card-img-top" width="340" height="200" alt="bird eye view of Addis ababa city"/> 
    <Card.Body className="jam ">
     <Card2/>
 
</Card.Body>
</Card>
</Col>

 <Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}>
 <Card bg="dark"  className=" jam Card-height" >
 <h4 class="hedertext">Harer</h4> 
  <img src= "midia_file/56.jpg"class="card-img-top" width="340" height="200" alt="bird eye view of Addis ababa city"/> 
    <Card.Body className="jam ">
     <Card2/>
 
</Card.Body>
</Card>
</Col>
</Row>


</div>
</div>
  );
}

export default City;