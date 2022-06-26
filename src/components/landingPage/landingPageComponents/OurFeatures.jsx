import React from 'react'

const OurFeatures = () => {
    return (
        <React.Fragment>
        
            <div id="features" className="container mb-5">
                <div className="row px-lg-5 ">
                    <div className="col-12">
                        <h1><span className='black-text'>Our</span><span className='blue-text'> Features</span></h1>
                    </div>
                    <div className="col-lg-6 col-sm-12 px-lg-5">
                        <div className="row border-start">
                            <div className="col-lg-12  px-0">
                                <div className="text-lg-start text-sm-center text-md-center mb-3 pt-3 ps-3 ">
                                    <div className="row g-0 d-flex justify-content-center">
                                        <div className="col-md-3 d-none d-lg-block text-center">
                                            <img src="/assets/images/ring1.png" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body ps-0 pe-4 py-0">
                                                <h3 className="card-title">Wallet integration</h3>
                                                <p className="card-text features-text ">Connect all Cronos NFT supported wallets and your crypto.org wallet to view all your NFT portfolio on the dashboard in one place</p>
                 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 px-0">
                                <div className="text-lg-start text-sm-center text-md-center mb-3 pt-3 ps-3" >
                                    <div className="row g-0 d-flex justify-content-center">
                                        <div className="col-md-3 d-none d-lg-block text-center">
                                            <img src="/assets/images/ring2.png" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body ps-0 pe-4 py-0">
                                                <h3 className="card-title">Floor Price Alert</h3>
                                                <p className="card-text features-text ">User can set alerts to specific NFT projects and receive an alert when the floor price changes by either a % or a monetary value</p>
                 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 px-0">
                                <div className="text-lg-start text-sm-center text-md-center mb-3 pt-3 ps-3" >
                                    <div className="row g-0 d-flex justify-content-center">
                                        <div className="col-md-3 d-none d-lg-block text-center">
                                            <img src="/assets/images/ring3.png" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body ps-0 pe-4 py-0"> 
                                                <h3 className="card-title">Staking comparison chart</h3>
                                                <p className="card-text features-text ">See and compare a glance the best projects to be staking with</p>
                 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                    <div className="col-6 d-none d-lg-block">
                        <img className='img-fluid ' src="/assets/images/bigring.png" alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OurFeatures