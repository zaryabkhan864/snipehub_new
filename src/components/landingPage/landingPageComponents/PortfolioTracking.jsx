import React from 'react'

const PortfolioTracking = () => {
    return (
        <React.Fragment>
            <div id="tracking" className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12">
                        <h1><span className='black-text'>NFT Protfolio</span><span className='blue-text'> Tracking</span></h1>
                        {/* <h1 className='black-text'>NFT Protfolio<span> Tracking</span></h1> */}
                    </div>
                    <div className="col-lg-12 col-sm-12 my-lg-5 px-lg-5   ">
                        <button type="button" className="btn btn-primary m-1 px-lg-5 px-sm-3 py-2 blue-button">Profile</button>
                        <button type="button" className="btn btn-outline-secondary m-1  px-lg-5 px-sm-3 py-2">Transaction</button>
                        <button type="button" className="btn btn-outline-secondary m-1  px-lg-5 px-sm-3 py-2">Financiais</button>
                        <button type="button" className="btn btn-outline-secondary m-1  px-lg-5 px-sm-3 py-2">Investory</button>

                    </div>
                 
               
                    <div className="col-12 ">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 text-start ps-5">
                                <p>Art Creator</p>
                                <p className='heading'>Looneycorns <img className=' img-fluid' src="/assets/images/L_tick.png" alt="" /></p>
                                <p className='trackpara'>
                                    Looneycorns is the first of 5 unique toys/NFTs from the Lost Toy collection. Each toy character represents a childhood favourite that has been lost over time and needs a new home.
                                </p >
                                <div className="container-fuild d-sm-none d-lg-block">
                                <div className="row border rounded py-2 ">
                                    <div className="col-lg-3 col-md-6 border-end ">
                                        <h3 className='mb-0 track-h3'>2.2K</h3>
                                        <p className='track-small-text mt-2'>Items</p>
                                    </div>
                                    <div className="col-lg-3 col-md-6 border-end ">
                                        <h3 className='mb-0 track-h3'>1K</h3>
                                        <p className='track-small-text mt-2'>Owner</p>
                                    </div>
                                    <div className="col-lg-3 col-md-6 border-end ">
                                        <h3 className='mb-0 track-h3'><img className=' img-fluid me-2' src="/assets/images/clogo.png" alt="" />1K</h3>
                                        <p className='track-small-text mt-2'>Floor Price</p>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <h3 className='mb-0 track-h3'><img className=' img-fluid me-2' src="/assets/images/clogo.png" alt="" />108.5k</h3>
                                        <p className="track-small-text mt-2">Traded</p>
                                    </div>
                                </div>
                                </div>
                              
                                {/* this component is for mobile view -- code on  */}
                                <div className="row rounded py-2 text-center d-flex justify-content-center">
                                    <div className="col-lg-6 col-sm-5 col-md-5 col-5 border m-2  d-lg-none d-sm-block">
                                        <h3 className='mb-0'>2.2K</h3>
                                        <span>Items</span>
                                    </div>
                                    <div className="col-lg-6  col-sm-5 col-md-5 col-5 border m-2  d-lg-none d-sm-block">
                                        <h3 className='mb-0'>2.2K</h3>
                                        <span>Items</span>
                                    </div>
                                    <div className="col-lg-6  col-sm-5 col-md-5 col-5 border m-2  d-lg-none d-sm-block">
                                        <h3 className='mb-0'>2.2K</h3>
                                        <span>Items</span>
                                    </div>
                                    <div className="col-lg-6  col-sm-5 col-md-5 col-5 border m-2  d-lg-none d-sm-block">
                                        <h3 className='mb-0'>2.2K</h3>
                                        <span>Items</span>
                                    </div>
                                </div>
                                {/* this component is for mobile view -- code off  */}
                            </div>
                            <div className="col-lg-6 col-sm-12 d-none d-lg-block  pe-lg-5">
                                <img className=' img-fluid' src="/assets/images/looneycornsCartoon.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PortfolioTracking