import React from "react"
import Header from "../components/Header"
import "../css/style.css"
import CarsIntroduction from "../components/CarsIntroduction"
import {Route, Routes} from "react-router-dom"
import Features from "../components/Features"
import CarProductDetail from "../components/CarProductDetail"
import Checkout from "../components/FormCheckout"
import Footer from "../components/Footer"
const App:React.FC = () => {
  return (
   <div className="App">
     <Header/>
     <Routes>
       <Route path="/" element={<CarsIntroduction/>}/>
       <Route path="/new/add" element={<Features/>}/>
       <Route path="/detail/:_id" element={<CarProductDetail/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
     </Routes>
     <Footer/>
   </div>
  )
}

export default App;
