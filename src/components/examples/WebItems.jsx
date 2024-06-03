import {
  Footprints,
  GitCompareArrows,
  ListChecks,
  MessagesSquare,
  Table,
} from "lucide-react";
import WebItem from "./WebItem";
import {
  REACT_ICON,
  REDUX_ICON,
  JAVASCRIP_ICON,
  VUE_JS_ICON,
  TYPE_SCRIPT_ICON,
  TAILWIND_ICON,
  HTML_ICON,
  CSS_ICON,
} from "../../icons/Icons";

const WEB_ITEMS = [
  // {
  //   id: "001wi",
  //   name: "Доска объявлений",
  //   stack: [REACT_ICON, REDUX_ICON, JAVASCRIP_ICON],
  //   details: (
  //     <p>
  //       Учебный проект — месседжборд. База данных — Firestore. Размещен на
  //       хостинге Firebase.
  //     </p>
  //   ),
  //   icon: <MessagesSquare />,
  //   link: "https://valescos-project.web.app",
  // },
  // {
  //   id: "002wi",
  //   name: "ShoperList",
  //   stack: [JAVASCRIP_ICON, HTML_ICON, CSS_ICON],
  //   details: (
  //     <p>
  //       Простой составитель списков покупок. Сделан для практики в процесе
  //       обучения.
  //     </p>
  //   ),
  //   icon: <ListChecks />,
  //   link: "https://valescos.github.io",
  // },
  {
    id: "003wi",
    name: "Таблица",
    stack: [REACT_ICON, JAVASCRIP_ICON, TAILWIND_ICON],
    details: (
      <p>
        Интерактивная таблица с функциями добавления/удаления/сворачивания
        колонок и рядов, сортировки и поиска по значениям полей и
        выгрузки/загрузки информации в JSON. Сделана в качестве тестового
        задания.
      </p>
    ),
    icon: <Table />,
    link: "https://valescos-test-task-1.netlify.app",
  },
  {
    id: "004wi",
    name: "Страница сравнения товаров",
    stack: [VUE_JS_ICON, TYPE_SCRIPT_ICON, TAILWIND_ICON],
    details: (
      <p>
        Интерактивная cтраница сравнения товаров с функциями фильтрации и
        поиска. Сделана в качестве тестового задания.
      </p>
    ),
    icon: <GitCompareArrows />,
    link: "https://valescos-test-task-2.netlify.app",
  },
  {
    id: "005wi",
    name: "проЛапти",
    stack: [VUE_JS_ICON, TYPE_SCRIPT_ICON, TAILWIND_ICON],
    details: <p>Шуточный сайт, разработанный для тренировки.</p>,
    icon: <Footprints />,
    link: "https://valescos-practice-1.netlify.app",
  },
];

function WebItems() {
  return (
    <div className="py-4 flex flex-col gap-4 ">
      {WEB_ITEMS.map((webitem) => (
        <WebItem key={webitem.id} {...webitem} />
      ))}
    </div>
  );
}

export default WebItems;
