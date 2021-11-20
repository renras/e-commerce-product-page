import closeIcon from "../../images/icon-close-light.svg";
import useFetch from "./useNavMobile";

const NavMobile = () => {
  const { showNavMobile, closeNavMobile, navList } = useFetch();

  return (
    <div
      className={`${
        !showNavMobile ? "xs:w-0 overflow-hidden" : "xs:w-full"
      } xs:absolute xs:left-0 xs:h-screen xs:z-10 bg-black`}
    >
      <nav
        className={`${
          !showNavMobile ? "xs:w-0 overflow-hidden" : "xs:w-9/12"
        } xs:bg-white xs:h-screen xs:p-6 xs:transition-all xs:duration-700`}
      >
        <button onClick={closeNavMobile}>
          <img src={closeIcon} alt="close" />
        </button>
        <ul className="xs:mt-12 flex flex-col gap-6">
          {navList.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className="xs:font-bold xs:text-very-dark-blue xs:text-xl"
                  href="/"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavMobile;
