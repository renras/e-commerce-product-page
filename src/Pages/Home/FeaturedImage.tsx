import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

import PreviousButton from "../../Components/PreviousButton/PreviousButton";

const FeaturedImage = () => {
  const dispatch = useAppDispatch();
  const fullImages: string[] = useAppSelector(
    (state) => state.app.products[0].fullimages
  );

  const activeThumbnailIndex: number = useAppSelector(
    (state) => state.app.activeThumbnailIndex
  );

  const decrementActiveThumbnailIndex = (): void => {
    dispatch(appActions.decrementActiveThumbnailIndex());
  };

  const incrementActiveThumbnailIndex = (): void => {
    dispatch(appActions.incrementActiveThumbnailIndex());
  };

  return (
    <section className="relative">
      <PreviousButton
        className="left-2"
        clickHandler={decrementActiveThumbnailIndex}
      />
      <img
        className="w-full"
        src={fullImages[activeThumbnailIndex]}
        alt="shoe"
      />
      <PreviousButton
        className="right-2 rotate-180"
        clickHandler={incrementActiveThumbnailIndex}
      />
    </section>
  );
};

export default FeaturedImage;
