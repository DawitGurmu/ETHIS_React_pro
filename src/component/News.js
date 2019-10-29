import React from 'react';
import '../App.css';
import {Card,Col,Row} from 'react-bootstrap';
import News1 from '../text_files/news1';
import News2 from '../text_files/news2';
import News3 from '../text_files/news3';
function News() {

  return (
 <div className="App">
 <div>
 <br/>
 <br/>
 <br/>
 <br/>
 <div>
 <Row>
 <Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}>
 <Card bg="dark" className="Card-height" >
    <Card.Body className="jam ">
     <News1/>
 
</Card.Body>
</Card>
</Col>
<Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}>
<Card bg="dark" className="Card-height">
 <Card.Body className="jam"> 
    <News2/>   
</Card.Body>
</Card>
</Col>
<br/>
 <Col xs={12} sm={12} md={4} lg={4} Xl={{ span: 4, offset: 1 }}>
   <Card bg="dark" className="Card-height">

 <Card.Body className="jam">
       <News3/> 
</Card.Body>
</Card>
</Col>
</Row>



  
  </div>

</div>
</div>
  );
}

export default News;