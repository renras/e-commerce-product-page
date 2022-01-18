import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

const useFetch = () => {
  const productQuantity = useAppSelector(
    (state) => state.productQuantity.currentValue
  );
  const dispatch = useAppDispatch();

  const addToCart = () => {
    if (productQuantity === 0) {
      return;
    }
    dispatch(
      appActions.addToCart({
        quantity: productQuantity,
        id: new Date().getTime(),
      })
    );
  };

  return { addToCart };
};

export default useFetch;
