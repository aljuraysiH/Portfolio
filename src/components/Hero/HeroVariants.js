export const heroVariantsLeft = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visiable: {
    opacity: 1,
    x: 0,
    transition: {
      x: {
        type: "tween",
        duration: 1.5,
      },
    },
  },
};

export const heroVariantsRight = {
  hidden: {
    opacity: 0,
  },
  visiable: {
    opacity: 1,

    transition: {
      duration: 1.5,
    },
  },
};
