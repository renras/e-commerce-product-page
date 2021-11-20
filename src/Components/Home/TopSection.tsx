import { useAppSelector } from '../../store/hooks';
import PreviousButton from '../LightBox/PreviousButton';
import NextButton from '../LightBox/NextButton';

const TopSection = () => {
  const fullImages: string[] = useAppSelector(
    (state) => state.app.products[0].fullimages
  );

  const activeThumbnailIndex: number = useAppSelector(
    (state) => state.app.activeThumbnailIndex
  );

  return (
    <section className='xs:relative xs:m-auto lg:hidden'>
      <PreviousButton marginLeft='xs:left-4' />
      <img src={fullImages[activeThumbnailIndex]} alt='shoe' />
      <NextButton marginRight='xs:right-4' />
    </section>
  );
};

export default TopSection;
