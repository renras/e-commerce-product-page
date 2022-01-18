import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { productQuantityActions } from "../../store/productQuantity";

const useFetch = () => {
  const currentValue: number = useAppSelector(
    (state) => state.productQuantity.currentValue
  );
  const dispatch = useAppDispatch();

  const increment = (): void => {
    dispatch(productQuantityActions.increment());
  };

  const decrement = (): void => {
    dispatch(productQuantityActions.decrement());
  };

  return { currentValue, increment, decrement };
};

export default useFetch;
