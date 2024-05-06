import { useEffect, useState } from "react";
import {
  FIGMA_ICON,
  REDUX_ICON,
  PHOTOSHOP_ICON,
  REACT_ICON,
  CDR_ICON,
  ILLUSTRATOR_ICON,
  INDESING_ICON,
  TAILWIND_ICON,
  CSS_ICON,
  JAVASCRIP_ICON,
  HTML_ICON,
  UNION_JACK_ICON,
  VUE_JS_ICON,
  TYPE_SCRIPT_ICON,
} from "../../icons/Icons";
import SkillItem from "./SkillItem";
import FilteredList from "../utilities/FilteredList";

function Skills() {
  const defaultСategory = "Все";
  const [currentCategory, setCurrentCategory] = useState(defaultСategory);

  const skills = [
    {
      id: "005s",
      name: "Figma",
      icon: FIGMA_ICON,
      category: "WEB-Разработка",
      details: (
        <div>
          Знаком с сервисом <strong>Figma</strong> — выполнял тренировочные
          задания по вёрстке сайтов в процессе изучения HTML и CSS.
        </div>
      ),
    },
    {
      id: "006s",
      name: "HTML",
      icon: HTML_ICON,
      category: "WEB-Разработка",
      details: (
        <div>
          Хорошо знаком с <strong>HTML</strong>. Имею представление о
          синтаксисе, основных принципах и стандартах этого языка.
        </div>
      ),
    },
    {
      id: "007s",
      name: "CSS",
      icon: CSS_ICON,
      category: "WEB-Разработка",
      details: (
        <div>
          Хорошо знаком с <strong>СSS</strong>. Имею представление о синтаксисе
          и основных принципах этого языка.
        </div>
      ),
    },
    {
      id: "008s",
      name: "JavaScript",
      icon: JAVASCRIP_ICON,
      category: "WEB-Разработка",
      details: (
        <div>
          Хорошо знаю основы <strong>JavaScript</strong>. Продолжаю углублять
          свои знания по мере практической необходимости.
        </div>
      ),
    },
    {
      id: "009s",
      name: "React",
      icon: REACT_ICON,
      category: "WEB-Разработка",
      details: (
        <div>
          Экосистема <strong>React</strong>'a — основной курс моего
          самообразования на данный момент. Все мои тренировочные и любительские
          проекты (включая данное резюме) собираются в этом фреймворке.
        </div>
      ),
    },
    {
      id: "010s",
      name: "Redux",
      category: "WEB-Разработка",
      icon: REDUX_ICON,
      details: (
        <div>
          Знаком с библиотекой <strong>Redux</strong>. Использовал redux-toolkit
          в одном из учебных проектов.
        </div>
      ),
    },
    {
      id: "011s",
      name: "Tailwind",
      category: "WEB-Разработка",
      icon: TAILWIND_ICON,
      details: (
        <div>
          Фреймворк <strong>Tailwind</strong> — мой любимый (на данный момент)
          способ написания CSS. 
        </div>
      ),
    },
    {
      id: "001s",
      name: "Adobe Photoshop",
      icon: PHOTOSHOP_ICON,
      category: "Полиграфия",
      details: (
        <div>
          Хорошо владею растровым редактором <strong>Adobe Photoshop</strong>.
          Имею большой опыт как ретуши и цветокоррекции фотографий, так и
          разработки/правки рекламных макетов для печати.
        </div>
      ),
    },
    {
      id: "002s",
      name: "Adobe Illustrator",
      category: "Полиграфия",
      icon: ILLUSTRATOR_ICON,
      details: (
        <div>
          Знаком с векторным редактором <strong>Adobe Illustrator</strong>.
          Использовал его для правки и редактирования готовых макетов.
        </div>
      ),
    },
    {
      id: "003s",
      name: "Adobe InDesign",
      category: "Полиграфия",
      icon: INDESING_ICON,
      details: (
        <div>
          Хорошо владею <strong>Adobe InDesign</strong>. Имею более 12 лет опыта
          вёрстки многостраничных периодических изданий: газет, журналов,
          справочников.
        </div>
      ),
    },
    {
      id: "004s",
      name: "CorelDRAW",
      category: "Полиграфия",
      icon: CDR_ICON,
      details: (
        <div>
          Хорошо владею векторным редактором <strong>CorelDRAW</strong>. Имею
          большой опыт разработки и коррекции полиграфических рекламных макетов
          любой сложности.
        </div>
      ),
    },
    {
      id: "004",
      name: "Английский язык",
      category: "Общие",
      icon: UNION_JACK_ICON,
      details: (
        <div>
          Знаю английский язык на уровне{" "}
          <a
            className="text-[#1467b5] underline hover:text-[#0384fc]"
            href="https://cert.efset.org/KMApSj"
          >
            <strong>C2 Proficient</strong>
          </a>
        </div>
      ),
    },
    {
      id: "012s",
      name: "Vue.js",
      category: "WEB-Разработка",
      icon: VUE_JS_ICON,
      details: (
        <div>
          Знаком с базовыми принципами и конструкциями фреймворка{" "}
          <strong>Vue.js</strong> — выполнял на нём тестовое задание.
        </div>
      ),
    },
    {
      id: "013s",
      name: "TypeScript",
      category: "WEB-Разработка",
      icon: TYPE_SCRIPT_ICON,
      details: (
        <div>
          Знаком с базовыми принципами языка <strong>TypeScript</strong> —
          выполнял на нём тестовое задание.
        </div>
      ),
    },
  ];

  useEffect(() => {
    setCurrentCategory("WEB-Разработка");
  }, []);

  return (
    <>
      <FilteredList
        defaultСategory={defaultСategory}
        category={skills.map((skill) => skill.category)}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills
          .filter(
            (skill) =>
              currentCategory === skill.category ||
              currentCategory === defaultСategory
          )
          .map((skill) => (
            <SkillItem key={skill.id} {...skill} />
          ))}
      </div>
    </>
  );
}

export default Skills;
