import { ChevronRight } from "lucide-react";
import Wrapper from "./Wrapper";
import { useState } from "react";

function Section({ children, collapsed = false, title, id }) {
  const [sectionCollapsed, setCollapsed] = useState(collapsed);

  return (
    <div
      className={sectionCollapsed ? "pt-4 pb-2" : "pt-2 sm:pt-4 pb-8 sm:pb-16"}
    >
      <Wrapper>
        {title && (
          <div id={id} className={sectionCollapsed ? "" : "pb-8  "}>
            <div className="transition-all flex justify-center md:justify-normal items-center">
              <ChevronRight
                size={36}
                onClick={() => setCollapsed(!sectionCollapsed)}
                className={
                  sectionCollapsed
                    ? `cursor-pointer transition-all transform ease-in-out rotate-0 `
                    : `cursor-pointer transition-all transform ease-in-out rotate-90 opacity-15`
                }
              />
              <h2
                onClick={() => setCollapsed(!sectionCollapsed)}
                className={
                  sectionCollapsed
                    ? "text-3xl md:text-4xl font-thin cursor-pointer opacity-15 transition-all"
                    : "text-3xl md:text-4xl font-thin cursor-pointer transition-all tracking-wide"
                }
              >
                {title}
              </h2>
            </div>
          </div>
        )}
        <div className={sectionCollapsed ? `hidden` : ""}>{children}</div>
      </Wrapper>
    </div>
  );
}

export default Section;
