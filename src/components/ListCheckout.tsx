import React, {useEffect, useState} from "react"
import axios from "axios"
import {customerType} from "../types/customer.type"
import {Link} from "react-router-dom"
const ListCheckout:React.FC = () => {
  const [productList, setProductList] = useState<customerType[] | undefined>(undefined)
  useEffect(() => {
   getProductList()
  },[])
  const getProductList = async () => {
    let res = await axios.get("https://resful-web-api.onrender.com/api/customer/list")
    setProductList(res?.data)
  }

  return (
   <div className="form-wrapper">
     <h2 className="text-center text-secondary">Product consumption</h2>
     {productList?.length !== 0 && productList?.map((i, index) => {
       return(
        <div key={index}>
          <span className="d-flex">
            Firstname: 
            <p className="text-secondary ml-1">{i?.firstName}</p>
          </span>
          <span className="d-flex">
            Lastname:
            <p className="text-secondary ml-1">{i?.lastName}</p>
          </span>
          <span className="d-flex">
            Phone number:
            <p className="text-secondary ml-1">{i?.phoneNumber}</p>
          </span>
          <span className="d-flex">
            Address:
            <p className="text-secondary ml-1">{i?.address}</p>
          </span>
          <p className="text-primary">
            (*) If you want to get more details about cars, we always willing to help you to get the best one.
            Our slogan is:<span className="text-success"> 
            "Customers are the key to success".
            </span>
            <br/>
            <span className="text-info">No worries! We also have a professional marketers to get you the best chance to approach our products efficiency.</span>
          </p>
          <br/>
          <Link to={`tel:0961847448`}>Contact payment</Link>
        </div>
       )
      })
     }
   </div>
  )
}

export default ListCheckout