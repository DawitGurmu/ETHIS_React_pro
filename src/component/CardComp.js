import React from 'react';
import {Card,Container,Button} from 'react-bootstrap';
import Ancient from '../text_files/AncientEth';
import Card2 from '../text_files/card2';
import Card3 from '../text_files/card3';
import Card1 from '../text_files/card1';

function CardCompTwo(){
    return(
     
     <>
    <Container>
    
    <div class="embed-responsive embed-responsive-16by9"   data-toggle="tooltip" data-placement="top" title="Video by Official Ethiopian Investment Commission YouTube Channel">
    <video  src="midia_file/eth.mp4" controls/>
     video
    </div>
    <br/>
    
    <Card>
   
  <Card.Img  src="holder.js/100px180?text=Image cap" />
  <img src="ethi_coff.jpg" class="card-img-top" alt="Ethiopia map coverd by coffee beans" 
  data-toggle="tooltip" data-placement="top" title="Image by johne from pixbay"></img>
  
    </Card>
    <div className="jam">
    <br/>

      <Card bg="dark">
      <Card.Body className="jam">
      <Card.Text className="article-text">
    <Ancient/>
    </Card.Text>
    <div class="dropdown-divider"/>
    <Button href="Ancient" variant="primary"block>Vist page</Button>
   </Card.Body>
    </Card>
    <br/>
    <Card bg="dark" >
    <Card.Body className="jam" >
    <Card.Title className="article-text" >Hellow World!!</Card.Title>
    <div class="dropdown-divider"/>
    <Card.Text className="article-text">
    <Card1/>
  </Card.Text>
  <div className="dropdown-divider"/>
  <Button href="Card1" variant="primary"block>Vist page</Button>
  </Card.Body>
    </Card>

    <br/>

    <Card bg="dark" >
    <Card.Body className="jam" >
    <Card.Title className="article-text" >Hellow World!!</Card.Title>
    <div class="dropdown-divider"/>
    <Card.Text className="article-text">
      <Card2/>
</Card.Text>
<div class="dropdown-divider"/>
<Button href="Card2" variant="primary"block>Vist page</Button>
</Card.Body>
    </Card>
    <br/>
    <Card bg="dark" >
    <Card.Body className="jam" >
    <Card.Title className="article-text" >Hellow World!!</Card.Title>
    <div class="dropdown-divider"/>
    <Card.Text className="article-text">
  <Card3/>
</Card.Text>
<div class="dropdown-divider"/>
<Button href="Card3" variant="primary"block>Vist page</Button>
</Card.Body>
    </Card>
    </div>
    </Container>
</>
    

    );
   
    
}

export default CardCompTwo;