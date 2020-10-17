import React from "react"
import Layout from "../components/Layout/Layout"
import Links from "../components/Links/Links"
import Email from "../components/Email/Email"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"


const Index =()=> {
 return(
 <main className="container">
    <Layout>
    <Links />
      <Email />
      <Hero />
      <About />
      <Contact />
    </Layout>
  </main>
 )
}

export default Index
