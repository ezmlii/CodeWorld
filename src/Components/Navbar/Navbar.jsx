import { useState } from "react";
import { Link } from "react-router-dom";
import codeworld from "../../assets/images/codeworld-logo.svg";
import menu from "../../assets/icons/menu.svg";
import x from "../../assets/icons/x.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#A2580533] px-3 py-2 sm:px-4 md:px-5 sm:py-3 flex justify-between items-center relative z-50">
      <div className="w-[120px] h-[18px] sm:w-[156px] sm:h-[21px] lg:w-[221px] lg:h-[30px]">
        <img src={codeworld} alt="codeWorld-logo" className="w-full h-full" />
      </div>

      <button
        className="block md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={isOpen ? x : menu}
          alt="menu icon"
          className="w-[28px] h-[22px] transition-all duration-200"
        />
      </button>

      <ul
        className="hidden md:flex gap-[31px] lg:gap-[43.6px] font-poppins font-medium text-[#023047]
        py-[9.5px] px-[40px] lg:py-[15px] lg:px-[22.8px] 
        md:text-[17px] lg:text-2xl lg:w-[627px]"
      >
        <li><Link to="/haqqimizda">Haqqımızda</Link></li>
        <li><Link to="/ixtisaslar">İxtisaslar</Link></li>
        <li><Link to="/təqaudler">Təqaüdlər</Link></li>
        <li><Link to="/elaqe">Əlaqə</Link></li>
      </ul>

      <button className="hidden md:flex gap-[10px] text-[#023047] leading-[100%] 
        font-medium md:text-[16.87px] lg:text-2xl md:py-[13px] lg:py-4 md:px-[18px] lg:px-6 
        bg-[#D1B200] rounded-[16px] lg:rounded-[23px] cursor-pointer">
        Qeydiyyat
      </button>

      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white flex flex-col gap-4 py-4 px-6 shadow-md border-t border-[#E6E6E6] animate-slideDown">
          <Link to="/haqqimizda" onClick={() => setIsOpen(false)}>
            Haqqımızda
          </Link>
          <Link to="/ixtisaslar" onClick={() => setIsOpen(false)}>
            İxtisaslar
          </Link>
          <Link to="/təqaudler" onClick={() => setIsOpen(false)}>
            Təqaüdlər
          </Link>
          <Link to="/elaqe" onClick={() => setIsOpen(false)}>
            Əlaqə
          </Link>
          <button
            className="mt-2 text-[#023047] leading-[100%] text-[17px] font-medium py-3 px-5 bg-[#D1B200] rounded-[16px]"
            onClick={() => setIsOpen(false)}
          >
            Qeydiyyat
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
