import { useAppSelector } from "./store/hooks";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import LightBox from "./Components/LightBox/LightBox";
import NavMobile from "./Components/Navbar/NavMobile";

function App() {
  const showLightBox: boolean = useAppSelector(
    (state) => state.app.showLightBox
  );

  return (
    <>
      <NavMobile />
      <Navbar />
      <Home />
      {showLightBox && <LightBox />}
    </>
  );
}

export default App;
