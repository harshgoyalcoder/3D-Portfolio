import  SectionWrapper  from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { Grid } from "@mui/material";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className='flex h-[100vh] flex-column flex-wrap justify-center gap-10'>
      {/* <motion.div className="" variants={textVariant() as any}> */}
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stacks.
        </h2>
      {/* </motion.div> */}

        <Grid container spacing={2}>
  {technologies.map((technology) => (
    <Grid item xs={4} md={2}>
     <div className="group relative">
  <div className="duration-700 rounded-2xl group-hover:opacity-40 ">
    <img src={technology.icon} alt={technology.name} className="w-25 h-25 mx-auto mb-4" />
  </div>
  <div className="absolute top-1/2 left-1/2 font-medium transform -translate-x-1/2 -translate-y-1/2 text-white text-[14px] sm:text-xl opacity-0 group-hover:opacity-100 pointer-events-none">
    {technology.name}
  </div>
</div>


      </Grid>
  ))}
  </Grid>
</div>

  );
};

{/* <BallCanvas icon={technology.icon} /> */}
export default SectionWrapper(Tech, "tech");
