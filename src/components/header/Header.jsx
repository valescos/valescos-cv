import Wrapper from "../utilities/Wrapper";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { AVATAR_IMG } from "../../images/Images";
import {
  WHATSUP_ICON,
  EMAIL_ICON,
  TELEGRAMM_ICON,
  GITHUB_ICON,
} from "../../icons/Icons";

function Header() {
  const { handleImgClick } = useContext(ModalContext);

  return (
    <header className="pt-8 pb-8">
      <Wrapper>
        <div className="flex gap-8 flex-col sm:flex-row justify-center items-center">
          <div className="w-48 h-48 rounded-full relative overflow-hidden border-white border-4 hover:border-highlight">
            <img
              className="cursor-zoom-in accent"
              src={AVATAR_IMG.linkSm}
              alt="Фото"
              onClick={() => handleImgClick(AVATAR_IMG.linkLg)}
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold">Валентин Косарев</h3>
            <p className="text-lg">junior frontend разработчик,</p>
            <p className="text-lg">html-верстальщик</p>
            <div className="flex flex-col gap-2 pt-2 items-center sm:items-start">
              <div className="flex gap-2 font-bold  items-center">
                <a
                  className="hover:scale-125 transition-all stroke-white fill-white"
                  href="https://github.com/valescos"
                >
                  {GITHUB_ICON}
                </a>
                <a
                  className="hover:underline"
                  href="https://github.com/valescos"
                >
                  Valescos
                </a>
              </div>
              <div className="font-bold  items-end">
                <a
                  className="flex gap-2 items-center"
                  href="mailto:valescos1986@gmail.com"
                >
                  <span className=" hover:scale-125 transition-all">
                    {EMAIL_ICON}
                  </span>
                  <span className="hover:underline">
                    valescos1986@gmail.com
                  </span>
                </a>
              </div>
              <div className="flex gap-2 font-bold  items-center">
                <a
                  className="hover:scale-125 transition-all"
                  href="https://wa.me/79134862478"
                >
                  {WHATSUP_ICON}
                </a>
                <a
                  className="hover:scale-125 transition-all"
                  href="https://t.me/Valescos"
                >
                  {TELEGRAMM_ICON}
                </a>
                <a className="hover:underline" href="tel:+79134862478">
                  +7 913 486 24 78
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
