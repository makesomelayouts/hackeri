function Footer() {
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="py-6 md:py-[42px] px-4 bg-[#0D031B] z-10">
      <div className="max-md:flex-col max-w-[1140px] mx-auto flex flex-wrap justify-between items-center">
        {currentYear === "2025" ? (
          <p className="text-[#f5e2ff] max-sm:text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-[32px]">
            2025 © Хацкеры
          </p>
        ) : (
          currentYear > "2025" && (
            <p className="text-[#f5e2ff] max-sm:text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-[32px]">
              2025 — {currentYear} © Хацкеры
            </p>
          )
        )}

        {/* links */}
        <p className="py-2 text-[#f5e2ff] max-sm:text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-[32px]">
          tg: (
          <div className="md:inline max-md:leading-6">
            <a
              className="hover:text-[#BC13FE] duration-300 ease-in"
              href="https://t.me/qwkenk"
              target="_blank"
            >
              @qwkenk
            </a>
            ,&ensp;
            <br className="md:hidden" />
            <a
              className="hover:text-[#BC13FE] duration-300 ease-in"
              href="https://t.me/witchblades_draw"
              target="_blank"
            >
              @witchblades_draw
            </a>
            ,&ensp;
            <br className="md:hidden" />
            <a
              className="hover:text-[#BC13FE] duration-300 ease-in"
              href="https://t.me/makesomelayouts"
              target="_blank"
            >
              @makesomelayouts
            </a>
            ,&ensp;
            <br className="md:hidden" />
            <a
              className="hover:text-[#BC13FE] duration-300 ease-in"
              href="https://t.me/lizergin_xtra"
              target="_blank"
            >
              @lizergin_xtra
            </a>
          </div>
          )
        </p>
      </div>
    </footer>
  );
}

export default Footer;
