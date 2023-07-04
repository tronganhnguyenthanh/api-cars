import axios from "axios"
import React, {useState} from "react"
import {Button, Form} from "react-bootstrap"
import {ToastContainer, toast} from "react-toastify"
import {customerType} from "../types/customer.type"
const LeftFormCheckout: React.FC = () => {
 const [, setData] = useState<customerType[] | undefined>(undefined)
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")
 const [phoneNumber, setPhoneNumber] = useState("")
 const [address, setAddress] = useState("")
 const handleAddCustomers = async (e:any) => {
   e.preventDefault()
   if(firstName === ""){
    toast.error("Please enter your first name", {position:"top-center"})
    return false
   }
   if(lastName === ""){
    toast.error("Please enter your last name", {position:"top-center"})
    return false
   }
   if(phoneNumber === ""){
    toast.error("Please enter your phone number", {position:"top-center"})
    return false
   }
   if(phoneNumber?.length < 10){
    toast.error("Your phone number must be enough 10 characters", {position:"top-center"})
    return false
   }
   if(address === ""){
    toast.error("Please enter your address", {position:"top-center"})
    return false
   }else{
     let customers = {
       firstName:firstName,
       lastName:lastName,
       phoneNumber:phoneNumber,
       address:address
     }
     let res = await axios.post("https://resful-web-api.onrender.com/api/new/customer", customers)
     setData(res?.data)
     return true
   }
 }
 return (
  <>
   <ToastContainer/>
   <Form className="form-wrapper">
     <Form.Group className="mb-2">
        <Form.Label>First name</Form.Label>
        <Form.Control
          className="rm-border"
          value={firstName}
          onChange={(e) => setFirstName(e?.target?.value)}
        />
     </Form.Group>
     <Form.Group className="mb-2">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          className="rm-border"
          value={lastName}
          onChange={(e) => setLastName(e?.target?.value)}
        />
     </Form.Group>
     <Form.Group className="mb-2">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          className="rm-border"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e?.target?.value)}
        />
     </Form.Group>
     <Form.Group className="mb-2">
        <Form.Label>Address</Form.Label>
        <Form.Control 
          className="rm-border"
          value={address}
          onChange={(e) => setAddress(e?.target?.value)}
        />
     </Form.Group>
     <Form.Group className="mb-2">
       <Button type="submit" onClick={handleAddCustomers}>Submit</Button>
     </Form.Group>
   </Form>
  </>
 )
}

export default LeftFormCheckout