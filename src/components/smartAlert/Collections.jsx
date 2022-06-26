import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Collections = () => {
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
    const goToNextPage = (value) => {
        navigate('/smartalert2', { state: { value } })
        // navigate('/editcategory')
    }
    return (
        <React.Fragment>
            <div id="smart-alert-collection" className="container my-3 py-1 ">
                <div className="row mb-5 pt-lg-0 pt-md-5 pt-sm-5 pt-5">

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-start mt-lg-0 mt-sm-5">
                        <h3>Select NFT Collection</h3>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-lg-content-end justify-md-content-start justify-sm-content-start">
                        <div class="form-group has-search custom-search-bar">
                            <span class="fa fa-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                    </div>
                    <div className="col-12 mt-3 d-none d-lg-block  mb-5">
                        <div className="row d-flex justify-content-center">
                            {topCollections && topCollections?.map((items, key) => (
                                <div key={key} className="col-lg-6 col-md-6  " value={items.id} onClick={(e) => { goToNextPage(e.target.value) }}>
                                    <div className="border-bottom mb-3  bg-light rounded p-3 custom-card" >
                                        <div className="row g-0 ">
                                            <div className="col-md-4 custom-image">
                                                <img src={items.image} className="rounded-start img-fluid" alt="..." />
                                            </div>
                                            <div className="col-md-8 text-start p-lg-2">
                                                <div className="card-body pt-md-0 pt-sm-0 pt-0">
                                                    <h3 className="card-title fw-bold custom-heading">{items.name}</h3>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-inline fw-bold'>Floor: ${items.floor}</div>
                                                        <div className='d-inline text-success'>{items.floorPer}%</div>
                                                    </div>

                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-inline '>volume:{items.volume}</div>
                                                        <div className='d-inline text-danger'>{items.volumePer}%</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    {/* <div className="col-12 mt-3 d-none d-lg-block  mb-5">
                        <div className="row d-flex justify-content-center">
                            {topCollections && topCollections?.map((items, key) => (
                                <div key={key} className="col-lg-6 col-md-6  " value={items.id} onClick={(e) => { goToNextPage(e.target.value) }}>
                                    <div className="border-bottom mb-3  bg-light rounded p-3 custom-card" >
                                        <div className="row g-0 ">
                                            <div className="col-md-4 custom-image">
                                                <img src={items.image} className="rounded-start img-fluid" alt="..." />
                                            </div>
                                            <div className="col-md-8 text-start p-lg-2">
                                                <div className="card-body pt-md-0 pt-sm-0 pt-0">
                                                    <h3 className="card-title fw-bold custom-heading">{items.name}</h3>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-inline fw-bold'>Floor: ${items.floor}</div>
                                                        <div className='d-inline text-success'>{items.floorPer}%</div>
                                                    </div>

                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-inline '>volume:{items.volume}</div>
                                                        <div className='d-inline text-danger'>{items.volumePer}%</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div> */}
                    {/* pagination */}
                    <div className="col-12 d-none d-lg-block ">

                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true" style={{ "border": "none" }}>Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" style={{ "border": "none" }}>Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* this componet is for mobile screen -- tag on */}
                    {/* <div className="col-12 d-lg-none d-sm-block">
                        <div className="row ">
                            <div className="col-6">Top Collection</div>
                            <div className="col-6">
                                <button className="btn btn-primary ms-1 blue-button  rounded-circle" type="submit"><i className="fa-solid fa-wallet"></i></button>
                                <button className="btn btn-primary ms-1 blue-button  rounded-circle" type="submit"><i className="fa-solid fa-wallet"></i></button>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-12 my-5 d-lg-none d-sm-block">
                      
                            <div className="row">
                            {topCollectionssmall && topCollectionssmall?.map((items, key) => (
                                <div key={key} className="col-4 my-2">
                                    <div className="card p-2 " onClick={(e) => { goToNextPage(e.target.value) }} >
                                        <img src={items.image} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body p-0">
                                            <p className="card-text">{items.name}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}
                            </div>
                       
                    </div>
                    {/* this componet is for mobile screen -- tag off */}
                </div>
            </div>
        </React.Fragment >
    )
}

export default Collections