import { useAppDispatch } from '../../store/hooks';

import closeIcon from '../../images/icon-close.svg';
import { appActions } from '../../store/appSlice';

const CloseButton = () => {
  const dispatch = useAppDispatch();

  const showLightBox = (): void => {
    dispatch(appActions.closeLightBox());
  };
  return (
    <button onClick={showLightBox} className='self-end'>
      <img className='w-6' src={closeIcon} alt='close_button' />
    </button>
  );
};

export default CloseButton;
