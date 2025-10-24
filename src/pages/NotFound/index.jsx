import circle from "@shared/assets/images/circle.png";
import Button from "@shared/ui/button";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import scam_goodbye from "./assets/scam_goodbye.png";

function NotFound() {
  return (
    <>
      <div className="relative flex flex-col h-dvh max-h-dvh max-w-dvw overflow-hidden">
        <img
          src={circle}
          className="absolute -top-40 -left-40 w-[403px] h-[382px] pointer-events-none select-none"
        />
        <img
          src={circle}
          className="absolute -top-40 -right-40 w-[403px] h-[382px] pointer-events-none select-none"
        />
        <img
          src={circle}
          className="absolute bottom-30 -left-40 w-[403px] h-[382px] pointer-events-none select-none"
        />
        <img
          src={circle}
          className="absolute -bottom-10 -right-40 w-[403px] h-[382px] pointer-events-none select-none"
        />

        <Header />
        <div className="grow flex flex-wrap gap-8 items-center justify-center">
          <img
            src={scam_goodbye}
            alt="Прощание от Скама"
            className="max-w-[783px] max-h-[587px]"
          />
          <div className="flex flex-col gap-[15px] text-[32px] max-w-[298px]">
            <p className="text-[#F5E2FF]">всё! страница недоступна</p>
            <Button text="на главную" link="/" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default NotFound;
