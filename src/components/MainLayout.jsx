import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/Sidebar'

import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import SmartLeftSidebar from './smartAlert/SmartLeftSidebar'


const MainLayout = () => {
  return (
    <React.Fragment>
    {/* <div style={{display:'flex',flexDirection:'row'}}>
        <SideBar /> 
        <div>
            <Outlet />
        </div>
   </div> */}
   <div className="layout">
     <div className='d-none d-lg-block '>
     <SideBar /> 
     </div>
     <div>
       <div className='d-none d-lg-block'>
         <Navbar/>
       </div>
       <div className='d-lg-none d-sm-block'>
         <NavbarMobile/>
       </div>
       <div style={{display:'flex',flexDirection:'row'}}>
         <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
           <Outlet/>
         </div>
         <div className='col-3 d-none d-lg-block grey-bg'>
           <SmartLeftSidebar/>
         </div>
       </div>
     </div>
   </div>

    </React.Fragment>
  )
}

export default MainLayout