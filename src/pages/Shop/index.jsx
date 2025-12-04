import SCAM_box from "@pages/Shop/assets/SCAM_box.png";
import SCAM_hello_subs from "@pages/Shop/assets/SCAM_hello_subs.png";
import Button from "@shared/ui/button";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function Shop() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: isMounted ? 1 : 0 }}
        transition={{ duration: 2 }}
        className="snap-start flex flex-col"
      >
        <Header />
        <section></section>
        <div className="flex flex-col justify-center items-center">
          <img className="max-w-[575px] max-h-[774px]" src={SCAM_hello_subs} />
        </div>
        <section className="flex flex-wrap items-center justify-between max-w-[1200px] mx-auto px-5 py-16 gap-10 text-white ">
          <div className="flex-1 min-w-[300px] max-w-[500px]">
            <p className="leading-relaxed text-base mb-6">
              Стильная модная молодежная игра для взрослых и подростков. Матовая
              черная коробка, набор стикеров, карты с уникальными персонажами и
              многое другое! Играйте, взламывайте сайты, узнавайте что-то новое
              и сражайтесь с самыми опасными вирусами и трудностями!
            </p>
            <Button text="найти" link="/" />
          </div>

          <div className="flex-1 min-w-[200px] flex justify-center">
            <img
              src={SCAM_box}
              alt="Хакеры коробка"
              className="w-full max-w-[400px] rounded-xl"
            />
          </div>
        </section>

        <Footer />
      </motion.section>
    </>
  );
}

export default Shop;
