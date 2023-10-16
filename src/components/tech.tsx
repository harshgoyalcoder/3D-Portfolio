import { BallCanvas } from "./canvas";
import  SectionWrapper  from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { Grid } from "@mui/material";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
        <Grid container spacing={6}>
  {technologies.map((technology) => (
    <Grid item xs={6} md={2}>
     <div className="group relative">
  <div className="duration-700 rounded-2xl group-hover:opacity-40 ">
    <img src={technology.icon} alt={technology.name} className="w-25 h-25 mx-auto mb-4" />
  </div>
  <div className="absolute top-1/2 left-1/2 font-medium transform -translate-x-1/2 -translate-y-1/2 text-white text-xl opacity-0 group-hover:opacity-100 pointer-events-none">
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
