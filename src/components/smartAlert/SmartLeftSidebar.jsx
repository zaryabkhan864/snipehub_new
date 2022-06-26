import React, { useState } from 'react'

const SmartLeftSidebar = () => {
    const topCollection = [
        { "image": "/assets/images/Pektguy.png", "name": "Pektguy", "Artist": "NFT Artist", "floorPer": "254", "date": "Today at 12:00 PM" },
        { "image": "/assets/images/Pektguy.png", "name": "Pektguy", "Artist": "NFT Artist", "floorPer": "254", "date": "5-29-2022, 7:28 AM" },
        { "image": "/assets/images/Pektguy.png", "name": "Pektguy", "Artist": "NFT Artist", "floorPer": "254", "date": "5-29-2022, 7:28 AM" },
        { "image": "/assets/images/Pektguy.png", "name": "Pektguy", "Artist": "NFT Artist", "floorPer": "254", "date": "5-29-2022, 7:28 AM" },
        { "image": "/assets/images/Pektguy.png", "name": "Pektguy", "Artist": "NFT Artist", "floorPer": "254", "date": "5-29-2022, 7:28 AM" },
        { "image": "/assets/images/Pektguy.png", "name": "Pektguy", "Artist": "NFT Artist", "floorPer": "254", "date": "5-29-2022, 7:28 AM" },
        { "image": "/assets/images/Pektguy.png", "name": "Pektguy", "Artist": "NFT Artist", "floorPer": "254", "date": "5-29-2022, 7:28 AM" },
        { "image": "/assets/images/Pektguy.png", "name": "Pektguy", "Artist": "NFT Artist", "floorPer": "254", "date": "5-29-2022, 7:28 AM" },
        { "image": "/assets/images/Pektguy.png", "name": "Pektguy", "Artist": "NFT Artist", "floorPer": "254", "date": "5-29-2022, 7:28 AM" },
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
    return (
        <React.Fragment>
            <div id="left-sidebar" className="containe-fluid pe-3 ">
                <div className="row py-4 pe-3 custom-container">



                    <div className="col-12 mt-3  d-none d-lg-block  mb-5 bg-white" style={{"border-radius": 10+'px'}}>
                        <div className="row mt-4">
                            <div className="col-12 text-start">
                                <h3>Alerts</h3>
                            </div>
                        </div>
                        <div className="row px-3 pb-2">
                            {topCollection && topCollection?.map((items, key) => (
                                <div className='d-flex my-1 custom-card'>
                                    <div>
                                        <img src={items.image} className="rounded-start img-fluid w-100" style={{"cursor":"pointer"}} alt="..." />
                                    </div>

                                    <div className=' mx-auto text-start ms-md-2 ms-sm-2 ms-1'>
                                        <h3 className='card-heading'>{items.name}</h3>
                                        <p className='sub-heading'>{items.Artist}</p>
                                        <p className='sub-heading'>{items.date}</p>
                                    </div>
                                    <div>
                                        <div className='text-end h-25 mb-2'  >

                                        <img src="/assets/images/cross.png" className="img-fluid" alt="..." />
                                        </div>
                                        {/* <div className='border rounded-3 h-75 w-100 '>
                                            <div className='mb-2 px-4'>${items.floorPer}-</div>
                                            <div className=''>
                                                <button className='w-100  rounded-top orange-button'>^</button>
                                            </div>
                                        </div> */}
                                        <div className='orange-box'>
                                            <div className='orange-text'>${items.floorPer}-</div>
                                            <div className='orange-button'>^</div>
                                        </div>
                                    </div>


                                </div>

                                // <div key={key} className="col-lg-12 col-md-12 px-3">
                                //     <div className="border mb-3" >
                                //         <div className="row g-0 pb-4">
                                //             <div className="col-md-4">
                                //                 <img src={items.image} className="rounded-start img-fluid w-50" alt="..." />
                                //             </div>
                                //             <div className="col-md-8 text-start leftsidebar-column">

                                //                     <h3 className="card-title fw-bold">{items.name}</h3>
                                //                     <div className='d-flex'>
                                //                     <div >
                                //                             <p>{items.Artist}</p>
                                //                             <p>{items.date}</p>
                                //                         </div>
                                //                         <div className=''>
                                //                         {items.floorPer}
                                //                         </div>
                                //                     </div>

                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>
                            ))}

                        </div>
                    </div>

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

                </div>
            </div>
        </React.Fragment >
    )
}

export default SmartLeftSidebar