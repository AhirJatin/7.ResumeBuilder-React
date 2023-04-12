import { Link } from "react-router-dom";
import homePageImage from "../assets/images/homePageImage.webp";

const HomePage = () => {
  return (
    <div className="homePageSection py-10">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className="flex-1">
            <h2 className=" text-[26px] font-bold sm:text-[40px]">
              Free Resume Builder
            </h2>
            <p className=" mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam animi maxime debitis iusto perspiciatis quasi labore
              numquam dicta expedita, dolore placeat quae harum nisi nulla
              corporis mollitia, voluptatem iure, nam sed? Ad, inventore itaque
              ab id iste distinctio? Eligendi, iste!
            </p>
            <div className="mt-8">
              <Link
                className=" rounded-md bg-blue-600 px-8 py-2 text-white"
                to="editInfo"
              >
                Make Resume
              </Link>
            </div>
          </div>
          <div className="max-w-[450px] flex-1">
            <img src={homePageImage} alt="OfficeDesk" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
