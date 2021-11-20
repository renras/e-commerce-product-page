import deleteIcon from "../../images/icon-delete.svg";
import useFetch from "./useCart";

interface Props {
  item: {
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
    id: number;
  };
}

const CartItem = ({ item }: Props) => {
  const { removeItem } = useFetch();

  return (
    <div key={item.id}>
      <div className="flex items-center justify-between">
        <img className="w-16 rounded-lg" src={item.thumbnail} alt="shoes" />
        <div className="flex flex-col text-dark-grayish-blue text-lg">
          <p>{item.title}</p>
          <p>
            ${item.price.toFixed(2)} x {item.quantity}{" "}
            <span className="font-bold text-very-very-dark-blue">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </p>
        </div>
        <button onClick={() => removeItem(item.id)}>
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
