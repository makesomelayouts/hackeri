import Button from "@shared/ui/button";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import hero_intro from "./assets/hero/hero_intro.png";
import arrow_down from "./assets/hero/arrow_down.png";
import ily from "./assets/welcome/anime_girl_ily.png";
import ily_circle from "./assets/welcome/ily_circle.png";
import circle from "./assets/welcome/circle.png";

function Home() {
  return (
    <>
      <section className="snap-start h-dvh bg-[url(/src/pages/Home/assets/hero/hero_background.png)]">
        <Header />
        <div className="flex flex-col justify-center items-center">
          <img
            className="max-w-[1359.07px] max-h-[707.48px]"
            src={hero_intro}
          />
          <img className="max-h-[71px]" src={arrow_down} />
        </div>
      </section>

      <section className="snap-start h-dvh relative flex flex-col">
        <div className="absolute bottom-20 right-0">
          <img
            src={ily_circle}
            alt="Purple circle"
            className="object-cover w-[1000px] h-[1000px] pointer-events-none select-none"
          />
          <img
            src={ily}
            alt="Girl Ily"
            className="absolute bottom-0 right-0 w-full h-full mix-blend-color-dodge max-w-[625px] max-h-[837px] pointer-events-none select-none"
          />
        </div>

        <img
          src={circle}
          className="absolute top-0 left-0 pointer-events-none select-none"
        />
        <div className="max-w-[1140px] w-full mx-auto grow">
          <p className="text-[#f5e2ff] text-[32px] mb-8 mt-[35px] max-w-[874px]">
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
