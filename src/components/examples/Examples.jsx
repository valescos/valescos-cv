import ImageSlider from "./ImageSlider";
import WebItems from "./WebItems";

function Examples() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="text-center background-secondary rounded-md">
        <h3 className="text-xl font-bold pb-4">WEB</h3>
        <WebItems />
      </div>
      <div className="text-center background-secondary rounded-md">
        <h3 className="text-xl font-bold pb-4">
          Вёрстка / дизайн (полиграфия)
        </h3>
        <ImageSlider />
      </div>
    </div>
  );
}

export default Examples;
