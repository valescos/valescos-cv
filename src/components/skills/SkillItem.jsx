import { ChevronRight } from "lucide-react";
import { useState } from "react";

function SkillItem({ name, icon, details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <details className="h-full overflow-hidden rounded-md accent">
        <summary
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex justify-between"
        >
          <div className="w-full flex justify-between p-2">
            <ChevronRight
              className={
                isOpen
                  ? `transition-all transform ease-in-out	rotate-90`
                  : `transition-all transform ease-in-out	rotate-0`
              }
            />
            <h3 className="font-bold">{name}</h3>
            <span className="fill-white">{icon}</span>
          </div>
        </summary>
        <div className="bg-white text-black text-left p-4 rounded-b-md h-full">
          {details}
        </div>
      </details>
    </div>
  );
}
export default SkillItem;
