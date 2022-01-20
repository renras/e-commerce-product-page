import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

import PreviousButton from "../../Components/PreviousButton/PreviousButton";
import Thumbnails from "../Home/Thumbnails";

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

  const showLightBox = (index: number): void => {
    dispatch(appActions.showLightBox(index));
  };

  return (
    <section className="relative lg:grid lg:w-1/3 lg:grid-cols-4 lg:gap-6 lg:auto-rows-max">
      <PreviousButton
        className="left-2 lg:hidden"
        clickHandler={decrementActiveThumbnailIndex}
      />
      <img
        onClick={() => showLightBox(activeThumbnailIndex)}
        className="w-full lg:col-start-1 lg:col-span-4 lg:w-full lg:h-auto lg:rounded-xl"
        src={fullImages[activeThumbnailIndex]}
        alt="shoe"
      />
      <PreviousButton
        className="right-2 rotate-180 lg:hidden"
        clickHandler={incrementActiveThumbnailIndex}
      />
      <Thumbnails />
    </section>
  );
};

export default FeaturedImage;
