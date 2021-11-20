import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { cartActions } from '../../store/cartSlice';

import cart from '../../images/icon-cart.svg';
import Cart from './Cart';

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const totalItems: number = useAppSelector((state) => state.app.totalItems);
  const showCartStatus: boolean = useAppSelector(
    (state) => state.cart.showCart
  );

  const showCart = (): void => {
    dispatch(cartActions.showCart());
  };

  return (
    <div className='mt-2 relative'>
      <button onClick={showCart}>
        <img className='w-6' src={cart} alt='cart' />
        {totalItems > 0 && (
          <p className='absolute bottom-4 left-3.5  text-xs bg-orange text-white px-2 rounded-xl'>
            {totalItems}
          </p>
        )}
      </button>
      {showCartStatus && <Cart />}
    </div>
  );
};

export default CartIcon;
