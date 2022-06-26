import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Collections = () => {
    const [blue, setBlue] = useState(1)
    const [check, setCheck] = useState(1)
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
        { "id": "11", "image": "/assets/images/rcartoon11.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "id": "12", "image": "/assets/images/rcartoon12.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
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
        setBlue(1)

    }
    const week = () => {
        console.log(week)
        setTopCollections(topCollectionsWeek)
        setBlue(2)
    }
    const month = () => {
        console.log(week)
        setTopCollections(topCollectionsMonth)
        setBlue(3)
    }
    const check1 = () => {
        console.log(today)
        setTopCollections(topCollection)
        setCheck(1)

    }
    const check2 = () => {
        console.log(week)
        setTopCollections(topCollectionsWeek)
        setCheck(2)
    }
    const check3 = () => {
        console.log(week)
        setTopCollections(topCollectionsMonth)
        setCheck(3)
    }
    const goToNextPage = (value) => {
        navigate('/topcollection2', { state: { value } })
        // navigate('/editcategory')
    }
    return (
        <React.Fragment>
    <div id="smart-alert-collection" className="container top-collection-container ">
                <div className="row mb-5">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-start mt-lg-0 mt-sm-5">
                <h3>Top Collection</h3>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12 d-flex justify-lg-content-end justify-md-content-start justify-sm-content-start toggle-div">
                    <div class="btn-group border p-1 rounded  bule-toggle-button" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="1" checked={blue == 1} onClick={today} />
                            <label class="btn btn-outline-primary" for="btnradio1">Today</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" value="2" checked={blue == 2} onClick={week} />
                            <label class="btn btn-outline-primary" for="btnradio2">Last 7 Days</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" value="3" checked={blue == 3} onClick={month} />
                            <label class="btn btn-outline-primary" for="btnradio3">Last 30 Days</label>
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
                                            <div className="col-md-8 text-start">
                                                <div className="card-body">
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
                    {/* <div className="col-12 mt-5  d-none d-lg-block  mb-5">
                        <div className="row d-flex justify-content-center ">
                            {topCollections && topCollections?.map((items, key) => (
                                <div key={key} className="col-lg-6 col-md-6  " value={items.id} >
                                    <div className="border-bottom mb-3  bg-light rounded p-3" >
                                        <div className="row g-0 " >
                                            <div className="col-md-4 " onClick={(e) => { goToNextPage(e.target.value) }}  >
                                                <img src={items.image} className="rounded-start img-fluid" alt="..." />
                                            </div>
                                            <div className="col-md-8 text-start" onClick={(e) => { goToNextPage(e.target.value) }}>
                                                <div className="card-body">
                                                    <h3 className="card-title fw-bold">{items.name}</h3>
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
                    <div className="col-12 d-none d-lg-block">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item"  active={check == 1}><a class="page-link" href="#"  >1</a></li>
                                <li class="page-item" active={check == 2}><a class="page-link" href="#"  >2</a></li>
                                <li class="page-item" active={check == 3}><a class="page-link" href="#"  onClick={check3}>3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
            


                    <div className="col-12 my-5 d-lg-none d-sm-block">
                        <div className="row">
                            {topCollectionssmall && topCollectionssmall?.map((items, key) => (
                                <div key={key} className="col-4 my-2" >
                                    <div className="card p-2 " value={items.id} onClick={(e) => { goToNextPage(e.target.value) }} >
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