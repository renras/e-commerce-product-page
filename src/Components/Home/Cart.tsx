import { useAppSelector } from "../../store/hooks";
import CartItem from "./CartItem";

const Cart = () => {
  const cart: {
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
    id: number;
  }[] = useAppSelector((state) => state.app.cart);

  return (
    <div className="lg:hidden xs:shadow-2xl xs:rounded-md xs:bg-white xs:absolute xs:top-0 xs:z-10 xs:left-2 xs:right-2 xs:m-auto">
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
