import React from 'react'

const SupportedNFTS = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row  ">
                    <div className="col-12 d-none d-lg-block">
                        <h1>Supported NFTS</h1>
                    </div>
                    <div className="col-6 d-none d-lg-block">
                    <img className='img-fluid h-50 w-50' src="/assets/images/Crypto-resize.png" alt=""/>
                    </div>
                    <div className="col-6 d-none d-lg-block">
                    <img className='img-fluid h-50 w-50' src="/assets/images/cornos.png" alt="" />
                    </div>
                </div>
                <div className="row d-lg-none d-sm-block  my-5">
                    <div className="col-12">
                        <h1>Supported NFTS</h1>
                    </div>
                    <div className="col-12">
                    <img className='img-fluid h-50 w-50' src="/assets/images/supportedNFTsmall.png" alt=""/>
                    </div>
                   
                </div>
            </div>
        </React.Fragment>
    )
}

export default SupportedNFTS