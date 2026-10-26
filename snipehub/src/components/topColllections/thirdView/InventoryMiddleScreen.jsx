import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const InventoryMiddleScreen = () => {

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
            <div id="inventory" className="container-fluid mb-5 mt-5 py-5 bg-white">
                <div className="row">
                    <div className="col-12 big-image mb-5">
                        <div>
                            <img src="/assets/images/inventorybigimage.png" className=" img-fluid" alt="..." />
                        </div>
                        <div className='small-image'>
                            <img src="/assets/images/inventoryroundimage.png" className=" img-fluid" alt="..." />
                        </div>


                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-12"><h3>Rare Land NFT</h3></div>
                    <div className="col-12"><span>Welcome to Rare Land. Rare Land NFTs are the gateway to unlock our music game with 100+ songs and battle</span></div>
                    <div className="col-12"><h3>Traits</h3></div>


                </div>
                <div className="row">
                    {topCollectionssmall && topCollectionssmall?.map((items, key) => (
                        <div key={key} className="col-lg-3 col-md-4 col-sm-4 col-6 my-2">
                            <div className="card p-2 " >
                                <img src={items.image} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body p-0">
                                    <p className="card-text">{items.name}</p>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
                <div className="row">
                    <div className="col-12 d-none d-lg-block ">

                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true" style={{ "border": "none" }}>Previous</a>
                                </li>
                                <li class="page-item "><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" style={{ "border": "none" }}>Next</a>
                                </li>
                            </ul>
                        </nav>
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

export default InventoryMiddleScreen