import axios from "axios"
import React, {useState} from "react"
import {Button, Col, Container, Form, Row} from "react-bootstrap"
import {ToastContainer, toast} from "react-toastify"
import {carType} from "../types/cars.type"
import {useNavigate} from "react-router-dom"
const Features:React.FC = () => {
  const [image, setImage] = useState("")
  const [model, setModel] = useState("")
  const [brand, setBrand] = useState("")
  const [price, setPrice] = useState("")
  const [, setData] = useState<carType | undefined>(undefined)
  const navigate = useNavigate()
  const handleAdd = async () => {
    if(image === ""){
     toast.error("Please enter your image", {position:"top-center"})
     return false
    }

    if(model === ""){
     toast.error("Please enter your model", {position:"top-center"})
     return false
    }

    if(brand === ""){
      toast.error("Please enter your brand", {position:"top-center"})
      return false
    }

    if(price === ""){
      toast.error("Please enter your price", {position:"top-center"})
      return false
    }else{
      let cars = {
       image:image,
       model:model,
       brand:brand,
       price:price
      }
      let res = await axios.post("https://resful-web-api.onrender.com/api/add/cars/new", cars)
      toast.success(res?.data?.message, {position:"top-center"})
      setData(res?.data)
      setInterval(() => {
       navigate("/")
      },1000)
      return true
    }
  }
  return (
   <>
    <ToastContainer/>
    <Container className="wrapper mt-2">
     <h1 className="text-center text-white">Add new</h1>
     <Form method="post">
       <Form.Group className="mb-2">
         <Row className="p-2">
           <Col md="6">
             <Form.Label className="text-white">Image</Form.Label>
             <Form.Control 
               className="rm-border"
               value={image}
               onChange={(e) => setImage(e?.target?.value)}
             />
           </Col>
           <Col md="6">
             <Form.Label className="text-white">Model</Form.Label>
             <Form.Control 
               className="rm-border"
               value={model}
               onChange={(e) => setModel(e?.target?.value)}
             />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group className="mb-2">
         <Row className="p-2">
           <Col md="6">
             <Form.Label className="text-white">Brand</Form.Label>
             <Form.Control 
               className="rm-border"
               value={brand}
               onChange={(e) => setBrand(e?.target?.value)}
             />
           </Col>
           <Col md="6">
             <Form.Label className="text-white">Price</Form.Label>
             <Form.Control 
               className="rm-border"
               value={price}
               onChange={(e) => setPrice(e?.target?.value)}
             />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group className="mb-2 p-2">
         <Button className="rm-border" onClick={handleAdd}>Add new</Button>
       </Form.Group>
     </Form>
    </Container>
   </>
  )
}

export default Features