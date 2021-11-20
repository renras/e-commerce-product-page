import useFetch from "./useLightBox";

import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import Thumbnails from "./Thumbnails";
import CloseButton from "./CloseButton";

const LightBox = () => {
  const { fullImages, activeThumbnailIndex } = useFetch();

  return (
    <section className="fixed top-0 left-0 bottom-0 h-full w-full flex items-center justify-center bg-black bg-opacity-70">
      <div className="flex flex-col gap-6 w-1/3">
        <CloseButton />
        <div className="flex flex-row relative">
          <PreviousButton marginLeft="-left-6" />
          <img
            className="rounded-xl"
            src={fullImages[activeThumbnailIndex]}
            alt="shoes"
          />
          <NextButton marginRight="-right-6" />
        </div>
        <div className="flex flex-row justify-center gap-8">
          <Thumbnails />
        </div>
      </div>
    </section>
  );
};

export default LightBox;
