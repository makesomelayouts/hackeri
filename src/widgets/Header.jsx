import logo from "@shared/assets/logo.svg";

function Header() {
  return (
    <header className="flex justify-center items-center gap-7 my-[33px] font-regular text-[32px] lowercase">
      <a href="">Главная</a>
      <a href="">Персонажи</a>
      <img src={logo} alt="Лого" className="w-[66.44px] h-[51px] mx-5" />
      <a href="">Правила</a>
      <a href="">Магазин</a>
    </header>
  );
}

export default Header;
