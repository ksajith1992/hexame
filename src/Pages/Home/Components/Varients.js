import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import varient1 from '../../../Assets/Images/pdt-Variant1.jpeg'
import varient2 from '../../../Assets/Images/pdt-Variant2.jpg'
import varient3 from '../../../Assets/Images/pdt-Variant3.jpg'


function Varients() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
  return (
    <Carousel focusOnSelect={true} responsive={responsive} keyBoardControl={true} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px" infinite={true} autoPlay>
            
            <div className='pic p-2'>
                <img src={varient1} alt='MaverixPro' className='carusel_banner'/>
            </div>
            <div className='pic p-2'>
                <img src={varient2} alt='MaverixPro' className='carusel_banner'/>
            </div>
            <div className='pic p-2'>
                <img src={varient3} alt='MaverixPro' className='carusel_banner'/>
            </div>
        </Carousel>
  )
}

export default Varients