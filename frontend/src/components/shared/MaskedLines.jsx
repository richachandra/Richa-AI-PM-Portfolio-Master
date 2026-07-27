import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

// Masked line-by-line reveal: each line sits in an overflow-hidden wrapper
// and rises from y:100% -> 0, staggered.
export const MaskedLines = ({ lines, className = "", lineClassName = "", start = 0, stagger = 0.12 }) => {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em]">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: EASE, delay: start + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default MaskedLines;
