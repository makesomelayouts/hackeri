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
  {/* Блок с первым изображением */}
  <div className="flex flex-col justify-center items-center py-10 px-4">
    <img
      className="max-w-[575px] max-h-[774px] w-full object-contain"
      src={SCAM_hello_subs}
      alt=""
    />
  </div>

  {/* Основной адаптивный блок */}
  <section className="flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto px-5 py-16 gap-12 text-white">

    {/* Левый текстовый блок */}
    <div className="flex-1 min-w-[280px] max-w-[540px]">
      <p className="leading-relaxed text-base mb-6">
        Стильная модная молодежная игра для взрослых и подростков.
        Матовая черная коробка, набор стикеров, карты с уникальными
        персонажами и многое другое! Играйте, взламывайте сайты,
        узнавайте новое и сражайтесь с самыми опасными вирусами
        и трудностями!
      </p>

      <Button text="найти" link="/" />
    </div>

    {/* Правый блок с изображением */}
    <div className="flex-1 min-w-[260px] flex justify-center lg:justify-end shrink-0">
      <img
        src={SCAM_box}
        alt="Хакеры коробка"
        className="w-full max-w-[380px] lg:max-w-[420px] rounded-xl object-contain"
      />
    </div>

  </section>


        <Footer />
      </motion.section>
    </>
  );
}

export default Shop;
