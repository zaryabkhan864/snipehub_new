import React from 'react'

import SmartAlert3MiddleScreen from './SmartAlert3MiddleScreen'


const SmartAlert3SubLayout = () => {
  return (
    <div className="container-fluid grey-background">
        <div className="row">

            <div className="col-12">
          <SmartAlert3MiddleScreen/>
            </div>
            {/* <div className="col-4">
             <SmartAlert3SmartLeftSidebar/>
            </div> */}
        </div>
    </div>
  )
}

export default SmartAlert3SubLayout