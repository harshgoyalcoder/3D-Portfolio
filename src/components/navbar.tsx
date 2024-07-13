import { navLinks, social } from "../constants";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [active, setActive] = useState<string>("");

  return (
    <div className={` h-4`}>
      <Sidebar />
      <div className="max-w-screen-xl my-8 mx-auto flex items-center justify-between h-full">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-[20px] font-bold cursor-pointer  sm:block hidden"
        >
          Harsh Goyal &nbsp;
          <span> | Full Stack Developer</span>
        </motion.span>

        {/* Navbar Items */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav: any) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[22px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        {/* Social icons */}
        <div className="flex"></div>
        <ul className="list-none flex justify-between mx-5 items-center gap-0 lg:gap-5">
          {social.map((socialIcon) => {
            const { id, url, icon: Icon, colorClass } = socialIcon; // Destructure the icon and colorClass
            return (
              <li
                className="social-list transform hover:scale-110 hover:shadow-lg transition-transform"
                key={id}
              >
                <a href={url} style={{ textDecoration: "none" }}>
                  <IconButton>
                    <div
                      className={`group ${colorClass} hover:${colorClass} transform scale-110 shadow-lg`}
                    >
                      <Icon />
                    </div>
                  </IconButton>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
