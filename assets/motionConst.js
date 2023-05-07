export const item = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.7, type: "tween" } },
};

export const fadeItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeInOut", duration: 0.7, type: "tween" } },
};

export const footerColCont = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const navItem = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.5, type: "tween", staggerChildren: 0.1 },
  },
};
