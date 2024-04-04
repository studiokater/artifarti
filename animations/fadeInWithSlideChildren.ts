export const fadeInWithSlideChildren = {
  initial: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 100,
      // staggerChildren: 1,
    },
  },
};
