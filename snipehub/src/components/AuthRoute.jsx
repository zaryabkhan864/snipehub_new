import React from 'react'
// import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '../components/landingPage/LandingPage';

import MarketOverview from './landingPage/landingPageComponents/MarketOverview';
import TopCollection from './landingPage/landingPageComponents/TopCollection';
import MainLayout from './MainLayout';
import MyNftCollections from './myNFTS/MyNftCollections';
import SmartAlert4 from './smartAlert/fourthViews/SmartAlert4';
import SmartAlert2 from './smartAlert/secondViews/SmartAlert2';
import FirstView from './smartAlert/secondViews/SmartAlert2';

import SmartCollections from './smartAlert/SmartCollections';
import DashboardCollections from './watchlist/dashboard/DashboardCollections';
import TopCollections from './topColllections/TopCollections';
import SmartAlert3 from './smartAlert/thirdViews/SmartAlert3';
import TopCollection2 from './topColllections/secondViews/TopCollection2';
// import WatchListCollections from './watchlist/WatchListCollections';
// import DashboardCollections from './watchlist/dashboard/DashboardCollections';
import Inventory from './topColllections/thirdView/Inventory';
import WatchListCollections from './watchlist/WatchListCollections';
import Dashboard from './dashboard/Dashboard';
import ErrorPage from './ErrorPage';
import Inventory2 from './topColllections/thirdView/Inventory2';


const AuthRoute = () => {
    // const { isAuthenticated } = useSelector(state => state.auth);
    const isAuthenticated  = '12345'
    const CheckAuthetication = ({ children }) => {
      // alert(authenticated);
      if(isAuthenticated){
    //   if (localStorage.getItem('TOKEN') ) {
        
        return children
  
      } else {
        return <Navigate to='login' replace />
      }
    }
    return (
        <div>
            <div className="App">
                <Routes>



                    <Route exact path='home' element={<LandingPage />} />
                    {/* <Route exact path='login' element={<Login />} /> */}
                    <Route path='/' element={
                        <CheckAuthetication>
                        <MainLayout />
                        </CheckAuthetication>
                    }>
                        <Route index  element={<Dashboard />} />
                        
                        <Route path='nft' element={<MyNftCollections/>} />
                        <Route path='smartalert' element={<SmartCollections/>} />
                        <Route  path='smartalert2' element={<SmartAlert2/>} />
                        <Route  path='smartalert3' element={<SmartAlert3/>} />
                        <Route  path='smartalert4' element={<SmartAlert4/>} />

                        <Route path='topcollections' element={<TopCollections/>} />
                        <Route  path='topcollection2' element={<TopCollection2/>} />

                        <Route path='watchlist' element={<WatchListCollections/>} />
                        <Route path='addcollection' element={<DashboardCollections/>} />
                        <Route path='inventory' element={<Inventory2/>} />
                        {/* <Route path='inventory' element={<Inventory/>} /> */}
              
                    </Route>
                    <Route path='*' element={<ErrorPage/>} />
                    {/* <Route path='*' element={<div><p>ERROR PAGE</p></div>} /> */}

                </Routes>
            </div>
        </div>
    )
}

export default AuthRoute