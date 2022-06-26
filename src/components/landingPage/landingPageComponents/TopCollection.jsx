import React, { useState } from 'react'

const TopCollection = () => {
const [blue,setBlue]= useState(1)
    const topCollection = [
        { "image": "/assets/images/rcartoon1.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon2.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon3.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon4.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon5.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon6.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon7.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon8.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon9.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon10.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon11.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon12.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
    ]

    const topCollectionsWeek = [
        { "image": "/assets/images/rcartoon8.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon9.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon10.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon11.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon12.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon1.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon2.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon3.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon4.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon5.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon6.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon7.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },

    ]
    const topCollectionsMonth = [
        { "image": "/assets/images/rcartoon4.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon5.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon10.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon11.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon12.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon8.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon9.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon1.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon2.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon3.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon7.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },
        { "image": "/assets/images/rcartoon6.png", "name": "Looneycorns", "floor": "2000.4", "floorPer": "6.12", "volume": "38K", "volumePer": "72.68" },


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
    return (

        <React.Fragment>
            <div id="collection" className="container mb-5 mt-5 py-1 ">
                <div className="row mb-5">
                    <div className="col-12">
                        <h1><span className='black-text'>Top</span><span className='blue-text'> Collection</span></h1>
                    </div>
                    <div className="col-6 d-none d-lg-block">
                        <div className="row">
                            <div className="col-3"> <label className='d-inline'>Sort By</label></div>
                            <div className="col-9">
                                <select className="form-select form-select-md w-50" aria-label=".form-select-sm example">
                                    <option defaultValue>Sales Volume</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>


                    </div>
                    <div className="col-6 d-none d-lg-block">
                        <div class="btn-group border p-1 rounded" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="1" checked={blue == 1} onClick={today} />
                            <label class="btn btn-outline-primary" for="btnradio1">Today</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" value="2" checked={blue == 2} onClick={week} />
                            <label class="btn btn-outline-primary" for="btnradio2">Last 7 Days</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" value="3" checked={blue == 3} onClick={month} />
                            <label class="btn btn-outline-primary" for="btnradio3">Last 30 Days</label>
                        </div>
                    </div>
                

                    <div className="col-12 mt-5  d-none d-lg-block p-4 mb-5">
                        <div className="row px-5">
                            {topCollections && topCollections?.map((items, key) => (
                                <div key={key} className="col-lg-4 col-md-6 px-3">
                                    <div className="border-bottom mb-3" >
                                        <div className="row g-0 pb-4">
                                            <div className="col-md-4">
                                                <img src={items.image} className="rounded-start img-fluid" alt="..." />
                                            </div>
                                            <div className="col-md-8 text-start">
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
                    </div>
                    {/* this componet is for mobile screen -- tag on */}
                    <div className="col-12 d-lg-none d-sm-block">
                        <div className="row ">
                            <div className="col-6">Top Collection</div>
                            <div className="col-6">
                                <button className="btn btn-primary ms-1 blue-button  rounded-circle" type="submit"><i className="fa-solid fa-wallet"></i></button>
                                <button className="btn btn-primary ms-1 blue-button  rounded-circle" type="submit"><i className="fa-solid fa-wallet"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 my-5 d-lg-none d-sm-block">
                        <div className="row">
                            {topCollectionssmall && topCollectionssmall?.map((items, key) => (
                                <div key={key} className="col-4 my-2">
                                    <div className="card p-2 " >
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

export default TopCollection