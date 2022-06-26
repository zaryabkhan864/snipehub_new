import React from 'react'

const Banner = () => {
    return (
        <React.Fragment>
            <div id="banner" className="container-fluid mb-5 ">
                <div className="row ">
                    <div className="col-lg-6 col-sm-12 my-auto ps-lg-5 ps-sm-0">
                        <div className="container gx-sm-0 ps-lg-5 ps-sm-0 ">
                            <div className="row ps-lg-5 ps-sm-0">
                            <div className="col-12 text-lg-start ps-lg-5 ps-sm-0 text-sm-center d-none d-lg-block ">
                                    <h1 className='ps-lg-5 ps-sm-0' >NFT Portfolio</h1>
                                    <h3 className='sub-heading ps-lg-5 ps-sm-0'>Mannagment Platform</h3>
                                    <h5 className='ps-lg-5 ps-sm-0'><span className='pe-3 '><img className='img-fluid ' src="/assets/images/mark.png" alt="" /></span>View all of your NFT's in one place from all wallets</h5>
                                    <h5 className='ps-lg-5 ps-sm-0'><span className='pe-3'><img className='img-fluid' src="/assets/images/mark.png" alt="" /></span>Custom alert on floor prices</h5>
                                    <h5 className='ps-lg-5 ps-sm-0'><span className='pe-3'><img className='img-fluid ' src="/assets/images/mark.png" alt="" /></span>Create watchlists</h5>
                                    <h5 className='ps-lg-5 ps-sm-0'><span className='pe-3'><img className='img-fluid ' src="/assets/images/mark.png" alt="" /></span>Staking comparison charts</h5>
                                    <button className='btn  blue-button text-white px-lg-5 px-sm-0  '>Get Start <i className="fa-solid fa-arrow-right-long"></i></button>
                                </div>
                                <div className="col-12 text-lg-start ps-lg-5 ps-sm-0 text-sm-center d-lg-none d-sm-block">
                                    <h1 className='ps-lg-5 ps-sm-0' >NFT Portfolio</h1>
                                    <h3 className='sub-heading ps-lg-5 ps-sm-0'>Mannagment Platform</h3>
                                    <h5 className='ps-lg-5 ps-sm-0'><span className='pe-3 '></span>View all of your NFT's in one place from all wallets</h5>
                                    <h5 className='ps-lg-5 ps-sm-0'><span className='pe-3'></span>Custom alert on floor prices</h5>
                                    <h5 className='ps-lg-5 ps-sm-0'><span className='pe-3'></span>Create watchlists</h5>
                                    <h5 className='ps-lg-5 ps-sm-0'><span className='pe-3'></span>Staking comparison charts</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 col-sm-12 px-0">
                        <div className="container p-lg-5 p-md-0 p-sm-0 p-0">
                            <div className="row">
                                <div className="col-12 text-start">
                                    <h1 className='' >NFT Portfolio</h1>
                                    <h3 className=''>Mannagment Platform</h3>
                                    <h5 className=''><span className='pe-3 '><img className='img-fluid ' src="/assets/images/mark.png" alt="" /></span>View all of your NFT's in one place from all wallets</h5>
                                    <h5 className=''><span className='pe-3'><img className='img-fluid ' src="/assets/images/mark.png" alt="" /></span>Custom alert on floor prices</h5>
                                    <h5 className=''><span className='pe-3'><img className='img-fluid ' src="/assets/images/mark.png" alt="" /></span>Create watchlists</h5>
                                    <h5 className=''><span className='pe-3'><img className='img-fluid ' src="/assets/images/mark.png" alt="" /></span>Staking comparison charts</h5>
                                    <button className='btn  blue-button text-white px-5 '>Get Start <i className="fa-solid fa-arrow-right-long"></i></button>
                                </div>
                            </div>
                        </div>



                    </div> */}
                    <div className="col-lg-6 col-sm-12 pe-0 ps-4 d-none d-lg-block">
                        <img className='img-fluid' src="/assets/images/bannerright.png" alt="" />
                    </div>
                    {/* this code is for mobile view --- tag start */}
                    <div className="col-lg-6 col-sm-12 px-0 d-lg-none d-sm-block mb-5 w-100 h-100 ">
                        <img className='img-fluid' src="/assets/images/smallscreenbanner.png" alt="" />
                        <div className="d-grid gap-2 px-3">
                            <button className="btn btn-primary py-4" type="button">Get Start</button>
                        </div>
                    </div>
                    {/* this code is for mobile view --- tag end */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner