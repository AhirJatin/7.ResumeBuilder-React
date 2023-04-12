import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import ImageUpload from "./ImageUpload";
import { useSelector, useDispatch } from "react-redux";
import { addToPersonalInfo } from "../../state/actions";

const PersonalInfo = () => {
  const personalInfo = useSelector((state) => state.personalInfo);
  console.log(personalInfo);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: `${personalInfo.firstName}`,
      lastName: `${personalInfo.lastName}`,
      email: `${personalInfo.email}`,
      mobile: `${personalInfo.mobile}`,
      address: `${personalInfo.address}`,
      city: `${personalInfo.city}`,
      state: `${personalInfo.state}`,
      postalCode: `${personalInfo.postalCode}`,
      objective: `${personalInfo.objective}`,
    },
  });

  const onSubmit = (data) => {
    dispatch(addToPersonalInfo(data));
  };

  return (
    <div className="personalInfoSection w-full px-5  shadow-2xl sm:px-20">
      {/*<ImageUpload />*/}
      <h2 className="border-b-2 border-gray-400 pb-5 pt-10 text-[20px] font-bold">
        Personal Information
      </h2>
      <form
        className=" mt-5 grid  grid-cols-2 gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="inputCard">
          <label className=" font-light" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            {...register("firstName", {
              required: "Required*",
            })}
            className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
          />
          <p className=" text-red-600">{errors.firstName?.message}</p>
        </div>
        <div className="inputCard">
          <label className=" font-light" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            {...register("lastName", {
              required: "Required*",
            })}
            className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
          />
          <p className=" text-red-600">{errors.lastName?.message}</p>
        </div>
        <div className="inputCard">
          <label className=" font-light" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Required*",
              pattern: {
                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                message: "Invaild email format*",
              },
            })}
            className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
          />
          <p className=" text-red-600">{errors.email?.message}</p>
        </div>
        <div className="inputCard">
          <label className=" font-light" htmlFor="mobile">
            Mobile:
          </label>
          <input
            type="tel"
            {...register("mobile", {
              required: "Required*",
              maxLength: { value: 10, message: "Max 10 digits permitted*" },
              minLength: { value: 10, message: "Minimum 10 digits required*" },
            })}
            className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
          />
          <p className=" text-red-600">{errors.mobile?.message}</p>
        </div>
        <div className="inputCard col-span-2">
          <label className=" font-light" htmlFor="address">
            Address:
          </label>
          <input
            type="text"
            {...register("address", { required: "Required*" })}
            className=" mt-1 block w-full  rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
          />
          <p className=" text-red-600">{errors.address?.message}</p>
        </div>
        <div className="inputCard">
          <label className=" font-light" htmlFor="city">
            City:
          </label>
          <input
            type="text"
            {...register("city", { required: "Required*" })}
            className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
          />
          <p className=" text-red-600">{errors.city?.message}</p>
        </div>
        <div className="inputCard">
          <label className=" font-light" htmlFor="state">
            State:
          </label>
          <input
            type="text"
            {...register("state", { required: "Required*" })}
            className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
          />
          <p className=" text-red-600">{errors.state?.message}</p>
        </div>
        <div className="inputCard">
          <label className=" font-light" htmlFor="postalCode">
            Postal code:
          </label>
          <input
            type="text"
            {...register("postalCode", { required: "Required*" })}
            className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
          />
          <p className=" text-red-600">{errors.postalCode?.message}</p>
        </div>
        <div className=" col-span-2 col-start-1 mb-2">
          <label htmlFor="objective">Objective:</label>
          <textarea
            className="mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
            {...register("objective", {
              required: "Required*",
              maxLength: { value: 500, message: "Max length is 150." },
            })}
            rows="8"
          ></textarea>
          <p className=" text-red-600">{errors.objective?.message}</p>
        </div>
        <button
          type="submit"
          className=" col-span-2 mb-5 rounded-md bg-blue-600 px-8 py-2 text-white hover:bg-blue-300 hover:text-blue-600"
        >
          Save/Update Info
        </button>
      </form>

      <div className="flex justify-end gap-5 border-t-2 border-gray-400 py-5">
        <Link
          to="/"
          className=" rounded-md border-2 border-blue-600 px-8 py-2 text-blue-600"
        >
          Back
        </Link>
        <Link
          to="/editInfo/workExp"
          className=" rounded-md bg-blue-600 px-8 py-2 text-white"
        >
          Next
        </Link>
      </div>
    </div>
  );
};
export default PersonalInfo;
