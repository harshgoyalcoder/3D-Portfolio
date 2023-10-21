import {  social } from "../constants";
// import { Link } from "react-router-dom";
// import {logo} from "../assets"
// import { styles } from "../styles";
// import Menu from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
// import { Close } from "@mui/icons-material";
import Sidebar from "./sidebar";
export default function Navbar() {
  // const [active, setActive] = useState<string>("")
  // const [toggle, setToggle] = useState<Boolean>(false)
  // const [scrolled, setScrolled] = useState<Boolean>(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (

    <div className={` h-4`}>
        <Sidebar/>
    <div className="max-w-screen-xl my-8 mx-auto flex items-center justify-between h-full">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-[16px] font-bold cursor-pointer flex sm:block hidden"
        >
            Harsh Goyal &nbsp;
            <span> |  React Developer</span>        
            </motion.span>
          
        {/* Navbar Items */}
        {/* <ul className='list-none hidden sm:flex flex-row gap-10'>
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
        </ul> */}
        {/* Social icons */}
        <div className="flex">

        </div>
        <ul className="list-none flex justify-between mx-5 items-center gap-0 lg:gap-5">
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
        {/* <div className="sm:hidden flex flex-1 justify-end items-center "> */}
          {/* mui icon */}
          {/* {toggle?(<Menu onClick={() => setToggle(!toggle)}/>):(<Close onClick={() => setToggle(!toggle)}/>)}
          
          <div className={`${toggle ? "hidden":"flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

            {/* dropdown menu */}
            {/* <ul className="list-none flex justify-end items-center flex-1 flex-col gap-4 ">
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
            </ul> */}
          {/* </div>  */}
        {/* </div> */}

       </div>

    </div>
  )
}
