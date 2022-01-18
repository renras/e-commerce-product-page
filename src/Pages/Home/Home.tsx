import { useAppSelector } from "../../store/hooks";

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import TopSection from "./TopSection";
import Cart from "./Cart";

const Home = () => {
  const showCart: boolean = useAppSelector(
    (state) => state.app.showCartContent
  );

  return (
    <main className="xs:flex xs:flex-col xs:relative lg:justify-center lg:items-center lg:flex-row lg:gap-6 xl:gap-20 lg:mt-20 xl:pb-10">
      {showCart && <Cart />}
      <TopSection />
      <LeftSection />
      <RightSection />
    </main>
  );
};

export default Home;
