import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import personImage from "../assets/images/christopher-gower-m_HRfLhgABo-unsplash.jpg";

const About = () => {
  return (
    <div className="aboutSection py-8">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className="flex-1">
            <h2 className=" text-[26px] font-bold sm:text-[40px]">
              Resume <br />
              Builder
            </h2>
            <div className=" h-[4px] w-[150px] bg-blue-800 "></div>
            <p className=" mt-4 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque nostrum totam aliquam similique molestiae alias ipsum,
              et blanditiis sapiente id animi cupiditate, excepturi suscipit
              quisquam itaque? Corrupti earum, voluptatibus tempora asperiores
              perspiciatis molestias omnis blanditiis consequuntur quis,
              excepturi labore veniam libero? Velit accusamus laboriosam
              laudantium ipsa soluta voluptates architecto laborum iusto
              molestias deserunt fugit dicta, assumenda voluptate repudiandae,
              repellendus, ut mollitia ducimus ipsum? Natus, iste, ut adipisci
              fuga dolores vel impedit veniam animi doloremque aliquam saepe
              mollitia eius.
            </p>
            <p className="mt-10 text-[20px] font-semibold">
              Share with your friends
            </p>
            <div>
              <ul className="my-3 flex gap-5">
                <li className=" text-[28px] text-blue-700">
                  <a href="/">
                    <AiFillFacebook />
                  </a>
                </li>
                <li className=" text-[28px] text-blue-700">
                  <a href="/">
                    <AiFillLinkedin />
                  </a>
                </li>
                <li className=" text-[28px] text-green-700">
                  <a href="/">
                    <FaWhatsappSquare />
                  </a>
                </li>
                <li className=" text-[28px] text-blue-500">
                  <a href="/">
                    <AiFillTwitterCircle />
                  </a>
                </li>
                <li className=" text-[28px] text-gray-600">
                  <a href="/">
                    <AiFillMail />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[450px] flex-1">
            <img src={personImage} alt="OfficeDesk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
