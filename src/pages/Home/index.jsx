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

        <div className="h-full flex flex-col justify-center items-center pb-4">
          <img
            className="xl:w-[70%] lg:w-[850px] md:w-[700px] sm:w-[500px] max-[646px]:w-[90%]"
            src={hero_intro}
          />
          <img
            className="max-[400px]:w-[18px] w-[24px] sm:w-[24px] md:w-[30px] lg:w-[36px] xl:w-[42px] 2xl:w-[46px] max-h-[71px] cursor-pointer hover:animate-pulse duration-4000"
            src={arrow_down}
            onClick={scrollToNextSection}
          />
        </div>
      </section>

      <section className="overflow-hidden relative h-full max-[767px]:min-h-[600px] md:min-h-dvh flex flex-col bg-[#010207]">
        <img
          src={circle}
          className="absolute top-70 left-0 w-[1000px] pointer-events-none select-none"
        />

        <div className="max-lg:hidden absolute bottom-38 right-0 pointer-events-none select-none">
          <img
            src={ily_circle}
            alt="Purple circle"
            className="object-cover w-[1000px] h-[1000px] pointer-events-none select-none"
          />
          <video
            src={man}
            alt="Man"
            className="absolute lg:bottom-0 right-28 lg:w-[56%] xl:w-[60%] pointer-events-none select-none mix-blend-color-dodge"
            loop
            autoPlay
            muted
            playsInline
          />
        </div>

        <div className="px-4 relative max-w-[1140px] w-full mx-auto grow overflow-hidden">
          <div className="lg:hidden absolute max-md:-bottom-26 md:-bottom-44 right-0 pointer-events-none select-none">
            <img
              src={ily_circle}
              alt="Purple circle"
              className="object-cover w-[400px] h-[400px] md:h-[700px] pointer-events-none select-none"
            />
            <video
              src={man}
              alt="Man"
              className="max-[332px]:bottom-18 absolute bottom-22 right-0 max-md:right-8 max-md:w-40 md:w-80 pointer-events-none select-none mix-blend-color-dodge"
              loop
              autoPlay
              muted
              playsInline
            />
          </div>

          <p className="text-[#f5e2ff] max-sm:text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-[32px] mb-8 mt-[35px] md:max-w-[600px] xl:max-w-[874px]">
            Добро пожаловать в мир «Хацкеров» - настольной игры, где вы
            примерите на себя роль элитного киберпреступника, стремящегося к
            вершинам цифровой иерархии! Пробирайтесь сквозь слои защиты,
            обходите конкурентов или кооперируйтесь с другими игроками,
            взламывайте сайты и собирайте крутые ништяки, чтобы стать самым
            богатым и влиятельным хакером в сети!
          </p>
          <div className="flex flex-wrap gap-[29px] pb-8 max-md:pb-52">
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
