import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { navMobileActions } from "../../store/navMobileSlice";

const useNavMobile = () => {
  const dispatch = useAppDispatch();
  const navList: string[] = ["Collections", "Men", "Women", "About", "Contact"];
  const showNavMobile: boolean = useAppSelector(
    (state) => state.navMobile.showNavMobile
  );

  const closeNavMobile = (): void => {
    dispatch(navMobileActions.showNavMobile());
  };

  return { navList, showNavMobile, closeNavMobile };
};

export default useNavMobile;
