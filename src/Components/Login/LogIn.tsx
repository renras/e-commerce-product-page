import ReactDOM from "react-dom";

import CloseButton from "../CloseButton/CloseButton";
import { useAppDispatch } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

const LogIn = () => {
  const dispatch = useAppDispatch();

  const closeLoginForm = () => {
    dispatch(appActions.toggleLoginForm());
  };

  return ReactDOM.createPortal(
    <div className="fixed w-full h-full bg-black z-50 flex justify-center items-center">
      <div className="flex flex-col w-80 gap-4">
        <CloseButton onClick={closeLoginForm} className="self-end" />
        <div className="w-full h-80 bg-white">form</div>
      </div>
    </div>,
    document.getElementById("login") as HTMLElement
  );
};

export default LogIn;
