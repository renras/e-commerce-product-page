import lightCart from "../../images/icon-cart-light.svg";

import useFetch from "./useAddtoCartButton";

const AddToCartButton = () => {
  const { addToCart } = useFetch();

  return (
    <button
      onClick={addToCart}
      className="lg:col-start-2 lg:col-span-2 xs:mt-2 lg:mt-0 xs:flex xs: justify-center xs:items-center xs:bg-orange xs:gap-4 xs:px-14 xs:rounded-lg xs:hover:bg-pale-orange xs:col-start-1 xs:col-span-2 xs:py-4 lg:py-0 lg:h-12 lg:px-0"
    >
      <img className="fill-white w-4 lg:w-3" src={lightCart} alt="cartIcon" />
      <p className="xs:text-white xs:font-bold xs:text-lg xs:tracking-wide lg:text-xs">
        Add to cart
      </p>
    </button>
  );
};

export default AddToCartButton;
