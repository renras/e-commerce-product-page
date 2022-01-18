import useFetch from "./useCart";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useFetch();

  return (
    <div className="xs:hidden w-96 shadow-2xl rounded-md bg-white absolute top-12 -right-48  z-10 lg:flex flex-col">
      <header className="border-b border-light-grayish-blue px-4 py-4">
        <h1 className="font-bold text-lg">Cart</h1>
      </header>
      <div className="flex flex-col px-6 gap-8 pt-6 pb-8">
        {cart.length > 0 ? (
          cart.map((item) => {
            return <CartItem item={item} />;
          })
        ) : (
          <div className="h-52 flex items-center justify-center text-dark-grayish-blue font-bold text-lg">
            <p>Your cart is empty.</p>
          </div>
        )}
        {cart.length > 0 && (
          <button className="border text-base font-bold bg-orange text-white rounded-lg py-4">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
