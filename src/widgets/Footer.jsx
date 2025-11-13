function Footer() {
  const currentYear = new Date().getFullYear().toString();
  console.log(currentYear);

  return (
    <footer className="py-[42px] px-4 bg-[#0D031B] z-10">
      <div className="max-w-[1140px] mx-auto">
        {currentYear === "2025" ? (
          <p className="text-[#f5e2ff] text-2xl">2025 © Хацкеры</p>
        ) : (
          currentYear > "2025" && (
            <p className="text-[#f5e2ff] text-2xl">
              2025 — {currentYear} © Хацкеры
            </p>
          )
        )}
      </div>
    </footer>
  );
}

export default Footer;
