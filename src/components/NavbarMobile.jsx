import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavbarMobile = () => {
    const navigate = useNavigate();
    const goToSmartAlert = (e) => {
        e.preventDefault()
        navigate('smartalert')
        // navigate('/editcategory')
    }
    const goToTopCollection = (e) => {
        e.preventDefault()
        navigate('topcollections')
        // navigate('/editcategory')
    }
    const goToTopWatchlist = (e) => {
      e.preventDefault()
      navigate('watchlist')
      // navigate('/editcategory')
  }
    
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
    <div className="container-fluid">
 
    <img src="/assets/images/blooper.png" class="img-fluid rounded-start" alt="..." />
  
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        
        <div className="offcanvas-header">
        <img src="/assets/images/blooper.png" class="img-fluid rounded-start" alt="..." />
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body text-start">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active ps-3" aria-current="page" href="/">My NFTs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3" href="/smartalert" onClick={goToSmartAlert}>Smart Alerts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3" href="/topcollections" onClick={goToTopCollection}>Top Collections</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3" href="">Market Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3" href="">Staking Compare</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3" href="" onClick={goToTopWatchlist}>Watchlist</a>
            </li>
           
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
      <button className="mobile-toggle-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  )
}

export default NavbarMobile