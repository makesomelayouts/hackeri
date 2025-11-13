import logo from "@shared/assets/images/logo.svg";
import { Link } from "react-router";

function Header() {
  return (
    <header className="flex max-md:hidden justify-center items-center gap-7 py-[33px] font-regular sm:text-xl md:text-2xl lg:text-[30px] xl:text-[32px] lowercase text-[#F5E2FF]">
      <Link to="/">Главная</Link>
      <Link to="/characters">Персонажи</Link>
      <img
        src={logo}
        alt="Лого"
        className="lg:w-[66.44px] lg:h-[51px] w-7 h-7 mx-5"
      />
      <Link to="/rules">Правила</Link>
      <Link to="/shop">Магазин</Link>
    </header>
  );
}

export default Header;
