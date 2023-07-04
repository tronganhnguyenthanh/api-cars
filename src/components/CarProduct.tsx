import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { carType } from "../types/cars.type"
import { useNavigate } from "react-router-dom"
const CarProduct: React.FC = () => {
  const [cars, setCars] = useState<carType[] | undefined>(undefined)
  const [keyword, setKeyword] = useState("")
  const [sort, setSort] = useState(0)
  const handleOnSearch = async () => {
    if(keyword !== ""){
     let filterCar = await cars?.filter((i) => i?.brand?.search(keyword) > -1)
     setCars(filterCar)
    }else{
      await getCarList()
    }
  }
  const navigate = useNavigate()
  useEffect(() => {
    getCarList()
  }, [])
  const getCarList = async () => {
    let res = await axios.get("https://resful-web-api.onrender.com/api/cars/list")
    setCars(res?.data)
  }
  const seeDetail = async (_id: string) => {
    await navigate(`/detail/${_id}`)
  }
  // Sort by name
  const handleOnSortByBrand = async () => {
    if (sort === 0) {
      setSort(1)
      let sortByBrandAsc = await cars?.sort((a, b) => a?.brand?.localeCompare(b?.brand))
      setCars(sortByBrandAsc)
    }else{
      setSort(0)
      let sortByBrandDesc = await cars?.sort((a, b) => b?.brand?.localeCompare(a?.brand))
      setCars(sortByBrandDesc)
    }
  }
  return (
    <Container>
      <h2 className="text-center text-primary">Car list</h2>
      <div className="d-flex justify-content-end">
        <Form.Control
          className="rm-border w-sm-25 rm-border-width"
          placeholder="Search by keyword"
          value={keyword}
          onChange={(e) => setKeyword(e?.target?.value)}
        />
        <Button className="rm-border ml-1" onClick={handleOnSearch}>Search</Button>
        <Button className="rm-border ml-1" onClick={handleOnSortByBrand}>
          {sort === 0 ?
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
            </svg> 
            : 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg>
            }
        </Button>
      </div>
      <Row className="p-2">
        {cars?.length !== 0 && cars?.map((i, index) => {
          return (
            <Col key={index} lg="4" className="p-2">
              <Card>
                <img src={i?.image!} alt="" className="img-footer"/>
                <h3 className="text-center text-dark">{i?.brand}</h3>
                <p className="text-center text-secondary">{"$" + parseInt(i?.price)}</p>
                <div className="p-2 d-flex justify-content-center">
                  <Button className="w-75 text-nowrap" onClick={() => seeDetail(i?._id)}>Details</Button>
                </div>
              </Card>
            </Col>
          )
        })
        }
      </Row>
    </Container>
  )
}

export default CarProduct