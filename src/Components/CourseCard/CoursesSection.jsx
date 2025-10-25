import { PenTool, LayoutGrid, Monitor } from "lucide-react";
import arrow from "../../assets/icons/arrow.svg";
import graficDesign from "../../assets/icons/graficDesign.svg";
import uxUi from "../../assets/icons/ux-ui.svg";
import frontend from "../../assets/icons/frontend.svg";
import backend from "../../assets/icons/backend.svg";
import dataAnalytics from "../../assets/icons/data-analytics.svg";
import qa from "../../assets/icons/qa.svg";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses = [
    {
      title: "Qrafik Dizayn",
      subtitle: "Adobe Photoshop/ Illustrator",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      icon: graficDesign,
    },
    {
      title: "UX/UI Dizayn",
      subtitle: "Adobe Photoshop/ Illustrator",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      icon: uxUi,
    },
    {
      title: "Frontend",
      subtitle: "Adobe Photoshop/ Illustrator",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      icon: frontend,
    },
    {
      title: "Backend",
      subtitle: "Adobe Photoshop/ Illustrator",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      icon: backend,
    },
    {
      title: "Data Analitika",
      subtitle: "Adobe Photoshop/ Illustrator",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      icon: dataAnalytics,
    },
    {
      title: "QA",
      subtitle: "Adobe Photoshop/ Illustrator",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      icon: qa,
    },
  ];

  return (
    <section className="w-full flex items-center justify-center mt-[120px]">
        <div className="w-[87%] flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-semibold text-[#023047] mb-2 flex items-center gap-2 justify-center sm:justify-start w-full">
            Kurslarımız <img src={arrow} alt="arrow" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[23px] w-full justify-center sm:justify-start">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default CoursesSection;