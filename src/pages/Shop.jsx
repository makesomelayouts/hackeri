import Footer from "@widgets/Footer";
import Header from "@widgets/Header";

function Shop() {
  return (
    <>
      <section className="snap-start h-dvh flex flex-col">
        <div className="grow">
          <Header />
          <div className="text-red-300 text-center">Магазин</div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Shop;
