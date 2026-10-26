import React from 'react'

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search" />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": 100 + 'px' }}>
                        <div className='bell'>
                        <img src="/assets/images/bell.png" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className='bell ms-3'>
                        <img src="/assets/images/wallet.png" class="img-fluid rounded-start" alt="..." />
                        </div>
                    
                        {/* <i className="fa-solid fa-wallet "></i> */}

                        <div className="d-flex text-dark ms-3">
                            <div className='me-2' style={{"cursor":"pointer"}}>
                                <img src="/assets/images/profile_image.png" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className='text-start'>
                                <div>Anddy's Makeover</div>
                                <div>ID: 1234567</div>
                            </div>
                        </div>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" />


                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarScrollingDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                    </ul>


                </div>
            </div>
        </nav>
        // <div id="mynav" class="dashboard-header">
        //             <nav class="navbar navbar-expand-lg bg-white ">

        //                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                     <span class="navbar-toggler-icon"></span>
        //                 </button>
        //                 <div class="collapse navbar-collapse " id="navbarSupportedContent">
        //                     <ul class="navbar-nav ml-auto navbar-right-top">
        //                         <li class="nav-item ">
        //                             <div id="custom-search" class="top-search-bar">
        //                                 <input class="form-control" type="text" placeholder="Search.."/>
        //                             </div>
        //                         </li>
        //                         <li class="nav-item dropdown notification">
        //                             <a class="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-fw fa-bell"></i> <span class="indicator"></span></a>
        //                             <ul class="dropdown-menu dropdown-menu-right notification-dropdown">
        //                                 <li>
        //                                     <div class="notification-title"> Notification</div>
        //                                     <div class="notification-list">
        //                                         <div class="list-group">
        //                                             <a href="#" class="list-group-item list-group-item-action active">
        //                                                 <div class="notification-info">
        //                                                     <div class="notification-list-user-img">
        //                                                         <img src="https://img.icons8.com/office/100/000000/administrator-female.png" alt="" class="user-avatar-md rounded-circle"/></div>
        //                                                     <div class="notification-list-user-block"><span class="notification-list-user-name">Jeremy Hukonah</span>accepted your invitation to join the team.
        //                                                         <div class="notification-date">2 min ago</div>
        //                                                     </div>
        //                                                 </div>
        //                                             </a>
        //                                             <a href="#" class="list-group-item list-group-item-action">
        //                                                 <div class="notification-info">
        //                                                     <div class="notification-list-user-img">
        //                                                         <img src="https://img.icons8.com/color/48/000000/administrator-female.png" alt="" class="user-avatar-md rounded-circle"/></div>
        //                                                     <div class="notification-list-user-block"><span class="notification-list-user-name">John Sammy</span>updated the email address
        //                                                         <div class="notification-date">2 days ago</div>
        //                                                     </div>
        //                                                 </div>
        //                                             </a>
        //                                             <a href="#" class="list-group-item list-group-item-action">
        //                                                 <div class="notification-info">
        //                                                     <div class="notification-list-user-img">
        //                                                         <img src="https://img.icons8.com/color/100/000000/name.png" alt="" class="user-avatar-md rounded-circle"/></div>
        //                                                     <div class="notification-list-user-block"><span class="notification-list-user-name">Kioh Samso</span> is watching your main repository
        //                                                         <div class="notification-date">2 min ago</div>
        //                                                     </div>
        //                                                 </div>
        //                                             </a>

        //                                         </div>
        //                                     </div>
        //                                 </li>
        //                                 <li>
        //                                     <div class="list-footer"> <a href="#">View all notifications</a></div>
        //                                 </li>
        //                             </ul>
        //                         </li>
        //                         <li class="nav-item dropdown connection">
        //                             <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fas fa-fw fa-th"></i> </a>
        //                             <ul class="dropdown-menu dropdown-menu-right connection-dropdown">
        //                                 <li class="connection-list">
        //                                     <div class="row">
        //                                         <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                             <a href="#" class="connection-item">
        //                                                 <img src="https://img.icons8.com/nolan/100/000000/github.png" alt="" /> <span>Github</span></a>
        //                                         </div>
        //                                         <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                             <a href="#" class="connection-item">
        //                                                 <img src="https://img.icons8.com/color/100/000000/dribbble.png" alt="" /> <span>Dribbble</span></a>
        //                                         </div>
        //                                         <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                             <a href="#" class="connection-item">
        //                                                 <img src="https://img.icons8.com/color/100/000000/dropbox.png" alt="" /> <span>Dropbox</span></a>
        //                                         </div>
        //                                     </div>
        //                                     <div class="row">
        //                                         <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                             <a href="#" class="connection-item">
        //                                                 <img src="https://img.icons8.com/color/100/000000/bitbucket.png" alt=""/> <span>Bitbucket</span></a>
        //                                         </div>
        //                                         <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                             <a href="#" class="connection-item">
        //                                                 <img src="https://img.icons8.com/color/100/000000/remove-ads.png" alt="" /><span>Facebook ads</span></a>
        //                                         </div>
        //                                         <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
        //                                             <a href="#" class="connection-item">
        //                                                 <img src="https://img.icons8.com/wired/64/000000/slack.png" alt="" /> <span>Slack</span></a>
        //                                         </div>
        //                                     </div>
        //                                 </li>
        //                                 <li>
        //                                     <div class="conntection-footer"><a href="#">More</a></div>
        //                                 </li>
        //                             </ul>
        //                         </li>
        //                         <li class="nav-item dropdown nav-user d-flex">
        //                             <a class="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                                 <img src="/assets/images/profile_image.png" alt="" class="user-avatar-md rounded-circle"/></a>
        //                                 <div>
        //                                 <p>zaryab</p>
        //                                 <p>zaryab</p>
        //                                 </div>

        //                             <div class="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
        //                                 <div class="nav-user-info">
        //                                     <h5 class="mb-0 text-white nav-user-name">Tikoha Samga</h5>
        //                                     <span class="status"></span><span class="ml-2">Available</span>
        //                                 </div>
        //                                 <a class="dropdown-item" href="#"><i class="fas fa-user mr-2"></i>Account</a>
        //                                 <a class="dropdown-item" href="#"><i class="fas fa-cog mr-2"></i>Setting</a>
        //                                 <a class="dropdown-item" href="#"><i class="fas fa-power-off mr-2"></i>Logout</a>
        //                             </div>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </nav>
        //         </div>

    )
}

export default Navbar