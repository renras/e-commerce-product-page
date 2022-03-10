import ReactDOM from "react-dom";

const LogIn = () => {
  return ReactDOM.createPortal(
    <div>Hello</div>,
    document.getElementById("login") as HTMLElement
  );
};

export default LogIn;
