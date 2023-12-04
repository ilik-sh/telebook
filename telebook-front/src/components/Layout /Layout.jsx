import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import AppRouter from '../AppRouter'
import Wrapper from '../Wrapper/Wrapper'

export default function Layout() {
  return (
    <>
        <NavBar/>
        <Wrapper>
            <AppRouter/>
        </Wrapper>
        <Footer/>
    </>
  )
}
