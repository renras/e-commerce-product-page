import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";

import useFetch from "./useProductQuantity";

const ProductQuantity = () => {
  const { currentValue, increment, decrement } = useFetch();

  return (
    <div className="mt-4 flex justify-between items-center bg-light-grayish-blue  rounded-lg col-start-1 col-span-2 lg:col-span-1 px-6 lg:px-3 py-4 lg:py-0 lg:h-12 lg:mt-0">
      <button onClick={decrement}>
        <img className="lg:w-2.5  " src={minusIcon} alt="minusIcon" />
      </button>
      <p className="font-bold text-very-very-dark-blue text-lg lg:text-base">
        {currentValue}
      </p>
      <button onClick={increment}>
        <img className="lg:w-2.5" src={plusIcon} alt="plusIcon" />
      </button>
    </div>
  );
};

export default ProductQuantity;
