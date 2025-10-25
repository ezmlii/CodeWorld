import EducationCard from './EducationCard';
import arrow from '../../assets/icons/arrow.svg';

const FeaturesSection = () => {
  const features = [
    {
      title: "Akademik Təqaüd",
      description: "Yüksək nəticə göstərən və tədrisdə fəallığı ilə seçilən tələbələrə təqdim olunur."
    },
    {
      title: "Sosial Dəstək Təqaüdü",
      description: "Maddi imkanı məhdud olan, lakin öyrənmək həvəsi güclü olan tələbələr üçün nəzərdə tutulub."
    },
    {
      title: "Erkən Qeydiyyat Endirimi",
      description: "Semestr başlamazdan əvvəl qeydiyyatdan keçən tələbələr üçün xüsusi endirimlər tətbiq olunur."
    },
    {
      title: "Qızlar üçün IT Dəstəyi Proqramı",
      description: "Texnologiya və dizayn sahəsində təhsil alan xanım tələbələr üçün qismən təqaüd imkanı yaradır."
    }
  ];

  return (
    <section className="w-full flex items-center justify-center mt-[60px]">
      <div className="w-[87%] flex flex-col items-center justify-center">
        
        <h2 className="text-2xl font-semibold text-[#023047] mb-10 flex items-center gap-2 justify-center sm:justify-start w-full">
          Təqaüdlər <img src={arrow} alt="arrow" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
          {features.map((feature, index) => (
            <EducationCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;