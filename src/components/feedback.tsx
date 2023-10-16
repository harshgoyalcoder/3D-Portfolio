import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper  from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75) as any}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <img
      src={image}
      alt={`feedback_by-${name}`}
      className='w-20 h-20 rounded-full object-cover'
        />

    <div className='mt-1'>
    <p className='text-white font-black text-[25px]'>Bits Pilani</p>
      <p className='text-white tracking-wider text-[18px]'>B.E. in EEE</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
             Percentage
          </p>
          <p className='text-white font-medium text-[16px]'>
             May 2024
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            AIR 6603 JEE Adv
          </p>
        </div>

        
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant() as any}>
          {/* <p className={styles.sectionSubText}>What others say</p> */}
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonial");
