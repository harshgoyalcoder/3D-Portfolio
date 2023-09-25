import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

import { Link } from "react-router-dom";
import {logo} from "../assets"
import { styles } from "../styles";

export default function Navbar() {
  const [active, setActive] = useState<string>("")
  const [toggle, setToggle] = useState<Boolean>(false)
  const [scrolled, setScrolled] = useState<Boolean>(false);
  return (
    <nav className={`${styles.paddingX} w-full item-center py-5 fixed top-0 z-20 `}>
       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className="flex items-center gap-2" >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Harsh Goyal &nbsp;
            <span className="sm:block hidden"> |  React Developer</span>
          </p>
        </Link>
        {/* Social icons */}
        {/* <ul className="list-none flex gap-5">
          <li>Insta</li>
          <li>Insta</li>
          <li>Insta</li>
        </ul> */}
        {/* Navbar Items */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          {/* mui icon */}
          <div className={`${toggle ? "hidden":"flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

            {/* dropdown menu */}
            <ul className="list-none flex justify-end items-center flex-1 flex-col gap-4 ">
              {navLinks.map((nav)=>(

                <li className={`font-poppins font-medium cursor-pointer text-[16px] ${active===navigator.title? "text-white" :"text-secondary"}` onclick={()=>{
                  setToggle(!toggle);
                  setActive(nav.title);
                }}}>

                </li>
                ))}
            </ul>
          </div>
        </div>

       </div>
    </nav>
  )
}
