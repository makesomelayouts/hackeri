import Footer from "@widgets/Footer";
import Header from "@widgets/Header";

function Rules() {
  return (
    <>
      <section className="snap-start h-dvh flex flex-col">
        <Header />
        <div className="text-red-300 text-center grow">Правила</div>
        <Footer />
      </section>
    </>
  );
}

export default Rules;
