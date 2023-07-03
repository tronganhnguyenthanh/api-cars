import React, {useEffect, useState} from "react"
import {Carousel} from "react-bootstrap"
import {carType} from "../types/cars.type"
import axios from "axios"
import CarProduct from "./CarProduct"
const CarsIntroduction:React.FC = () => {
  const [caRousel, setCarousel] = useState<carType[] | undefined>(undefined)
  useEffect(() => {
   getCarouselList()
  },[])
  const getCarouselList = async () => {
   let res = await axios.get("http://localhost:8000/api/cars/list")
   setCarousel(res?.data)
  }
  return (
   <>
    <Carousel controls={false}>
      {caRousel?.length !== 0 && caRousel?.map((i, index) => {
        return(
         <Carousel.Item key={index}>
           <img 
             className="d-block w-100" 
             src={i?.image!}
             alt=""
           />
         </Carousel.Item>
        )
       })
      }
    </Carousel>
    <CarProduct/>
   </>
  )
}

export default CarsIntroduction