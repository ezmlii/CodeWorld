import line from "../../assets/images/line.svg";

const CourseCard = ({ title, subtitle, description, icon: Icon }) => {
  return (
    <div className="group flex flex-col bg-[#D1B200] text-[#002b45] p-[17px_18px] max-w-[327px] h-[135px] lg:max-w-[372px] 
                    transition-all duration-400 ease-out 
                    cursor-pointer relative">
      
      <div className="flex flex-col justify-between h-full w-full
                     transition-all duration-400 ease-out
                     group-hover:opacity-0">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {Icon && <img src={Icon} alt={title} className="w-8 h-8" />}
        </div>
        
        <div className="flex justify-end">
          <img src={line} alt="line" className="w-6 h-6" />
        </div>
      </div>

      <div className="absolute inset-0 p-[17px_18px]
                     flex flex-col justify-between
                     opacity-0
                     group-hover:opacity-100
                     transition-all duration-400 ease-out">
        
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {Icon && <img src={Icon} alt={title} className="w-8 h-8" />}
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="font-opensans font-[14px] font-bold">{subtitle}</p>
            <p className="font-opensans font-[14px]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;