import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../../Assets/Images/pdt-img1.jpg';
import banner2 from '../../../Assets/Images/pdt-img2.jpg';
import banner3 from'../../../Assets/Images/pdt-img3 (1).jpg';
import banner4 from'../../../Assets/Images/pdt-img3 (1).jpg';
import banner5 from'../../../Assets/Images/pdt-img4.jpg';
import banner6 from'../../../Assets/Images/pdt-img5.jpg';
function Banner() {
  return (
    <div className='mt-5'>
    <Container>
      <Row>
        <Col xs={12} sm={12} lg={6} className='banner_container'>
            <img src={banner1} alt='banner' className='banner1'/>
        </Col>
        <Col xs={12} sm={12} lg={6} className='banner_container'>
            <Row>
                <Col xs={6} sm={6} lg={4}>
                    <img src={banner2} alt='banner' className='smallbanner'/>
                </Col>
                <Col xs={6} sm={6} lg={4}>
                    <img src={banner3} alt='banner' className='smallbanner'/>
                </Col>
                <Col xs={6} sm={6} lg={4}>
                    <img src={banner4} alt='banner' className='smallbanner'/>
                </Col>
                <Col xs={6} sm={6} lg={4}>
                    <img src={banner5} alt='banner' className='smallbanner'/>
                </Col>
                <Col xs={6} sm={6} lg={4}>
                    <img src={banner6} alt='banner' className='smallbanner'/>
                </Col>
            </Row>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Banner