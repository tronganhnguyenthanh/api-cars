import React from "react"
import {Nav, Navbar} from "react-bootstrap"
import logo from "../images/logo.jpg"
import {Link} from "react-router-dom"
const Header: React.FC = () => {
  return (
   <>
     <Navbar bg="primary" expand="lg">
      <Navbar.Toggle aria-controls="navbarScroll"/>
      <Navbar.Collapse id="navbarScroll">
       <Nav 
         className="mr-auto my-2 my-lg-0"
         style={{maxHeight:"100px"}}
         navbarScroll
        >
         <img src={logo} alt="" className="img-logo"/>
       </Nav>
       <div className="d-sm-flex responsive">
         <Link className="text-white p-2 text-decoration-none" to="/">Home</Link>
         <Link className="text-white p-2 text-decoration-none text-nowrap" to="/checkout">
           Checkout
         </Link>
         <Link 
           className="btn-white text-nowrap p-2 text-white text-decoration-none" 
           to="/new/add"
          >
           Add new features
        </Link>
       </div>
      </Navbar.Collapse>
     </Navbar>
   </>
  )
}

export default Header