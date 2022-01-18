interface Props {
  clickHandler?: () => any;
}

const Button = ({ clickHandler }: Props) => {
  return (
    <button
      onClick={clickHandler}
      className="border text-base font-bold bg-orange text-white rounded-lg py-4"
    >
      Checkout
    </button>
  );
};

export default Button;
