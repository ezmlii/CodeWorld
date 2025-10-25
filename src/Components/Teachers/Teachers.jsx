import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 

import "swiper/css"; 

import arrow from "../../assets/icons/arrow.svg";
import jamesBond from "../../assets/images/jamesBond.svg";
import katnisEverdeen from "../../assets/images/katnisEverdeen.svg";
import jackSparrow from "../../assets/images/jackSparrow.svg";

const Teachers = () => {
  const teachers = [
    { name: "James Bond", role: "Qrafik Dizayner", image: jamesBond },
    { name: "Katniss Everdeen", role: "Qrafik Dizayner", image: katnisEverdeen },
    { name: "Jack Sparrow", role: "Qrafik Dizayner", image: jackSparrow },
    { name: "James Bond", role: "Qrafik Dizayner", image: jamesBond },
    { name: "Katniss Everdeen", role: "Qrafik Dizayner", image: katnisEverdeen },
    { name: "Jack Sparrow", role: "Qrafik Dizayner", image: jackSparrow },
    { name: "James Bond", role: "Qrafik Dizayner", image: jamesBond },
    { name: "Katniss Everdeen", role: "Qrafik Dizayner", image: katnisEverdeen },
    { name: "Jack Sparrow", role: "Qrafik Dizayner", image: jackSparrow },
  ];

  return (
    <section className="w-full flex items-center justify-center mt-[90px]">
      <div className="w-[87%] flex flex-col items-center sm:items-start justify-center">
        <h2 className="text-2xl font-semibold text-[#002b45] mb-10 flex items-center gap-2 justify-center sm:justify-start w-full">
          Müəllimlərimiz <img src={arrow} alt="arrow" />
        </h2>

        <div className="w-full flex justify-center sm:justify-start">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]} 
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              },
            }}
            className="w-full"
          >
            {teachers.map((teacher, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-full max-w-[270px] h-[300px] mb-4">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-[20px] sm:text-[24px] text-[#023047] font-opensans sm:font-poppins">
                    {teacher.name}
                  </h3>
                  <p className="font-opensans text-[#023047] text-[16px] mt-[10px]">{teacher.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Teachers;