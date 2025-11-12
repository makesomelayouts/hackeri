import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import SCAM_hello_subs from "@pages/Shop/assets/SCAM_hello_subs.png";
import SCAM_box from "@pages/Shop/assets/SCAM_box.png";
function Rules() {
  return (
    <>
      <section className="snap-start h-dvh flex flex-col">
        <Header />
        <section></section>
        <div className="flex flex-col justify-center items-center">
            <img className="max-w-[992px] max-h-[774px]" src={SCAM_hello_subs}
            />
        </div>
        <section className="flex flex-wrap items-center justify-between max-w-[1200px] mx-auto px-5 py-16 gap-10 text-white bg-[#0b0b14]">
            <div className="flex-1 min-w-[300px] max-w-[500px]">
                <p className="leading-relaxed text-base mb-6">
                    Стильная модная молодежная игра для взрослых и подростков. Матовая черная коробка, набор стикеров, карты с уникальными персонажами и многое другое! Играйте, взламывайте сайты, узнавайте что-то новое и сражайтесь с самыми опасными вирусами и трудностями!
                </p>
                <button className="bg-[#b94cf6] hover:bg-[#a13be0] transition-colors duration-300 text-white px-8 py-3 rounded-full text-base">
                    найти
                </button>
            </div>


            <div className="flex-1 min-w-[300px] flex justify-center">
                <img
                src="/path/to/your/image.png"
                alt="Хакеры коробка"
                className="w-full max-w-[400px] rounded-xl"
                />
            </div>
        </section>


        <div className="text-red-300 text-center grow">Магазин</div>
        <Footer />
      </section>
    </>
  );
}

export default Rules;


