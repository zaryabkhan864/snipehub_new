import React from 'react'

const Footer = () => {
    return (
        <React.Fragment >
            <div className="container">
                <div className="row pe-5">
                    <div className="col-lg-6 text-start my-5 py-5 d-none d-lg-block">
                        <img src="/assets/images/SnipeHub.png" className="img-fluid" alt="..." />
                    </div>
                    <div className="col-lg-6 text-lg-end text-sm-center pe-5 mt-5 pt-5 my-auto" >
                        <i className="fa-brands fa-reddit-alien mt-4"></i>
                        <i className="fa-brands fa-telegram mt-4"></i>
                        <i className="fa-brands fa-twitter mt-4"></i>
                        <i className="fa-brands fa-m mt-4"></i>
                        <i className="fa-brands fa-linkedin-in mt-4"></i>
                    </div>
                    <div className="col-lg-6 text-start border-top  d-none d-lg-block py-3">
                        <span>Copyrigth © 2022 Lost Toys, LLC.</span>
                    </div> 
                    <div className="col-lg-6 text-end border-top  d-none d-lg-block py-3 pe-5">
                        <span>Privacy & Policy</span>
                    </div>
                </div>
            </div>
 
        </React.Fragment>
    )
}

export default Footer