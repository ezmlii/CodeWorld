import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import arrow from '../../assets/icons/arrow.svg';
import student from '../../assets/images/student.svg';

import 'swiper/css';
import 'swiper/css/autoplay';

const StudentsComments = () => {
  const cards = [
    {
      id: 1,
      title: "Vesper",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      bgColor: "#A2590599"
    },
    {
      id: 2,
      title: "Vesper",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      bgColor: "#0230474D"
    },
    {
      id: 3,
      title: "Vesper",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      bgColor: "#A2590599"
    },
    {
      id: 4,
      title: "Vesper",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      bgColor: "#0230474D"
    },
    {
      id: 5,
      title: "Vesper",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      bgColor: "#A2590599"
    },
    {
      id: 6,
      title: "Vesper",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      bgColor: "#0230474D"
    },
    {
      id: 7,
      title: "Vesper",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      bgColor: "#A2590599"
    },
    {
      id: 8,
      title: "Vesper",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      bgColor: "#0230474D"
    },
  ];

  return (
    <section className="w-full flex items-center justify-center mt-[60px]">
      <div className="w-[87%] flex flex-col items-center justify-center">
        
        <h2 className="text-2xl font-semibold text-[#023047] mb-10 flex items-center gap-2 justify-center sm:justify-start w-full">
          Tələbə Rəyləri <img src={arrow} alt="arrow" />
        </h2>
        
        <div className="w-full flex flex-col justify-center items-center gap-8 md:hidden">
          <div className="flex justify-center">
            <img 
              src={student} 
              alt="student" 
              className='h-auto max-w-full drop-shadow-[8px_8px_10px_0px_#000000AB]' 
            />
          </div>
          
          <div className="w-full">
            <div 
              className="w-full rounded-xl"
              style={{
                background: "linear-gradient(90deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 0.18) 100%)",
                padding: '1.5rem 0'
              }}
            >
              <Swiper
                modules={[Autoplay, Mousewheel]}
                spaceBetween={16}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                mousewheel={{
                  forceToAxis: true,
                  sensitivity: 1,
                  releaseOnEdges: true
                }}
                loop={true}
                grabCursor={true}
                resistance={true}
                resistanceRatio={0.85}
                speed={800}
                className="mobile-swiper"
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <div className="px-4">
                      <div
                        style={{ 
                          backgroundColor: card.bgColor,
                          backdropFilter: 'blur(10px)'
                        }}
                        className="rounded-xl p-6 text-white border border-white border-opacity-20 flex flex-col h-full min-h-[280px] w-full max-w-[400px] mx-auto"
                      >
                        <h3 className="text-xl font-bold mb-3 font-poppins text-[#023047]">{card.title}</h3>
                        <p className="text-opacity-90 flex-grow text-sm font-semibold text-[#023047] leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="w-full hidden md:flex flex-row gap-8 items-start">
          <div className="w-2/5 flex justify-center">
            <img 
              src={student} 
              alt="student" 
              className='h-auto max-w-full drop-shadow-[8px_8px_10px_0px_#000000AB]' 
            />
          </div>
          
          <div className="w-3/5">
            <div 
              className="w-full rounded-xl"
              style={{
                background: "linear-gradient(90deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 0.18) 100%)",
                padding: '2rem 0'
              }}
            >
              <Swiper
                modules={[Autoplay, Mousewheel]}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 24
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 24
                  },
                  1536: {
                    slidesPerView: 3,
                    spaceBetween: 28
                  }
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                mousewheel={{
                  forceToAxis: true,
                  sensitivity: 1,
                  releaseOnEdges: true
                }}
                loop={true}
                grabCursor={true}
                resistance={true}
                resistanceRatio={0.85}
                speed={800}
                className="tablet-desktop-swiper"
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <div className="px-3">
                      <div
                        style={{ 
                          backgroundColor: card.bgColor,
                          backdropFilter: 'blur(10px)'
                        }}
                        className="rounded-xl p-6 text-white border border-white border-opacity-20 flex flex-col h-full min-h-[320px] w-full max-w-[420px] mx-auto"
                      >
                        <h3 className="text-xl font-bold mb-4 font-poppins text-[#023047]">{card.title}</h3>
                        <p className="flex-grow text-[15px] font-semibold text-[#023047] leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentsComments;