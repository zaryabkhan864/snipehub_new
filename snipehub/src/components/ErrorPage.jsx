import React from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

  const navigate = useNavigate();
  const goToHome = () =>{
navigate('/')
  }
  return (
<div id="banner" className="container mt-5">
    <div className="row mt-5">
        <div className="col-12 mt-5">
        <img className='w-50 h-50' src="/assets/images/SnipeHub.png" alt="" />

        </div>
        <div className="col-12 ">
   
        <img src="/assets/images/rcartoon5.png" class="rounded-start img-fluid" alt="..."/>
        <h1>404 Page not found</h1>
        <button className='btn  blue-button text-white px-lg-5 px-sm-0  ' onClick={goToHome}>Go to Home<i className="ps-2 fa-solid fa-arrow-right-long"></i></button>
        </div>
        
    </div>
</div>
  )
}

export default ErrorPage