import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function Header() {
  return (
    <div>
        <Navbar style={{backgroundColor:'#9d03fc'}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/Y9cHXbF8/icon.gif"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <b>EmpCorner</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
