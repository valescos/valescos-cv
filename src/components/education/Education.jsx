import { useState } from "react";
import EducationItem from "./EducationItem";
import FilteredList from "../utilities/FilteredList";
import {
  LYCEUM_LOGO,
  STEPIK_BASIC_IMG,
  STEPIK_ADVANCED_IMG,
} from "../../images/Images";

function Education() {
  const defaultСategory = "Всё";
  const [currentCategory, setCurrentCategory] = useState(defaultСategory);

  const educationEntities = [
    {
      id: "001e",
      name: "Инженерный лицей НГТУ",
      date: "2002–2003",
      logo: LYCEUM_LOGO,
      category: "Очное",
    },
    {
      id: "003",
      name: "JavaScript Базовый уровень",
      date: "2024",
      img: STEPIK_BASIC_IMG,
      category: "Курсы",
    },
    {
      id: "004",
      name: "JavaScript Продвинутый уровень",
      date: "2024",
      img: STEPIK_ADVANCED_IMG,
      category: "Курсы",
    },
  ];

  return (
    <>
      <h2 className="text-white"></h2>
      <FilteredList
        defaultСategory={defaultСategory}
        category={educationEntities.map((entitity) => entitity.category)}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {educationEntities
          .filter(
            (entitity) =>
              currentCategory === entitity.category ||
              currentCategory === defaultСategory
          )
          .map((entitity) => (
            <EducationItem key={entitity.id} {...entitity} />
          ))}
      </div>
    </>
  );
}

export default Education;
