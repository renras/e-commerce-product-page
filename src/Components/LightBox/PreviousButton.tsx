import { useAppDispatch } from '../../store/hooks';
import { appActions } from '../../store/appSlice';

import previousIcon from '../../images/icon-previous.svg';

interface Props {
  marginLeft: string;
}

const PreviousButton = ({ marginLeft }: Props) => {
  const dispatch = useAppDispatch();

  const decrementActiveThumbnailIndex = (): void => {
    dispatch(appActions.decrementActiveThumbnailIndex());
  };

  return (
    <button
      onClick={decrementActiveThumbnailIndex}
      className={`w-12 h-12 absolute  ${marginLeft} top-1/2 transform -translate-y-1/2 rounded-full bg-white`}
    >
      <div className='relative h-full w-full'>
        <img
          className='absolute top-0 left-0 right-1 bottom-0 m-auto'
          src={previousIcon}
          alt={previousIcon}
        />
      </div>
    </button>
  );
};

export default PreviousButton;
