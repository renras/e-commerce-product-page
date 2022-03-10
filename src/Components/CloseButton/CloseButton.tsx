import closeIcon from "../../images/icon-close.svg";

interface Props {
  onClick: () => void;
}

const CloseButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="self-end">
      <img className="w-6" src={closeIcon} alt="close_button" />
    </button>
  );
};

export default CloseButton;
