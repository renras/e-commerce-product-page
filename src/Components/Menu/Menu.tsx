import menu from "../../images/icon-menu.svg";

interface Props {
  clickHandler: () => any;
}

const Menu = ({ clickHandler }: Props) => {
  return (
    <button className="sm:hidden" onClick={clickHandler}>
      <img className="w-4" src={menu} alt={menu} />
    </button>
  );
};

export default Menu;
