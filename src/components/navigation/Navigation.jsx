import {
  GraduationCap,
  Hammer,
  SquareGanttChart,
  SwatchBook,
} from "lucide-react";
import Wrapper from "../utilities/Wrapper";

const navigationItems = [
  {
    id: 2,
    name: "Навыки",
    link: "skills",
    icon: <Hammer />,
  },
  {
    id: 3,
    name: "Примеры работ",
    link: "examples",
    icon: <SwatchBook />,
  },
  {
    id: 1,
    name: "Опыт",
    link: "experience",
    icon: <SquareGanttChart />,
  },
  {
    id: 4,
    name: "Образование",
    link: "education",
    icon: <GraduationCap />,
  },
];

function Navigation() {
  return (
    <nav id="navigation" className="pt-4 pb-8">
      <Wrapper>
        <ul className="flex justify-between gap-4">
          {navigationItems.map((navItem) => (
            <li key={navItem.id}>
              <button
                className="hover:underline flex gap-2"
                onClick={() => {
                  const target = document.getElementById(`${navItem.link}`);
                  target?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span
                  className="hover:scale-[115%] transition-all"
                  title={navItem.name}
                >
                  {navItem.icon}
                </span>
                <span className="hidden lg:inline">{navItem.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </Wrapper>
    </nav>
  );
}

export default Navigation;
