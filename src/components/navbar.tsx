import React, { useEffect, useState } from "react";
import { navLinks, social } from "../constants";
import { Link } from "react-router-dom";
import {logo} from "../assets"
import { styles } from "../styles";
import Menu from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
export default function Navbar() {
  const [active, setActive] = useState<string>("")
  const [toggle, setToggle] = useState<Boolean>(false)
  const [scrolled, setScrolled] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`${styles.paddingX} w-full item-center py-5 fixed top-0 z-20  ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}>
       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className="flex items-center gap-2" >
          <img src={logo} alt="logo" className="w-8 h-8 object-contain"/>
          <p className="text-white text-[16px] font-bold cursor-pointer flex">Harsh Goyal &nbsp;
            <span className="sm:block hidden"> |  React Developer</span>
          </p>
        </Link>
        {/* Social icons */}
        <ul className="list-none flex justify-between mx-5 items-center gap-0 lg:gap-10">
          {social.map((socialIcon) => {
            const { id, url, icon: Icon, colorClass } = socialIcon; // Destructure the icon and colorClass
            return (
              <li
                className="social-list transform hover:scale-110 hover:shadow-lg transition-transform"
                key={id}
              >
                <a href={url} style={{ textDecoration: 'none' }}>
                <IconButton>
            <div className={`group ${colorClass} hover:${colorClass} transform scale-110 shadow-lg`}>
              <Icon />
            </div>
          </IconButton>
                </a>
              </li>
            );
          })}
        </ul>
        {/* Navbar Items */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          {/* mui icon */}
          {toggle?(<Menu onClick={() => setToggle(!toggle)}/>):(<Close onClick={() => setToggle(!toggle)}/>)}
          
          <div className={`${toggle ? "hidden":"flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

            {/* dropdown menu */}
            <ul className="list-none flex justify-end items-center flex-1 flex-col gap-4 ">
              {navLinks.map((nav)=>(

                <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
                >
                <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
                ))}
            </ul>
          </div>
        </div>

       </div>
    </div>
  )
}
