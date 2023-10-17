import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css'
import { Link } from 'react-router-dom';


function AdminHome() {
  return (
    <div >

      <Row id='home'>
        <Col className='ps-3'>
          <h2 id='title' className='p-5 mt-5'>Makes Employee Management Easy</h2>
          <p className='text-white fs-3 ps-5'>The Employee desk is designed to <br /> integrate all of these necessary elements</p>
        </Col>
        <Col>
          <img className='w-75' src="https://i.postimg.cc/dtJ2Vf3g/adimage.gif" alt="" />
        </Col>


      </Row>
      <Container>
        <Row className='p-5 ms-5 '  >
          <Col  lg={6} className='text-center'>
           <Link to={'/add'} style={{textDecoration:'none'}}>
              <Card className='shadow' id='cl' style={{ width: '80%' }}>
                <Card.Img variant="top" src="https://i.postimg.cc/8C7TJCWF/emppho.gif" style={{height:'300px'}} />
                <Card.Body>
                 <h3>Add new employee</h3>
                  <p>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sapiente dolor nostrum optio nesciunt dolore distinctio tempora, quisquam animi voluptas neque inventore reiciendis. Officia dolore veritatis provident cumque reiciendis architecto?
                  </p>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
           </Link>
          </Col>
          <Col lg={6} className='text-center'>
          <Link to={'/emp'} style={{textDecoration:'none'}}>
            <Card className='shadow' id='cl' style={{ width: '80%' }}>
                <Card.Img variant="top" src="https://i.postimg.cc/htP20z2G/mana.gif" style={{height:'300px'}} />
                <Card.Body>
                 <h3>Manage Employees</h3>
                  <p>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, facere ex aperiam molestias recusandae odit nulla, error laboriosam repellat molestiae tempora ipsum blanditiis repudiandae? Quaerat neque consequatur sunt delectus quidem?
                  </p>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
          </Link>
          </Col>
  
        </Row>
      </Container>



    </div>
  )
}

export default AdminHome