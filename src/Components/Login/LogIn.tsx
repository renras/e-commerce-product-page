import ReactDOM from "react-dom";

const LogIn = () => {
  return ReactDOM.createPortal(
    <div className="fixed w-full h-full bg-black z-50 flex justify-center items-center">
      <div className="w-80 h-80 bg-white">form</div>
    </div>,
    document.getElementById("login") as HTMLElement
  );
};

export default LogIn;
