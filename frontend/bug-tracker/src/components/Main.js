import React from 'react'
import Home from './Home'
import Header from './Header'
import Contact from './Contact'

import { Routes, Route } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/home" element ={<Home/>}/>
                <Route path="/contactus" element ={<Contact/>}/>


            </Routes>
            
        </div>
    )
}

export default Main