import logo from "@shared/assets/images/logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import closeIcon from "./assets/close-icon.svg";
import mobileHeader from "./assets/mobile-header.svg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="flex md:hidden text-white">
        <button
          onClick={toggleMobileMenu}
          className="p-2 m-2 hover:bg-purple-500 duration-300 ease-in-out rounded cursor-pointer"
        >
          <img src={mobileHeader} alt="Открыть меню" />
        </button>
      </header>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, #BC13FEfa 0%, #18072Efa 100%)",
          boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-0 left-0 p-2 m-2 hover:bg-purple-500 duration-300 ease-in-out rounded cursor-pointer z-60"
        >
          <img src={closeIcon} alt="Закрыть меню" />
        </button>

        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center h-full text-white space-y-8">
          <img src={logo} alt="Лого" className="w-20 h-20 mb-8" />

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="text-2xl font-medium hover:text-purple-200 transition-colors duration-300"
          >
            Главная
          </Link>

          <Link
            to="/characters"
            onClick={closeMobileMenu}
            className="text-2xl font-medium hover:text-purple-200 transition-colors duration-300"
          >
            Персонажи
          </Link>

          <Link
            to="/rules"
            onClick={closeMobileMenu}
            className="text-2xl font-medium hover:text-purple-200 transition-colors duration-300"
          >
            Правила
          </Link>

          <Link
            to="/shop"
            onClick={closeMobileMenu}
            className="text-2xl font-medium hover:text-purple-200 transition-colors duration-300"
          >
            Магазин
          </Link>
        </div>
      </div>

      {/* PC Header */}
      <header className="flex max-md:hidden justify-center items-center gap-7 py-[33px] font-regular max-sm:text-[12px] sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-[32px] lowercase text-[#F5E2FF]">
        <Link
          className="hover:text-[#BC13FE] hover:drop-shadow-[0_0_6px_#a855f7] duration-300 ease-in-out"
          to="/"
        >
          Главная
        </Link>
        <Link
          className="hover:text-[#BC13FE] hover:drop-shadow-[0_0_6px_#a855f7] duration-300 ease-in-out"
          to="/characters"
        >
          Персонажи
        </Link>
        <img
          src={logo}
          alt="Лого"
          className="w-[30px] lg:w-[40px] xl:w-[58px] max-md:w-7 max-md:h-7 mx-5 hover:rotate-y-180 duration-300 ease-in"
        />
        <Link
          className="hover:text-[#BC13FE] hover:drop-shadow-[0_0_6px_#a855f7] duration-300 ease-in-out"
          to="/rules"
        >
          Правила
        </Link>
        <Link
          className="hover:text-[#BC13FE] hover:drop-shadow-[0_0_6px_#a855f7] duration-300 ease-in-out"
          to="/shop"
        >
          Магазин
        </Link>
      </header>
    </>
  );
}

export default Header;
