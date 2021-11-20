import productImage from "../../images/image-product-1.jpg";
import Thumbnails from "./Thumbnails";

const LeftSection = () => {
  return (
    <div className="xs:hidden lg:grid w-1/3 grid-cols-4 gap-6 auto-rows-max g gap-6">
      <img
        className="col-start-1 col-span-4 w-full h-auto rounded-xl"
        src={productImage}
        alt="productImage"
      />
      <Thumbnails />
    </div>
  );
};

export default LeftSection;
