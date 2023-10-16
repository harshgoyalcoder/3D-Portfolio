import { Transition } from "framer-motion";

interface TextVariant {
  hidden: {
    y: string| number;
    opacity: string|number;
  };
  show: {
    y: string| number;
    opacity: string|number;
    transition: Transition;
  };
}

interface FadeInVariant {
  hidden: {
    x: number;
    y: number;
    opacity: number;
  };
  show: {
    x: number;
    y: number;
    opacity: number;
    transition: Transition;
  };
}

interface ZoomInVariant {
  hidden: {
    scale: number;
    opacity: number;
  };
  show: {
    scale: number;
    opacity: number;
    transition: Transition;
  };
}

interface SlideInVariant {
  hidden: {
    x: string|number;
    y: string| number;
  };
  show: {
    x: string|number;
    y: string| number;
    transition: Transition;
  };
}

// interface StaggerContainerVariant {
//   hidden: {};
//   show: {
//     transition: {
//       staggerChildren?: number;
//       delayChildren?: number;
//     };
//   };
// }

export const textVariant = (delay?: number): TextVariant => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay || 0,
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): FadeInVariant => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type as Transition["type"],
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number): ZoomInVariant => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: string,
  type: string ,
  delay: number,
  duration: number
): SlideInVariant => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type as Transition["type"],
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};