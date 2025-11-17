import Button from "@shared/ui/button";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import arrow_down from "./assets/hero/arrow_down.png";
import hero_intro from "./assets/hero/hero_intro.png";
import circle from "./assets/welcome/circle.png";
import ily_circle from "./assets/welcome/ily_circle.png";
import man from "./assets/welcome/man.mp4";

function Home() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="max-h-dvh h-dvh md:pb-30 bg-[url(/src/pages/Home/assets/hero/hero_background.png)]">
        <Header />

        <div className="h-full flex flex-col justify-center items-center">
          <img
            className="lg:w-[850px] md:w-[700px] sm:w-[500px] max-[646px]:w-[90%]"
            src={hero_intro}
          />
          <img
            className="w-[5%] max-h-[71px] cursor-pointer hover:animate-pulse duration-4000"
            src={arrow_down}
            onClick={scrollToNextSection}
          />
        </div>
      </section>

      <section className="min-h-dvh flex flex-col bg-[#010207]">
        <img
          src={circle}
          className="absolute top-0 left-0 pointer-events-none select-none"
        />
        <div className="px-4 relative max-w-[1140px] w-full mx-auto grow overflow-hidden">
          <div className="absolute max-md:-bottom-26 md:-bottom-44 right-0 pointer-events-none select-none">
            <img
              src={ily_circle}
              alt="Purple circle"
              className="object-cover w-[1000px] h-[1000px] pointer-events-none select-none"
            />
            {/* lg:-bottom-86*/}
            <video
              src={man}
              alt="Man"
              className="max-[332px]:bottom-0 absolute bottom-22 right-0 max-md:right-8 max-md:w-40 md:w-80 xl:w-full xl:h-full pointer-events-none select-none mix-blend-color-dodge"
              loop
              autoPlay
              muted
              playsInline
            />
          </div>

          <p className="text-[#f5e2ff] max-sm:text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-[32px] mb-8 mt-[35px] lg:max-w-[200px] xl:max-w-[874px]">
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
