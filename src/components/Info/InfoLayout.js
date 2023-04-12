import { NavLink, Outlet } from "react-router-dom";

const InfoLayout = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
          <div className="flex max-h-[168px] flex-col justify-around text-center shadow-lg sm:flex-row sm:text-left lg:flex-col">
            <NavLink
              className="text border-b-gray-200 px-7 py-2 lg:border-b-2"
              activeclassname="active"
              to="/editInfo/personalInfo"
            >
              Personal Info
            </NavLink>
            <NavLink
              className="border-b-gray-200 px-7 py-2 lg:border-b-2"
              activeclassname="active"
              to="/editInfo/workExp"
            >
              Work Experience
            </NavLink>
            <NavLink
              className="border-b-gray-200 px-7 py-2 lg:border-b-2"
              activeclassname="active"
              to="/editInfo/education"
            >
              Education
            </NavLink>
            <NavLink
              className="border-b-gray-200 px-7 py-2 lg:border-b-2"
              activeclassname="active"
              to="/editInfo/keySkills"
            >
              Key Skills
            </NavLink>
          </div>
          <div className=" flex-grow ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoLayout;
