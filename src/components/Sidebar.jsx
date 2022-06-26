import React from 'react'
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { TbBellRinging } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { MdMessage } from "react-icons/md";
import { BiSupport, BiSearch } from "react-icons/bi";
import { BsCollectionFill } from "react-icons/bs";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { IoIosSettings} from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import{FiLogOut} from "react-icons/fi"
import { AnimatePresence, motion } from "framer-motion";
const routes = [
  {
    path: "/",
    name: "My NFTs",
    icon: <FaHome />,

  },
  {
    path: "/smartalert",
    name: "Smart Alerts",
    icon: <TbBellRinging />,
  },
  {
    path: "/topcollections",
    name: "Top Collections",
    icon: <BsCollectionFill />,
  },
  {
    path: "/marketoverview",
    name: "Market Overview",
    icon: <VscGraph />,
  },
  {
    path: "/stakingcompare",
    name: "Staking Compare",
    icon: <AiTwotoneFileExclamation />,
  },

];
const bottomRoutes = [
  {
    path: "/setting",
    name: "Settings",
    icon: <IoIosSettings />,

  },
  {
    path: "/watch2",
    name: "Support",
    icon: <BiSupport />,
  },
  {
    path: "/home",
    name: "Logout",
    icon: <FiLogOut />,
  },


];
const watclist = [
  {
    path: "/watchlist",
    name: "Watchlist ",
    icon: <AiOutlineRight />,

  },


];
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,

    },
    show: {
      width: "140px",
      padding: "5px 15px",

    },
  };
  return (

    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "45px",

        }}
        className={`sidebar `}
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1


                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                <img src="/assets/images/SnipeHub.png" class="img-fluid rounded-start" alt="..." />
              </motion.h1>
            )}
          </AnimatePresence>


        </div>

        <section className="routes">
          {routes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                key={index}
                className="link"
                activeclassname="active"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div

                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
        <hr/>
        

        <section >
          <div >
          {watclist.map((route, index) => {
                return (
            
   
                 <NavLink
                to={route.path}
                key={index}
                className="link"
                activeclassname="active"
              >
         
                <AnimatePresence>
                  {isOpen && (
                    <motion.div

                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="icon ms-auto">{route.icon}</div>
              </NavLink>
                
                   
               

                );
              })}
          
           
          </div>
        </section>
        
        <section className="bottom-routes">
          
          {bottomRoutes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                key={index}
                className="link"
                activeclassname="active"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div

                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}

        
        </section>
      </motion.div>

      <main>{children}</main>
    </div>
  )
}

export default Sidebar