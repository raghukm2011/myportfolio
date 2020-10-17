import React from 'react'
import HeadRoom from "react-headroom"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import "./layout.scss"

const Layout =({children})=>{
        return (
            <>
            <HeadRoom>
            <Nav />
            </HeadRoom>
            {children}
            <Footer />
            </>
        )
    }
export default Layout