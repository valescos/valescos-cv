import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

function EducationItem({ name, img, logo, date }) {
  const { handleImgClick } = useContext(ModalContext);
  const imgageOrLogo = img ? img : logo ? logo : null;

  return (
    <div className="border-2 rounded-md p-4 flex flex-row gap-4 justify-between items-stretch">
      <div className="flex flex-col gap-4 text-left justify-between items-start">
        <h3 className="text-lg">{name}</h3>
        <p className="items-end accent px-4 py-2 rounded-md text-white font-bold">
          {date}
        </p>
      </div>
      <img
        onClick={img ? () => handleImgClick(img.linkLg) : null}
        className={
          img
            ? `self-center cursor-zoom-in max-h-[6rem] max-w-[9rem] sm:max-h-[9rem] sm:max-w-[12rem]  border-4 hover:border-highlight border-white transition-all`
            : `bg-white self-center rounded-full max-h-[6rem] max-w-[9rem] sm:max-h-[9rem] sm:max-w-[12rem] p-2 transition-all`
        }
        src={imgageOrLogo.linkSm}
        alt=""
      />
    </div>
  );
}

export default EducationItem;
