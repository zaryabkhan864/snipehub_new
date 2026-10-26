import React from 'react'

const BottomBanner = () => {
    return (
        <React.Fragment >
            <div id="bottombanner" className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-11 px-4 mt-5 mb-4 ">
                        <div className="card text-white  bottom-banner">
                            <img src="/assets/images/rfront.png" className="card-img img-fluid   "  alt="..." />
                            <div className="card-img-overlay ">
                                <div className='p-lg-0 p-sm-5 '>
                                <h2 className="card-title">Getting started is easy</h2>
                                <p className="card-text">Don't you know how to sign up please click on the link below</p>
                                <button className='btn  blue-button  px-lg-5 rounded '><span>Get Start<i className="fa-solid fa-arrow-right-long"></i></span> </button>
                                </div>
                            


                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row ">
                    <div className="col bottom-banner ">
                        <img src="/assets/images/rfront.png" className="card-img  " alt="..." />
                        <div className="card-img-overlay justify-content-center">

                            <h5 className="card-title">Getting started is easy</h5>
                            <p className="card-text">Don't you know how to sign up please click on the link below</p>
                            <button className='btn  blue-button  px-5 rounded '><span>Get Start<i className="fa-solid fa-arrow-right-long"></i></span> </button>


                        </div>
                    </div>
                </div> */}

            </div>
            {/* <div className="container">
                <div className="row align-items-center bottom-banner text-light"
                    style={{ "minHeight": 60 + 'vh' }}>
                    <div className="col-md-12">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div> */}
        </React.Fragment >
    )
}

export default BottomBanner