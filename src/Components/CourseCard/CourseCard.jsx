import line from "../../assets/images/line.svg";

const CourseCard = ({ title, subtitle, description, icon: Icon }) => {
  return (
    <div className="group flex flex-col bg-[#D1B200] text-[#002b45] p-4 sm:p-[17px_18px] w-full max-w-[327px] sm:w-[327px] h-[135px] 
                    transition-all duration-400 ease-out 
                    cursor-pointer relative mx-auto
                    hover:scale-[1.02] hover:shadow-lg">
      
      <div className="flex flex-col justify-between h-full w-full
                     transition-all duration-400 ease-out
                     group-hover:opacity-0">
        <div className="flex justify-between items-start">
          <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{title}</h3>
          {Icon && <img src={Icon} alt={title} className="w-6 h-6 sm:w-8 sm:h-8" />}
        </div>
        
        <div className="flex justify-end">
          <img src={line} alt="line" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>

      <div className="absolute inset-0 p-4 sm:p-[17px_18px]
                     flex flex-col justify-between
                     opacity-0
                     group-hover:opacity-100
                     transition-all duration-400 ease-out">
        
        <div className="flex justify-between items-start">
          <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{title}</h3>
          {Icon && <img src={Icon} alt={title} className="w-6 h-6 sm:w-8 sm:h-8" />}
        </div>

        <div className="flex justify-between items-end">
          <div className="max-w-[80%]">
            <p className="font-opensans text-[12px] sm:text-[14px] font-bold leading-tight mb-1">{subtitle}</p>
            <p className="font-opensans text-[11px] sm:text-[14px] leading-tight">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;