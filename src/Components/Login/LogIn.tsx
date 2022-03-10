import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import CloseButton from "../CloseButton/CloseButton";
import { useAppDispatch } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

type FormData = {
  username: string;
  password: string;
};

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useAppDispatch();

  const closeLoginForm = () => {
    dispatch(appActions.toggleLoginForm());
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return ReactDOM.createPortal(
    <div className="fixed w-full h-full bg-black z-50 flex justify-center items-center">
      <div className="flex flex-col w-80 gap-4">
        <CloseButton onClick={closeLoginForm} className="self-end" />
        <form className="flex flex-col gap-2 w-full bg-white px-4 py-8 rounded items-center">
          <input
            className="border-2 border-black p-2"
            type="text"
            placeholder="username"
            {...register("username")}
          />
          <input
            className="border-2 border-black p-2"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <button
            className="border-2 border-black py-0.5 px-2 rounded mt-8"
            type="submit"
            onClick={onSubmit}
          >
            Log In
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("login") as HTMLElement
  );
};

export default LogIn;
