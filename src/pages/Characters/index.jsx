import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import Tabs from "./Tabs";
import circle from "./assets/circle.png";
import intro from "./assets/intro.png";

function Characters() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative flex flex-col max-md:mb-10 overflow-hidden">
        <Header />

        <img
          src={intro}
          className="max-sm:p-4 p-10 pb-20 max-md:w-[90%] md:p-16 md:pb-32 min-w-[320px] mx-auto pointer-events-none select-none"
        />

        <img
          src={circle}
          className="absolute -left-[10%] bottom-[2%] w-[50%] pointer-events-none select-none"
        />
        <img
          src={circle}
          className="absolute left-[24%] bottom-[2%] w-[50%] pointer-events-none select-none"
        />
        <img
          src={circle}
          className="absolute -right-[8%] max-[451px]:top-[12%] max-xl:top-[4%] xl:-top-[8%] xl:-right-[2%] w-[50%] pointer-events-none select-none"
        />
      </section>

      <section className="flex flex-col grow">
        <div className="grow">
          <Tabs />
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default Characters;
