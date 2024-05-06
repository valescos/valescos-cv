import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { X } from "lucide-react";
import { RiseLoader } from "react-spinners";

function Modal() {
  const { modalOpened, setModalOpened, modalImg, loading } =
    useContext(ModalContext);

  const override = {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-15px",
    marginLeft: "-50px",
  };

  return modalOpened
    ? createPortal(
        <>
          <div
            onClick={() => setModalOpened(false)}
            className="fixed top-0 left-0 right-0 bottom-0 z-70 bg-[rgba(0,0,0,0.85)]"
          />
          <div>
            {loading && (
              <RiseLoader color="white" cssOverride={override} size={20} />
            )}
            {modalImg && (
              <img
                className="m-auto fixed inset-0 z-80 max-w-[90%] max-h-[90%]"
                src={modalImg}
                alt="modal"
              />
            )}
          </div>
          <button
            className="fixed z-40 top-4 right-4 hover:scale-125 transition-all"
            onClick={() => setModalOpened(false)}
          >
            <X size={60} className="stroke-highlight" />
          </button>
        </>,
        document.getElementById("portal")
      )
    : null;
}

export default Modal;
