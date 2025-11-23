import { motion } from "motion/react";

function Footer() {
  const currentYear = new Date().getFullYear().toString();

  const linkVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: "200% 50%",
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <footer className="py-6 md:py-[42px] px-4 bg-[#0D031B] z-10">
      <div className="max-md:flex-col max-w-[1140px] mx-auto flex flex-wrap justify-between items-center">
        {currentYear === "2025" ? (
          <p className="text-[#f5e2ff] max-sm:text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-[32px]">
            2025 © Хацкеры
          </p>
        ) : (
          currentYear > "2025" && (
            <p className="text-[#f5e2ff] max-sm:text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-[32px]">
              2025 — {currentYear} © Хацкеры
            </p>
          )
        )}

        <p className="py-2 text-[#f5e2ff] max-sm:text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-[32px]">
          tg: (
          <span className="max-md:block md:inline max-md:leading-6">
            <motion.a
              className="inline-block bg-gradient-to-r from-[#ff00ff] via-[#4F006E] to-[#bc13fe] bg-[length:200%] bg-clip-text text-transparent"
              variants={linkVariants}
              initial="initial"
              animate="animate"
              href="https://t.me/qwkenk"
              target="_blank"
            >
              @qwkenk
            </motion.a>
            ,&ensp;
            <br className="md:hidden" />
            <motion.a
              className="inline-block bg-gradient-to-r from-[#ff00ff] via-[#4F006E] to-[#bc13fe] bg-[length:200%] bg-clip-text text-transparent"
              variants={linkVariants}
              initial="initial"
              animate="animate"
              href="https://t.me/witchblades_draw"
              target="_blank"
            >
              @witchblades_draw
            </motion.a>
            ,&ensp;
            <br className="md:hidden" />
            <motion.a
              className="inline-block bg-gradient-to-r from-[#ff00ff] via-[#4F006E] to-[#bc13fe] bg-[length:200%] bg-clip-text text-transparent"
              variants={linkVariants}
              initial="initial"
              animate="animate"
              href="https://t.me/makesomelayouts"
              target="_blank"
            >
              @makesomelayouts
            </motion.a>
            ,&ensp;
            <br className="md:hidden" />
            <motion.a
              className="inline-block bg-gradient-to-r from-[#ff00ff] via-[#4F006E] to-[#bc13fe] bg-[length:200%] bg-clip-text text-transparent"
              variants={linkVariants}
              initial="initial"
              animate="animate"
              href="https://t.me/lizergin_xtra"
              target="_blank"
            >
              @lizergin_xtra
            </motion.a>
          </span>
          )
        </p>
      </div>
    </footer>
  );
}

export default Footer;
