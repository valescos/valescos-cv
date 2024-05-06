import { useContext, useState } from "react";
import {
  EXAMPLE_1_IMG,
  EXAMPLE_2_IMG,
  EXAMPLE_3_IMG,
  EXAMPLE_4_IMG,
  EXAMPLE_5_IMG,
  EXAMPLE_6_IMG,
  EXAMPLE_7_IMG,
  EXAMPLE_8_IMG,
  EXAMPLE_9_IMG,
} from "../../images/Images";
import { ChevronLeft, ChevronRight, Circle, Dot } from "lucide-react";
import { ModalContext } from "../../contexts/ModalContext";

function ImageSlider() {
  const [currentSlideIndex, setCurrenSlideIndex] = useState(0);

  const EXAMPLES = [
    EXAMPLE_1_IMG,
    EXAMPLE_2_IMG,
    EXAMPLE_3_IMG,
    EXAMPLE_4_IMG,
    EXAMPLE_5_IMG,
    EXAMPLE_6_IMG,
    EXAMPLE_7_IMG,
    EXAMPLE_8_IMG,
    EXAMPLE_9_IMG,
  ];

  const { handleImgClick } = useContext(ModalContext);

  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="flex relative justify-evenly px-8 pt-4 pb-8">
          <button
            type="button"
            disabled={currentSlideIndex === 0}
            className="transition-all enabled:hover:scale-125 [&>*]:disabled:opacity-15 disabled:cursor-not-allowed"
            onClick={() => {
              setCurrenSlideIndex(currentSlideIndex - 1);
            }}
          >
            <ChevronLeft size={48} />
          </button>
          <div className="flex w-[246px] overflow-hidden">
            {EXAMPLES.map((example) => (
              <img
                onClick={() => handleImgClick(example.linkLg)}
                key={example.id}
                src={example.linkSm}
                className="transition-all cursor-zoom-in border-4 border-white hover:border-highlight"
                style={{ translate: `${-100 * currentSlideIndex}%` }}
              />
            ))}
          </div>
          <button
            type="button"
            disabled={currentSlideIndex === EXAMPLES.length - 1}
            className="transition-all enabled:hover:scale-125 [&>*]:disabled:opacity-15 disabled:cursor-not-allowed"
            onClick={() => {
              setCurrenSlideIndex(currentSlideIndex + 1);
            }}
          >
            <ChevronRight size={48} />
          </button>
        </div>
        <div className="flex justify-center flex-wrap px-6 gap-1">
          {EXAMPLES.map((example, index) => (
            <button
              key={example.id}
              onClick={() => {
                setCurrenSlideIndex(index);
              }}
            >
              {currentSlideIndex === index ? (
                <div>
                  <Circle className="size-6 fill-secondary stroke-highlight hover:scale-110 transition-all" />
                </div>
              ) : (
                <Circle className="size-6 hover:scale-110 stroke-whitetransition-all" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
