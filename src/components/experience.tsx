import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion} from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { educations } from "../constants";
import  SectionWrapper  from "../hoc/SectionWrapper";
import {  textVariant } from "../utils/motion";

interface EducationCardProps {
  index: number;
  name: string;
  education: string;
  info: string;
  date:string;
  image: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  name,education,info,date,image
}) =>
 (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: "black" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
         <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-[2.5rem] sm:w-[4rem]  h-[2.5rem] sm:h-[4rem] rounded-full object-cover'
        />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[20px] sm:text-[24px] font-bold'>{name}</h3>
        <p className='text-secondary text-[12px] sm:text-[16px] font-semibold' style={{ margin: 0 }}>
          {education}
        </p>
      </div>
      <h4 className='text-white  font-bold text-[13px] sm:text-[18px] italic mt-2'>{info}</h4>
    
    </VerticalTimelineElement>
  );



const Experience = () => {
  return (
    <>
      <motion.div className="" variants={textVariant() as any}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-12 h-[100vh] flex flex-col'>
        <VerticalTimeline>
        {educations.map((education, index) => (
          <EducationCard  key={`education-${index}`} index={index} {...education} />
        ))}
        
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
