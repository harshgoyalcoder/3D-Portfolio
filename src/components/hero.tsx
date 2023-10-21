import { styles } from "../styles";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

export default function Hero() {
  return (
    <div className="mt-10 lg:mt-20   h-[calc(100vh-50px)] p-12 sm:p-4 flex justify-between overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132] relative">
      <div className="max-w-screen-xl h-full  my-12">
        <motion.div
          className="textContainer w-full h-full flex flex-col  justify-start items-center gap-auto sm:h-1/2 lg:w-1/2 lg:gap-8 lg:items-center lg:text-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          
          <motion.h2 variants={textVariants} className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-[#915EFF]'>Harsh</span>
          </motion.h2>
          <motion.h1 variants={textVariants} className={`${styles.heroSubText}   text-white-100`}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} >
            <motion.button variants={textVariants} className="p-2 lg:text-[16px] text-[14px] h-14  lg:p-5 mb-4 border border-white rounded-lg bg-transparent text-white mr-5 sm:mr-2 cursor-pointer font-light">
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} className="p-2 lg:text-[16px] text-[14px] h-14  lg:p-5 border border-white rounded-lg bg-transparent text-white  cursor-pointer font-light">Contact Me</motion.button>
          </motion.div>
          
        </motion.div>
      </div>
      <motion.div
        className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-1/2 font-bold"
        variants={sliderVariants as any}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className=" sm:h-1/2  bottom-2 lg:h-full absolute lg:top-0 lg:right-0">
        <img className="w-full h-full object-cover" src="/images/hero.png" alt="" />
      </div>
    </div>

  );
};

