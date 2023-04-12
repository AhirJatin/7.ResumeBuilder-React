import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerSection border-b-4 border-gray-100 py-3">
      <div className="container mx-auto">
        <div className=" flex items-center justify-between">
          <div>
            <Link
              className=" text-[20px] font-bold text-blue-500 sm:text-[26px]"
              to="/"
            >
              Resume Builder
            </Link>
          </div>
          <div>
            <nav className=" text-[16px] font-bold md:text-[20px]">
              <ul className="flex">
                <li className="">
                  <NavLink exact="true" activeclassname="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className=" ml-8">
                  <NavLink activeclassname="active" to="about">
                    About Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
