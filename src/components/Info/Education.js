import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToEducation } from "../../state/actions";

const yearArray = [
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
];

const Education = () => {
  const education = useSelector((state) => state.education);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      degreetype: `${education.degreetype}`,
      university: `${education.university}`,
      degree: `${education.degree}`,
      startYear: `${education.startYear}`,
      endYear: `${education.endYear}`,
    },
  });

  const onSubmit = (data) => {
    dispatch(addToEducation(data));
  };

  return (
    <div className="WorkExpSection w-full px-5 shadow-2xl sm:px-20">
      <h2 className="border-b-2 border-gray-400 pb-5 pt-10 text-[20px] font-bold">
        Education Details
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mt-5 grid  grid-cols-2 gap-8">
          <div className="inputCard">
            <label className=" font-light" htmlFor="degreetype">
              Type:
            </label>
            <input
              type="text"
              {...register("degreetype", {
                required: "Required*",
              })}
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
            />
            <p className=" text-red-600">{errors.degreetype?.message}</p>
          </div>
          <div className="inputCard col-start-1 ">
            <label className=" font-light" htmlFor="university">
              University:
            </label>
            <input
              type="text"
              {...register("university", {
                required: "Required*",
              })}
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
            />
            <p className=" text-red-600">{errors.university?.message}</p>
          </div>
          <div className="inputCard">
            <label className=" font-light" htmlFor="degree">
              Degree:
            </label>
            <input
              type="text"
              {...register("degree", {
                required: "Required*",
              })}
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
            />
            <p className=" text-red-600">{errors.degree?.message}</p>
          </div>
          <div className="inputCard">
            <label className=" font-light" htmlFor="startYear">
              Start year:
            </label>
            <select
              {...register("startYear", { required: "Required*" })}
              id="startYear"
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
            >
              {yearArray.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <p className=" text-red-600">{errors.startYear?.message}</p>
          </div>
          <div className="inputCard">
            <label className=" font-light" htmlFor="endYear">
              End year:
            </label>
            <select
              {...register("endYear", { required: "Required*" })}
              id="endYear"
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
            >
              {yearArray.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <p className=" text-red-600">{errors.endYear?.message}</p>
          </div>
          <button
            type="submit"
            className=" col-span-2 mb-5 rounded-md bg-blue-600 px-8 py-2 text-white hover:bg-blue-300 hover:text-blue-600"
          >
            Save/Update Info
          </button>
        </div>
      </form>
      <div className="flex justify-end gap-5 border-t-2 border-gray-400 py-5">
        <Link
          to="/editInfo/workExp"
          className=" rounded-md border-2 border-blue-600 px-8 py-2 text-blue-600"
        >
          Back
        </Link>
        <Link
          to="/editInfo/keySkills"
          className=" rounded-md bg-blue-600 px-8 py-2 text-white"
        >
          Next
        </Link>
      </div>
    </div>
  );
};
export default Education;
