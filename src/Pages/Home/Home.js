import React from 'react'
import Banner from './Components/Banner'
import Navbar_header from './Components/Navbar_header'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Varients from './Components/Varients';
import Addtocart from './Components/Addtocart';
import Reviews from './Components/Reviews';

function Home() {
  return (
    <>
    <div className='MainHead_withBg'>
        <Navbar_header/>
        <Banner/>
        <div className='mt-3'>
          <Container>
            <Row>
              <Col xs={12} sm={12} lg={6} className='mt-3'>
                <Varients/>
                <Addtocart/>
              </Col>
              <Col xs={12} sm={12} lg={6} className='banner_review'>
                <Reviews/>
                
                </Col>
            </Row>
          </Container>
        </div>
    </div>
    </>
  )
}

export default Home