import logo from "@shared/assets/logo.svg";
import { Link } from "react-router";

function Header() {
  return (
    <header className="flex justify-center items-center gap-7 my-[33px] font-regular text-[32px] lowercase text-[#F5E2FF]">
      <Link to="/">Главная</Link>
      <Link to="/characters">Персонажи</Link>
      <img src={logo} alt="Лого" className="w-[66.44px] h-[51px] mx-5" />
      <Link to="/rules">Правила</Link>
      <Link to="/shop">Магазин</Link>
    </header>
  );
}

export default Header;
