import mainImage from "../../assets/images/main-image.jpg";

const Header = () => {
  return (
    <div className="relative w-full">
      <img
        src={mainImage}
        alt="Main"
        className="w-full h-[739px] sm:h-[1039px] lg:h-[835px] object-cover object-center"
      />

      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>

      <div className="absolute top-[87px] left-[30px] sm:left-[60px] max-w-[320px] sm:max-w-[600px] lg:max-w-[1120px] text-white flex flex-col gap-[47px]">
        <p className="font-poppins font-semibold text-4xl sm:text-[83px] lg:text-[83px] leading-[100%]">
          Bizimlə təhsildə yeniliyə doğru addım at!
        </p>

        <div className="flex flex-col gap-[11px]">
          <p className="text-[28px] sm:text-[36px] font-semibold leading-[100%]">
            Axtardığınız ixtisaslar burda
          </p>

          <div className="flex flex-wrap gap-[21px] lg:max-w-[900px]">
            {[
              "Qrafik Dizayn",
              "UX/UI Design",
              "Frontend Proqramlaşdırma",
              "Backend Proqramlaşdırma",
              "Data Analitika",
            ].map((item) => (
              <span
                key={item}
                className="font-opensans text-base text-[16px] lg:text-[20px] leading-[100%]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <button className="bg-[#A25905] rounded-tr-[23px] rounded-bl-[23px] py-[11.5px] px-[43px] max-w-[231px] text-[20px] sm:text-[24px] lg:text-[26px]">Bizə Qoşul</button>
      </div>
    </div>
  );
};

export default Header;
