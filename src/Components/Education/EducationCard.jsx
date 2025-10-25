import schoolarship from "../../assets/icons/schoolarship.svg";
import arrow from '../../assets/icons/arrow.svg';

const EducationCard = ({ 
  title, 
  subtitle, 
  description, 
  onClick,
  className = ""
}) => {
  return (
    <div 
      className={`
        py-[56px] px-[20px]
        relative p-6 rounded-3xl shadow-lg 
        hover:shadow-xl transition-all duration-300 hover:-translate-y-2 
        border-2 border-white border-opacity-20
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
        overflow-hidden
        max-w-[256px] h-[403px] sm:max-w-[281px] sm:max-h-[423px] lg:max-w-[303px] lg:max-h-[456px] 
        flex flex-col
        gap-[38px]
        cursor-pointer
      `}
      style={{
        background: `
          linear-gradient(0deg, #8ECAE6, #8ECAE6),
          linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.05) 13.89%, rgba(255, 255, 255, 0) 46.66%, rgba(255, 255, 255, 0.05) 86%, #FFFFFF 100%)
        `,
        backgroundBlendMode: 'overlay, normal'
      }}
      onClick={onClick}
    >
      <div className="flex justify-between items-start max-w-[136px] mt-[56px]">
        <img 
          src={schoolarship} 
          alt="scholarship"  
        />
        <img 
          src={arrow} 
          alt="arrow" 
          className="w-6 h-6" 
        />
      </div>

      <div className="flex-grow text-[#023047]">
        <h3 className="text-xl font-bold leading-tight font-poppins text-[28px]">{title}</h3>
        
        {description && (
          <p className="text-[14px] font-semibold">{description}</p>
        )}
        
      </div>
    </div>
  );
};

export default EducationCard;