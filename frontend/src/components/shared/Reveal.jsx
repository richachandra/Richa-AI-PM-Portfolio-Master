import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 40, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-15% 0px" }}
    transition={{ duration: 0.9, ease: EASE, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
