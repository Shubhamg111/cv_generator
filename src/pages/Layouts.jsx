import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'

const Layouts = () => {
  return (
    <>
    <Header/>
    <div className="d-flex">
    <Menu/>
    <Outlet/>
    </div>
    </>
  )
}

export default Layouts
