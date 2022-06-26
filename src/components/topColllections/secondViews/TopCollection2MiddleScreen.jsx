import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const TopCollection2MiddleScreen = () => {
    
    const navigate = useNavigate();
    const topCollection = [
        { "id": "1", "image": "/assets/images/rcartoon1.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "2", "image": "/assets/images/rcartoon2.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "3", "image": "/assets/images/rcartoon3.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "4", "image": "/assets/images/rcartoon4.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "5", "image": "/assets/images/rcartoon5.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "6", "image": "/assets/images/rcartoon6.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "7", "image": "/assets/images/rcartoon7.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "8", "image": "/assets/images/rcartoon8.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "9", "image": "/assets/images/rcartoon9.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "10", "image": "/assets/images/rcartoon10.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
  
    ]

    const topCollectionsWeek = [
        { "id": "1", "image": "/assets/images/rcartoon8.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "2", "image": "/assets/images/rcartoon9.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "3", "image": "/assets/images/rcartoon10.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "4", "image": "/assets/images/rcartoon11.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "5", "image": "/assets/images/rcartoon12.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "6", "image": "/assets/images/rcartoon1.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "7", "image": "/assets/images/rcartoon2.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "8", "image": "/assets/images/rcartoon3.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "9", "image": "/assets/images/rcartoon4.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "10", "image": "/assets/images/rcartoon5.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "11", "image": "/assets/images/rcartoon6.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "12", "image": "/assets/images/rcartoon7.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },

    ]
    const topCollectionsMonth = [
        { "id": "1", "image": "/assets/images/rcartoon4.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "2", "image": "/assets/images/rcartoon5.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "3", "image": "/assets/images/rcartoon10.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "4", "image": "/assets/images/rcartoon11.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "5", "image": "/assets/images/rcartoon12.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "6", "image": "/assets/images/rcartoon8.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "7", "image": "/assets/images/rcartoon9.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "8", "image": "/assets/images/rcartoon1.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "9", "image": "/assets/images/rcartoon2.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "10", "image": "/assets/images/rcartoon3.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "11", "image": "/assets/images/rcartoon7.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "12", "image": "/assets/images/rcartoon6.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },


    ]
    const topCollectionssmall = [
        { "image": "/assets/images/rsmall1.png", "name": "Saari.eth" },
        { "image": "/assets/images/rsmall2.png", "name": "Saari.eth" },
        { "image": "/assets/images/rsmall3.png", "name": "Saari.eth" },
        { "image": "/assets/images/rsmall1.png", "name": "Saari.eth" },
        { "image": "/assets/images/rsmall2.png", "name": "Saari.eth" },
        { "image": "/assets/images/rsmall3.png", "name": "Saari.eth" },
        { "image": "/assets/images/rsmall1.png", "name": "Saari.eth" },
        { "image": "/assets/images/rsmall2.png", "name": "Saari.eth" },
        { "image": "/assets/images/rsmall3.png", "name": "Saari.eth" },
    ]
    const [topCollections, setTopCollections] = useState(topCollection)
    const today = () => {
        console.log(today)
        setTopCollections(topCollection)

    }
    const week = () => {
        console.log(week)
        setTopCollections(topCollectionsWeek)

    }
    const month = () => {
        console.log(week)
        setTopCollections(topCollectionsMonth)

    }
    const goToPrice = (e) => {
        e.preventDefault();
        navigate('/smartalert3')
        // navigate('/editcategory')
    }
    const goToMovement = (e) => {
        e.preventDefault();
        navigate('/smartalert4')
        // navigate('/editcategory')
    }

const goToInventory = () => {
    navigate('/inventory')
    // navigate('/editcategory')
}

    return (
        <React.Fragment>
            <div id="topcollection2" className="container-fluid mb-5 mt-5 py-5 bg-white">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        {/* here i have to put image */}
                        <img src="/assets/images/TopCollectionBigImage.png" className="card-img img-fluid   " onClick={goToInventory} alt="..." />
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12 ">
                        <div className="row mt-5">
                            <div className="col-12">
                                <p className='blue-heading'>!denzadol</p>
                                <p className='sub-heading'>denza 557</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                                        <div class="grey-card card py-3 mx-auto" >
                                            <div class="heading d-flex justify-content-between"><span className='ps-3'>Floor Price</span><span className='pe-3'> <img src="/assets/images/focus.png" className="img-fluid   " alt="..." /></span></div>
                                            <div class="card-body text-secondary text-start sub-heading">
                                                <h5 class="card-title">Ξ 0.999</h5>
                                               
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                                        <div class="grey-card card py-3 mx-auto">
                                            <div class="heading d-flex justify-content-between"><span className='ps-3'>Listing price</span><span className='pe-3'> <img src="/assets/images/focus.png" className="img-fluid   " alt="..." /></span></div>
                                            <div class="card-body text-secondary text-start sub-heading">
                                                <h5 class="card-title">Ξ 0.999</h5>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                                        <div class="grey-card card py-3 mx-auto">
                                            <div class="heading d-flex justify-content-between"><span className='ps-3'>Rarity Rank & Score</span><span className='pe-3'> <img src="/assets/images/focus.png" className="img-fluid   " alt="..." /></span></div>
                                            <div class="card-body text-secondary text-start sub-heading">
                                                <h5 class="card-title"><span>Rank</span><span><span>238/1.02K</span></span><span>$890</span></h5>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                                        <div class="grey-card card py-3 mx-auto ">
                                            <div class="heading d-flex justify-content-between"><span className='ps-3'>Average sales price</span><span className='pe-3'> <img src="/assets/images/focus.png" className="img-fluid   " alt="..." /></span></div>
                                            <div class="card-body text-secondary text-start sub-heading">
                                                <h5 class="card-title">+40%</h5>
                                               
                                            </div>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-12 text-start">
                        <h3>Traits</h3>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div class="blue-card card py-3 mx-auto" >
                            <div class="heading ">Background</div>
                            <div class="card-body text-secondary">
                                <h5 class="card-title">Heavan</h5>
                                <p class="card-text footer-details justify-content-center">6% Have This Trait</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div class="blue-card card py-3 mx-auto" >
                            <div class="heading ">Background</div>
                            <div class="card-body text-secondary">
                                <h5 class="card-title">Heavan</h5>
                                <p class="card-text footer-details justify-content-center">6% Have This Trait</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div class="blue-card card py-3 mx-auto " >
                            <div class="heading">Background</div>
                            <div class="card-body text-secondary">
                                <h5 class="card-title">Heavan</h5>
                                <p class="card-text footer-details justify-content-center">6% Have This Trait</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div class="blue-card card py-3 mx-auto" >
                            <div class="heading ">Background</div>
                            <div class="card-body text-secondary">
                                <h5 class="card-title">Heavan</h5>
                                <p class="card-text footer-details justify-content-center">6% Have This Trait</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div class="blue-card card py-3 mx-auto" >
                            <div class="heading ">Background</div>
                            <div class="card-body text-secondary">
                                <h5 class="card-title">Heavan</h5>
                                <p class="card-text footer-details justify-content-center">6% Have This Trait</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div class="blue-card card py-3 mx-auto" >
                            <div class="heading ">Background</div>
                            <div class="card-body text-secondary">
                                <h5 class="card-title">Heavan</h5>
                                <p class="card-text footer-details justify-content-center">6% Have This Trait</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div class="blue-card card py-3 mx-auto" >
                            <div class="heading ">Background</div>
                            <div class="card-body text-secondary">
                                <h5 class="card-title">Heavan</h5>
                                <p class="card-text footer-details justify-content-center">6% Have This Trait</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div class="blue-card card py-3 mx-auto" >
                            <div class="heading ">Background</div>
                            <div class="card-body text-secondary">
                                <h5 class="card-title">Heavan</h5>
                                <p class="card-text footer-details justify-content-center">6% Have This Trait</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div class="blue-card card py-3 mx-auto" >
                            <div class="heading ">Background</div>
                            <div class="card-body text-secondary">
                                <h5 class="card-title">Heavan</h5>
                                <p class="card-text footer-details justify-content-center">6% Have This Trait</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div class="blue-card card py-3 mx-auto" >
                            <div class="heading ">Background</div>
                            <div class="card-body text-secondary">
                                <h5 class="card-title">Heavan</h5>
                                <p class="card-text footer-details justify-content-center">6% Have This Trait</p>
                            </div>
                        </div>
                    </div>


                </div>
                
                {/* <div className="row mb-5 bg-white ">
                    <div className="col-12 mt-5  d-none d-lg-block  mb-5 middle-screen-resize">
                        <div className="row d-flex justify-content-center h-100">
                            <div className="col-6 ">
                                <h2>Loaded Lions Floor Price Alert</h2>
                                <p>Get notified when a collection changes floor price by a specific percentage</p>
                                <div class="d-grid gap-2">
                                    <button class="btn blue-button" type="button" onClick={goToPrice}>Set Target Floor Price</button>
                                    <button class="btn blue-button" type="button" onClick={goToMovement}>Set Target Floor % movement</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div> */}
            </div>
        </React.Fragment >
    )
}

export default TopCollection2MiddleScreen