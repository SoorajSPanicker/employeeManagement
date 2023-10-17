import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div  style={{backgroundColor:'#9d03fc',color:'white'}}>
  
         <Container>
               <Row className='p-2' >
                <Col lg={5}>
                <h5>Employee desk</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae voluptatum aliquid atque culpa magnam illo minus recusandae.</p>
    
    
                </Col>
                
                <Col lg={4}>
                <h5>Contact Us</h5>
                <input className='w-100' type="text" placeholder='email' /> 
                <div className='mt-2 d-flex justify-content-center'><button type='submit'>Send</button></div>
    
                </Col>
                <Col lg={3}>
                <h5>Connect with us</h5>
                Email:Employeedesk234@gmail.com
                </Col>
                </Row> 
         </Container>

      
       

    </div>
  )
}

export default Footer