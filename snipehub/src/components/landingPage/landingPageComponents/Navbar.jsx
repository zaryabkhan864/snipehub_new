import React from 'react'
import { useNavigate } from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate('/')
   }
  return (
    <React.Fragment>
      <div id="navbar" className="container-fluid">
        <div className="row">
          <div className="col-12 px-0 ">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div class="d-flex align-item-middle">
                  <a className="navbar-brand " href="#">
                    <img className='img-fluid w-100 h-100 d-none d-lg-block ' src="/assets/images/SnipeHub.png" alt="" />
                    <img className='img-fluid w-100 h-100 d-lg-none d-sm-block ' src="/assets/images/blooper.png" alt="" />
                  </a>
                </div>
                {/* this component is for mobile view -- code start */}
                <div className="div d-lg-none d-sm-block ms-auto ">
                  <button className="btn  me-2 blue-button  rounded-circle" type="submit"><i className="fa-solid fa-wallet"></i></button>
                </div>
                {/* this component is for mobile view -- code end */}

                <button className="navbar-toggler  rounded-circle btn-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse   " id="navbarNavDropdown">

                  <button className="btn btn-outline-primary me-1 blue-button-outline mx-auto py-2 px-4" type="submit"  onClick={goToNextPage}>Sign Up</button>
                  <button className="btn btn-primary ms-1 blue-button text-white " type="submit"><img src="/assets/images/simplewallet.png" className='img-fluid'/> Connect Wallet</button>
            


                </div>
              </div>

            </nav>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Navbar