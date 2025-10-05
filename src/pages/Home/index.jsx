import Button from "@shared/ui/button";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import hero_intro from "./assets/hero/hero_intro.png";
import arrow_down from "./assets/hero/arrow_down.png";

function Home() {
  return (
    <>
      <section className="min-h-dvh bg-[url(/src/pages/Home/assets/hero/hero_background.png)]">
        <Header />
        <div className="flex flex-col justify-center items-center">
          <img
            className="max-w-[1359.07px] max-h-[707.48px]"
            src={hero_intro}
          />
          <img className="max-h-[71px]" src={arrow_down} />
        </div>
      </section>

      <section className="min-h-screen flex flex-col">
        <div className="max-w-[1140px] mx-auto flex-grow">
          <p className="text-[#F5E2FF] text-[32px] mb-8 mt-[35px]">
            Добро пожаловать в мир «Хацкеров» - настольной игры, где вы
            примерите на себя роль элитного киберпреступника, стремящегося к
            вершинам цифровой иерархии! Пробирайтесь сквозь слои защиты,
            обходите конкурентов или кооперируйтесь с другими игроками,
            взламывайте сайты и собирайте крутые ништяки, чтобы стать самым
            богатым и влиятельным хакером в сети!
          </p>
          <div className="flex flex-wrap gap-[29px]">
            <Button text="персонажи" link="characters" />
            <Button text="правила" link="rules" />
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Home;
