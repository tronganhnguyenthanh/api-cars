import React, {useEffect, useState} from "react"
import {carType} from "../types/cars.type"
import axios from "axios"
import {Col, Container, Row} from "react-bootstrap"
import { Link } from "react-router-dom"
const Footer:React.FC = () => {
  const [cars, setCars] = useState<carType[] | undefined>(undefined)
  useEffect(() => {
   getListCars()
  },[])
  const getListCars = async () => {
    let res = await axios.get("http://localhost:8000/api/cars/list")
    setCars(res?.data)
  }
  return (
   <div className="footer">
     <Container>
      <Row className="text-white p-2 text-center">
        {cars?.length !== 0 && cars?.map((i, index) => {
         return(
          <Col lg="4" key={index}>
            <Link to="https://www.facebook.com/" className="text-white">
              <img src={i?.image!} alt="" className="w-100 img-footer"/>
              <p>{i?.brand}</p>
            </Link>
          </Col>
         )
         })
        }
      </Row>
     </Container>
   </div>
  )
}

export default Footer