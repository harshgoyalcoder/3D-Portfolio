import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }:any) => {
  const items = ["Homepage", "Work Experience", "Portfolio","Skills", "Contact"];

  return (
    <motion.div className="absolute w-full h-full flex flex-col items-center justify-center gap-10" variants={variants}>
      {items.map((item) => (
        <motion.a 
        className="text-lg sm:text-2xl"
        onClick={() => setOpen((prev:any) => !prev)}
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={setOpen((prev:any) => !prev) }
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
