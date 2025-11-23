import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import circle from "./assets/circle.png";
import intro from "./assets/intro.png";

function Characters() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col min-h-dvh"
    >
      <section className="relative flex flex-col max-md:mb-10 overflow-hidden">
        <Header />

        <motion.img
          src={intro}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2 },
          }}
          className="max-sm:p-4 p-10 pb-20 max-md:w-[90%] md:p-16 md:pb-32 min-w-[320px] mx-auto pointer-events-none select-none"
        />

        <motion.img
          src={circle}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2 },
          }}
          className="absolute -left-[10%] bottom-[2%] w-[50%] pointer-events-none select-none"
        />
        <motion.img
          src={circle}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2 },
          }}
          className="absolute left-[24%] bottom-[2%] w-[50%] pointer-events-none select-none"
        />
        <motion.img
          src={circle}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2 },
          }}
          className="absolute -right-[8%] max-[451px]:top-[12%] max-xl:top-[4%] xl:-top-[8%] xl:-right-[2%] w-[50%] pointer-events-none select-none"
        />
      </section>

      <section className="flex flex-col grow">
        <div className="grow">
          <Tabs />
        </div>
        <Footer />
      </section>
    </motion.div>
  );
}

export default Characters;
