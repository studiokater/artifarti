export const slideFromBottom = {
  initial: {
    y: 1000,
  },
  visible: {
    y: 0,
    transition: {
      stiffness: 100,
      duration: 0.4,
    },
  },
  exit: {
    y: 1000,
    transition: {
      stiffness: 100,
      duration: 0.4,
    },
  },
};
