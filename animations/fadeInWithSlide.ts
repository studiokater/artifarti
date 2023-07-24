export const fadeInWithSlide = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      stiffness: 100,
      duration: 0.5,
    },
  },
};
