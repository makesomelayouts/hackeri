import { Link } from "react-router";

function Button({ text, link }) {
  return (
    <>
      {link ? (
        <Link link={link}>
          <button className="bg-[#BC13FE] text-2xl rounded-xl py-[7px] px-[38px] text-[#F5E2FF] cursor-pointer">
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
