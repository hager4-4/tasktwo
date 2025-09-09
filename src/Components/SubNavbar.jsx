import React from 'react'
import { Link } from 'react-router-dom'

function SubNavbar() {
  return (
      <div className="sub-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <ul className="info">
            <li><i className="fa fa-envelope"></i> info@company.com</li>
            <li><i className="fa fa-map"></i> Sunny Isles Beach, FL 33160</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4">
          <ul className="social-links">
            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
            <li><Link to="https://x.com/minthu" target="_blank"><i className="fab fa-twitter"></i></Link></li>
            <li><Link to="#"><i className="fab fa-linkedin"></i></Link></li>
            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  )
}

export default SubNavbar