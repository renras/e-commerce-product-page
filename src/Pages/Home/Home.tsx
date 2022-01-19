import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import FeaturedImage from "./FeaturedImage";

const Home = () => {
  return (
    <main className="xs:flex xs:flex-col xs:relative lg:justify-center lg:items-center lg:flex-row lg:gap-6 xl:gap-20 lg:mt-20 xl:pb-10">
      <FeaturedImage />
      <LeftSection />
      <RightSection />
    </main>
  );
};

export default Home;
