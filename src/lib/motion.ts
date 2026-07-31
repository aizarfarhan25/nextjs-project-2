export const easePro = [0.25, 0.1, 0.25, 1] as const;

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpTransition = {
  duration: 0.7,
  ease: easePro,
};
