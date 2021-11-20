import { useAppDispatch } from '../../store/hooks';
import { appActions } from '../../store/appSlice';

import nextIcon from '../../images/icon-next.svg';

interface Props {
  marginRight: string;
}

const NextButton = ({ marginRight }: Props) => {
  const dispatch = useAppDispatch();

  const incrementActiveThumbnailIndex = (): void => {
    dispatch(appActions.incrementActiveThumbnailIndex());
  };

  return (
    <button
      onClick={incrementActiveThumbnailIndex}
      className={`w-12 h-12 absolute  ${marginRight} top-1/2 transform -translate-y-1/2 rounded-full bg-white`}
    >
      <div className='relative h-full w-full'>
        <img
          className='absolute top-0 left-1 right-0 bottom-0 m-auto'
          src={nextIcon}
          alt='nextIcon'
        />
      </div>
    </button>
  );
};

export default NextButton;
