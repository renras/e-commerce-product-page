import { useAppDispatch } from "../../store/hooks";
import { navMobileActions } from "../../store/navMobileSlice";

import avatar from "../../images/image-avatar.png";
import CartIcon from "./CartIcon";
import Nav from "./Nav";
import menu from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const openNavMobile = (): void => {
    dispatch(navMobileActions.showNavMobile());
  };
  return (
    <header className="flex items-center p-6 relative lg:w-9/12 xl:w-10/12 lg:border-b-2 lg:border-light-grayish-blue lg:m-auto lg:py-0 lg:h-28">
      <button className="lg:hidden" onClick={openNavMobile}>
        <img className="w-4" src={menu} alt={menu} />
      </button>
      <img className="absolute left-14 lg:static" src={logo} alt="logo" />
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
