import React from 'react'


import Collections from './Collections'


const SubLayout = () => {
  return (
    <div className="container-fluid grey-background">
        <div className="row">

            <div className="col-12">
          <Collections/>
            </div>
            {/* <div className="col-4">
             <LeftSidebar/>
            </div> */}
        </div>
    </div>
  )
}

export default SubLayout