export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
