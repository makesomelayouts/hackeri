import { motion } from "motion/react";
import { Link } from "react-router";

function Button({ text, link }) {
  return (
    <>
      {link ? (
        <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
          <Link to={link}>
            {/* */}
            <button
              initial={false}
              className="max-sm:text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-[32px] py-[3.5px] px-[16px] md:py-[4px] md:px-[24px] lg:py-[7px] lg:px-[38px] bg-[#BC13FE] hover:bg-[#7B279C] active:bg-[#4A0863] transition-colors duration-1000 ease-[cubic-bezier(0.05,0,0,1)] rounded-xl text-[#F5E2FF] cursor-pointer"
            >
              {text}
            </button>
          </Link>
        </motion.div>
      ) : (
        <button className="bg-[#BC13FE] text-2xl rounded-xl py-[7px] px-[38px] text-[#F5E2FF]">
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
