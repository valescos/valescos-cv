import { WHATSUP_ICON } from "../../icons/Icons";
import { EMAIL_ICON } from "../../icons/Icons";
import { TELEGRAMM_ICON } from "../../icons/Icons";
import Wrapper from "../utilities/Wrapper";

function Footer() {
  return (
    <footer id="contactme" className="pt-12 pb-16">
      <Wrapper>
        <div className="flex flex-col gap-2 justify-between items-center sm:flex-row">
          <div className="flex gap-2 font-bold  items-center order-1">
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
          <div className="font-bold  items-end order-3">
            <a
              className="flex gap-2 items-center"
              href="mailto:valescos1986@gmail.com"
            >
              <span className=" hover:scale-125 transition-all">
                {EMAIL_ICON}
              </span>
              <span className="hover:underline">valescos1986@gmail.com</span>
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
