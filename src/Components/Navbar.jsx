import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    
    <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <Link to="index.html" className="logo">
                        <h1>Villa</h1>
                    </Link>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                      <li><Link to="index.html" className="active">Home</Link></li>
                      <li><Link to="properties.html">Properties</Link></li>
                      <li><Link to="property-details.html">Property Details</Link></li>
                      <li><Link to="contact.html">Contact Us</Link></li>
                      <li><Link to="#"><i className="fa fa-calendar"></i> Schedule a visit</Link></li>
                  </ul>   
                    <Link className='menu-trigger'>
                        <span>Menu</span>
                    </Link>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
  )
}

export default Navbar