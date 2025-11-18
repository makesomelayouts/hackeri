import logo from "@shared/assets/images/logo.svg";
import { Link } from "react-router";
import mobileHeader from "./assets/mobile-header.svg";

function Header() {
  return (
    <>
      {/* mobile */}
      <header className="flex md:hidden text-white">
        <img
          className="p-2 m-2 hover:bg-purple-500 duration-300 ease-in-out rounded cursor-pointer"
          src={mobileHeader}
          alt="Открыть меню"
        />
      </header>

      {/* pc */}
      <header className="flex max-md:hidden justify-center items-center gap-7 py-[33px] font-regular max-sm:text-[12px] sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-[32px] lowercase text-[#F5E2FF]">
        <Link to="/">Главная</Link>
        <Link to="/characters">Персонажи</Link>
        <img
          src={logo}
          alt="Лого"
          className="w-[30px] lg:w-[40px] xl:w-[58px] max-md:w-7 max-md:h-7 mx-5"
        />
        <Link to="/rules">Правила</Link>
        <Link to="/shop">Магазин</Link>
      </header>
    </>
  );
}

export default Header;
