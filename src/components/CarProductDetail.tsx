import React, {useEffect, useState} from "react"
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap"
import {useNavigate, useParams} from "react-router-dom"
import {carType} from "../types/cars.type"
import axios from "axios"
const CarProductDetail:React.FC = () => {
  const {_id} = useParams()
  const [detail, setDetail] = useState<carType | undefined>(undefined)
  const [shop, setShop] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
   getCarDetail(_id)
  },[_id])
  const getCarDetail = async (_id:any) => {
   let res = await axios.get(`http://localhost:8000/api/car/${_id}`)
   setDetail(res?.data)
  }
  const onShopOpen = () => {
    if(!shop){
     setShop(true)
    }else{
      navigate("/checkout")
    }
  }
  const onShopClose = () => {
    setShop(false)
  }
  return (
   <Container className="d-flex justify-content-center">
     <Row className="p-2">
      <Card bg="secondary">
        <Col>
          <div className="d-flex justify-content-center">
            <img src={detail?.image!} alt="" className="w-50 mt-2 p-2"/>
          </div>
          <h2 className="text-center text-white">{detail?.brand}</h2>
          <p className="text-center text-white">{detail?.model}</p>
          <p className="text-white text-center">{"$" + detail?.price}</p>
          <div className="d-flex justify-content-center p-2">
            <Button className="btn btn-info w-25" onClick={onShopOpen}>Shop me</Button>
          </div>
        </Col>
      </Card>
     </Row>
     <Modal show={shop} size="lg" onHide={onShopOpen}>
       <Modal.Header className="d-flex justify-content-end">
         <Button className="btn btn-secondary" onClick={onShopClose}>x</Button>
       </Modal.Header>
       <Modal.Body>
          <h3 className="text-center text-primary">Are you sure you want to get this one?</h3>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="danger" onClick={onShopOpen}>Yes</Button>
         <Button variant="secondary" onClick={onShopClose}>No</Button>
       </Modal.Footer>
     </Modal>
   </Container>
  )
}

export default CarProductDetail