import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [modalOpened, setModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const handleImgClick = async (imgsrc) => {
    setModalImg(null);
    setModalOpened(true);
    try {
      setLoading(true);
      const resp = await fetch(imgsrc);
      if (resp.url) {
        setModalImg(resp.url);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
    setModalImg(imgsrc);
  };

  return (
    <ModalContext.Provider
      value={{
        modalOpened,
        setModalOpened,
        modalImg,
        setModalImg,
        handleImgClick,
        loading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
