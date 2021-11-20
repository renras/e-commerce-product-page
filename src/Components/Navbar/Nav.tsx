const Nav = () => {
  const navList: string[] = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav className="xs:hidden lg:block lg:h-full ml-10 xl:ml-16">
      <ul className="lg:flex gap-8 lg:h-full lg:items-center">
        {navList.map((item, index) => {
          return (
            <li
              className="lg:border-b-2 lg:border-orange lg:border-opacity-0 lg:h-full lg:flex lg:items-center lg:hover:border-opacity-100 text-dark-grayish-blue"
              key={index}
            >
              <a href="/">{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
