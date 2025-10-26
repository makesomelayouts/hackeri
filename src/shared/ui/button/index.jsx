import { Link } from "react-router";

function Button({ text, link }) {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button className="bg-[#BC13FE] hover:bg-[#7B279C] active:bg-[#4A0863] transition-colors duration-1000 ease-[cubic-bezier(0.05,0,0,1)] text-2xl rounded-xl py-[7px] px-[38px] text-[#F5E2FF] cursor-pointer">
            {text}
          </button>
        </Link>
      ) : (
        <button className="bg-[#BC13FE] text-2xl rounded-xl py-[7px] px-[38px] text-[#F5E2FF]">
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
