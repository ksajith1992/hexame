import React,{useState} from 'react'
import ReactStars from "react-rating-stars-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Reviews() {
    const firstExample = {
        size: 60,
        value: 4.5,
        edit: false,
        color:'#fef200;',
        
      };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='m-3'>
        <h5>Customer Rating 4.5 (413)</h5>
        <Container>
      <Row>
        <Col xs={8} sm={8} lg={8}>
            <ReactStars {...firstExample}></ReactStars>
        </Col>
        <Col xs={4} sm={4} lg={4}>
            <Button variant="primary" onClick={handleShow} className='butonadd_rating mt-4'>
                +Add Rating
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your Rating</Modal.Title>
                </Modal.Header>
                <Modal.Body><ReactStars {...firstExample}></ReactStars></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>        
      </Row>
      <h5>Write Your Review</h5>
    </Container>
    </div>
  )
}

export default Reviews