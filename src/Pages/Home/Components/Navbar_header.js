import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../Assets/Images/logo.png'
import cart from '../../../Assets/Images/icon-cart.png'
import cartactive from '../../../Assets/Images/icon-cart-active.png'
import menu from '../../../Assets/Images/icon-menu.png'

function Navbar_header() {
//     const icon = document.querySelector(".icon");
//     const search = document.querySelector(".search");

// icon.onclick = function () {
//   search.classList.toggle("active");
// };
const iconclick=()=>{
  document.querySelector(".search").classList.toggle('active')
}
const clearfunction=()=>{
  document.getElementById('mysearch').value = '';
}
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
            <img src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <section>
            <div className="search">
                <div className="icon" onClick={iconclick}></div>
                <div className="input">
                    <input type="text" placeholder="Search..." id="mysearch"/>
                </div>
                <span className="clear" onClick={clearfunction}></span>
            </div>
        </section>
        <img src={cart} alt='cart' />
        <img src={menu} className='icons_head' alt='cart' />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar_header
