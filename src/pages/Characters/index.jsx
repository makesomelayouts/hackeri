import arrow_down from "@pages/Characters/assets/arrow_down.png";
import arrow_top from "@pages/Characters/assets/arrow_top.png";
import circle from "@shared/assets/images/circle.png";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import Tabs from "./Tabs";

function Characters() {
  return (
    <>
      <section className="snap-start max-h-dvh h-dvh flex flex-col">
        <Header />
        <div className="flex flex-col justify-center items-center grow">
          <div className="relative -top-20">
            <img
              src={circle}
              className="absolute -top-50 right-170 pointer-events-none select-none"
            />
            <img
              src={circle}
              className="absolute left-150 -top-90 pointer-events-none select-none"
            />
            <img
              src={circle}
              className="absolute -top-40 pointer-events-none select-none"
            />
            <img
              src={arrow_top}
              className="absolute -top-30 left-60 pointer-events-none select-none"
            />
            <img
              src={arrow_down}
              className="absolute top-60 left-140 max-w-[285px] pointer-events-none select-none"
            />

            <div className="absolute -left-35 flex flex-col justify-center items-center text-center pl-12 pr-[61px] pt-[104px] pb-[92px] bg-[url('/src/pages/Characters/assets/bg.svg')] bg-no-repeat max-w-[520px] w-full">
              <p className="text-[32px] text-[#F5E2FF] max-w-[400px]">
                В Хацкерах вам предстоит пройти несколько сложных сайтов
              </p>
            </div>

            <div className="absolute -right-36 top-20 flex flex-col justify-center items-center text-center pl-[13px] pr-[9px] pt-[105px] pb-[91px] bg-[url('/src/pages/Characters/assets/bg.svg')] bg-no-repeat max-w-[520px] w-full">
              <p className="text-[32px] text-[#F5E2FF] max-w-[487px]">
                Вы будете играть в роли одного из отважных (или не очень)
                офисных программ-героев{" "}
              </p>
            </div>

            <h1 className="uppercase text-[#50006F] font-bowler text-[190px]">
              Хацкеры
            </h1>
          </div>
        </div>
      </section>

      <section className="snap-start h-dvh flex flex-col">
        <div className="grow">
          <Tabs />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Characters;
