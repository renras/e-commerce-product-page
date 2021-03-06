import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

import Cart from "../Cart/Cart";
import Nav from "./Nav";
import logo from "../../images/logo.svg";
import Menu from "../Menu/Menu";
import CartContent from "../CartContent/CartContent";
import avatar from "../../images/image-avatar.png";
import Avatar from "../../Components/Avatar/Avatar";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const totalItems: number = useAppSelector((state) => state.app.totalItems);
  const showCartContent: boolean = useAppSelector(
    (state) => state.app.showCartContent
  );

  const openNavDrawer = (): void => {
    dispatch(appActions.showNavDrawer());
  };

  const showCart = (): void => {
    dispatch(appActions.showCart());
  };

  return (
    <header className="flex items-center p-6 relative  max-w-screen-2xl lg:w-9/12 lg:border-b-2 lg:border-light-grayish-blue lg:m-auto lg:py-0 lg:h-28">
      <Menu clickHandler={openNavDrawer} />
      <img className="absolute left-14 md:static" src={logo} alt="logo" />
      <Nav />
      <div className="flex items-center gap-8 ml-auto">
        <div className="mt-2 relative">
          <Cart clickHandler={showCart} />
          {totalItems > 0 && (
            <p className="absolute bottom-4 left-3.5  text-xs bg-orange text-white px-2 rounded-xl">
              {totalItems}
            </p>
          )}
          {showCartContent && <CartContent />}
        </div>
        <Avatar img={avatar} />
      </div>
    </header>
  );
};

export default Navbar;
