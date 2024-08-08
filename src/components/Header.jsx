import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className='bg-dark d-flex justify-content-between align-items-center'>
        <div className="logo col-2">
         <Link to="/" className="d-block text-decoration-none ">
          <h1 className="text-center fs-3 px-3 text-light"><span className="fs-2 text-info"><i class="bi bi-file-earmark-medical fs-5 bg-info text-white rounded-circle px-2 py-1"></i> CV</span><br />Creator</h1>
        </Link>
        </div>
        <div className="btns col-3">
            <Link className='btn btn-info text-white px-4 py-2 me-3'>Login</Link>
            <Link className='btn btn-info text-white px-4 py-2 '>Signup</Link>

        </div>
        </header>

    </>
  )
}

export default Header
