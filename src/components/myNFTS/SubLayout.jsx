import React from 'react'
import TopCollection from '../landingPage/landingPageComponents/TopCollection'

import Collections from './Collections'
import LeftSidebar from './LeftSidebar'

const SubLayout = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-8">
          <Collections/>
            </div>
            <div className="col-4">
             <LeftSidebar/>
            </div>
        </div>
    </div>
  )
}

export default SubLayout