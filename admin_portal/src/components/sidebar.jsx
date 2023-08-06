import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

const Sidebar = () => {
  return (
    <>
        <section className='sidebar'>
            <nav>
                <h1 className='m-4'>LOGO</h1>
                <div className="profile">
                    <div className="profile-image"><i class="fa-solid fa-user"></i></div>
                    <div className="profile-name"> Profile Name</div>
                </div> 
    
                    <ul className='nav-links'>
                        <li><i className="fa-solid fa-table-columns"></i><Link to='/'>Dashboard</Link></li>

                        <li><i className="fa-solid fa-user"></i><Link to='/users'>Users</Link> </li>

                        <li><i className="fa-brands fa-product-hunt"></i><Link to='/products'>Products</Link></li>

                        <li><i className="fa-solid fa-right-from-bracket"></i><Link to='/login'>Sign Out</Link>  </li>
                    </ul>
            </nav>
        </section>
    </>
  )
}

export default Sidebar


