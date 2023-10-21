import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./utils/links";
import ToggleButton from "./utils/toggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="flex items-center justify-center flex-col bg-white text-black" 
       animate={open ? "open" : "closed"}>
      <motion.div className="fixed bg-white z-[999] w-[200px] sm:w-[400px] top-0 left-0 bottom-0" variants={variants}>
        <Links setOpen={setOpen}/>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
