import React from 'react'

const MarketOverview = () => {
    return (
        <React.Fragment>
            <div id="market" className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <h1><span className='black-text'>Market</span><span className='blue-text'> Overview</span></h1>
                    </div>
                    <div className="col-12">
                    <img className='img-fluid h-lg-75 w-lg-75 w-sm-100 h-sm-100' src="/assets/images/graph.png" alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MarketOverview