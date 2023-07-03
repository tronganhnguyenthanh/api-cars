import React from "react"
import {Col, Container, Row} from "react-bootstrap"
import LeftFormCheckout from "./LeftFormCheckout"
import ListCheckout from "./ListCheckout"
const FormCheckout:React.FC = () => {
 return (
  <Container>
   <h2 className="text-center text-primary">Checkout payment</h2>
   <Row>
     <Col lg="6" className="p-2">
       <LeftFormCheckout/>
     </Col>
     <Col lg="6" className="p-2">
       <ListCheckout/>
     </Col>
   </Row>
  </Container>
 )
}

export default FormCheckout