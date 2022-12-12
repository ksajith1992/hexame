import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import ReadMoreReact from 'read-more-react';
import Form from 'react-bootstrap/Form';

function Addtocart() {
    const firstExample = {
        size: 30,
        value: 4.5,
        edit: false,
        color:'#fef200;',
        
      };
  return (
    <div>
        <Container>
            <h1  className='product_name'>Kitkat Senses Cookie Crumble</h1>
            <Row>
              <Col xs={5} sm={5} lg={5}>
                <h5 className='product_price mt-2'>₹ 341</h5>
                </Col>
              <Col xs={4} sm={4} lg={4}>
                <p className='product_rate'><ReactStars {...firstExample}></ReactStars></p>
                </Col>
                <Col xs={3} sm={3} lg={3}>
                    <h5 className='product_rate mt-2'>4.5(413)</h5>
                </Col>
            </Row>
            <hr style={{color:'#ccccc'}}/>
            <h5 className='product_decription'>Product Discription</h5>
            <ReadMoreReact text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
            min={180}
            ideal={200}
            max={600}/>
            <Row className='mt-3'>
            <Col xs={1} sm={1} lg={1}><h5 className='product_text'>Size</h5></Col>
              <Col xs={5} sm={5} lg={5}>
                <Form.Select className='product_size'>
                    <option>10g</option>
                    <option>20g</option>
                    <option>30g</option>
                    <option>40g</option>
                    <option>50g</option>
                    <option>60g</option>
                    <option>70g</option>
                    <option>80g</option>
                    <option>90g</option>
                    <option>100g</option>
                    <option>110g</option>
                    <option>120g</option>
                    <option>130g</option>
                    <option>140g</option>
                    <option>150g</option>
                </Form.Select>
                </Col>
                <Col xs={1} sm={1} lg={1}><h5 className='product_text'>Qty</h5></Col>
              <Col xs={5} sm={5} lg={5}>
                <Form.Select className='product_size'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                </Form.Select>
                </Col>
            </Row>
            <button className="btn btn-primary w-100 mt-5 add_cart">
                Add to cart
            </button>
        </Container>
    </div>
  )
}

export default Addtocart