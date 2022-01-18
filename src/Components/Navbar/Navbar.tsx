import { useAppDispatch } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

import avatar from "../../images/image-avatar.png";
import CartIcon from "./CartIcon";
import Nav from "./Nav";
import logo from "../../images/logo.svg";
import Menu from "../Menu/Menu";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const openNavDrawer = (): void => {
    dispatch(appActions.showNavDrawer());
  };

  return (
    <header className="flex items-center p-6 relative  max-w-screen-2xl lg:w-9/12 lg:border-b-2 lg:border-light-grayish-blue lg:m-auto lg:py-0 lg:h-28">
      <Menu clickHandler={openNavDrawer} />
      <img className="absolute left-14 md:static" src={logo} alt="logo" />
      <Nav />
      <div className="flex items-center gap-8 ml-auto">
        <CartIcon />
        <img
          className="w-8 lg:w-12 border-2 rounded-full border-opacity-0 border-orange hover:border-opacity-100"
          src={avatar}
          alt="profile-avatar"
        />
      </div>
    </header>
  );
};

export default Navbar;
