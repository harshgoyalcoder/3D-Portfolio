import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
      ref={ref}
    >
      <motion.h1 className="text-3xl sm:text-4xl" style={{y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div
        style={{
          backgroundImage: `url(${
            type === "services" ? "/images/planets.png" : "/images/sun.png"
          })`,
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 2,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: yBg,
        }}
        className="planets"
      ></motion.div>
      <motion.div
        style={{
          backgroundImage: "url('/images/mountains.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 3,
        }}
        className="mountains"
      ></motion.div>
      <motion.div
        style={{
            x: yBg,
          backgroundImage: "url('/images/stars.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
