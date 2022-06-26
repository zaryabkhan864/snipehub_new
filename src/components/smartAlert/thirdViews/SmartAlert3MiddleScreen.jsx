import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const SmartAlert3MiddleScreen = () => {
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

    }
    const week = () => {
        console.log(week)
        setTopCollections(topCollectionsWeek)

    }
    const month = () => {
        console.log(week)
        setTopCollections(topCollectionsMonth)

    }
    const goToPrice = (value) => {
        navigate('/smartalert2', { state: { value } })
        // navigate('/editcategory')
    }
    const goToMovement = (value) => {
        navigate('/smartalert2', { state: { value } })
        // navigate('/editcategory')
    }

    return (
        <React.Fragment>
            <div id="smart-alert-collection3" className="container-fluid mb-5 mt-5 py-1 ">
                <div className="row mb-5 bg-white d-flex justify-content-center">
                    <div className="col-12 mt-5   mb-5 middle-screen-resize">
                        <div className="row d-flex justify-content-center h-100">
                            <div className="col-lg-8 col-md-10 col-sm-10 col-11">
                                <h2>Set Target Price Alert Loaded Lions $200</h2>
                                <div className='px-lg-2 px-md-2 px-sm-0 px-0'>
                                <p className='px-lg-5 px-md-2 px-sm-0 px-0'>Get notified when a collection changes floor price by a specific percentage</p>
                                </div>
                                <div className=' box pt-4 mx-auto'>
                                <h5>Floor Price</h5>
                                <input class="form-control mx-auto mb-4" type="text" placeholder="$ 150" aria-label="default input example"></input>
                                
                                <button class="btn blue-button" type="button" >Set Target Floor Price</button>
                               
                                </div>
                              
                          
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment >
    )
}

export default SmartAlert3MiddleScreen