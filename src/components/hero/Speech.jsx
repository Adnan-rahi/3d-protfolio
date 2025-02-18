import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "I will Be Your Web developer",
            1000,
            "I will Be Your Website designer",
            1000,
            "I will Be Your Project instructor",
            1000,
          ]}
          wrapper="span"
          speed={20}
          // style={{ fontSize: ".8em", display: "inline-block" }}
          deletionSpeed={30}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="man.png" alt="Hero pic" />
    </motion.div>
  );
};

export default Speech;
