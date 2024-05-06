import { ChevronRight } from "lucide-react";
import { useState } from "react";

function WebItem({ name, icon, details, link, stack }) {
  const [isOpen, setIsOpen] = useState(false);

  function getLinkName(string) {
    return string.startsWith("https://") ? string.slice(8) : string.slice(7);
  }

  return (
    <div className="accent rounded-md">
      <details className="h-full overflow-hidden rounded-b-md">
        <summary
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex justify-between text-white"
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
            <span title={`${name}`}>{icon}</span>
          </div>
        </summary>

        <div className="bg-white text-left p-4 rounded-b-md h-full text-black">
          <div className="flex justify-center gap-2 pb-2">
            {stack && stack.map((tecnology) => <span>{tecnology}</span>)}
          </div>
          <p> {details}</p>
          <p className="flex justify-end pt-2">
            <a
              href={link}
              className="font-bold text-[#1467b5] underline hover:text-[#0384fc]"
            >
              {getLinkName(link)}
            </a>
          </p>
        </div>
      </details>
    </div>
  );
}

export default WebItem;
