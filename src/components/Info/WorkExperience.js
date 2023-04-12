import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWorkExp } from "../../state/actions";

const yearArray = [
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
];

const WorkExperience = () => {
  const workExp = useSelector((state) => state.workExp);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      jobTitle: `${workExp.jobTitle}`,
      organizationName: `${workExp.organizationName}`,
      jobDescription: `${workExp.jobDescription}`,
      startYear: `${workExp.startYear}`,
      endYear: `${workExp.endYear}`,
    },
  });

  const onSubmit = (data) => {
    dispatch(addToWorkExp(data));
  };

  return (
    <div className="WorkExpSection w-full px-5 shadow-2xl sm:px-20">
      <h2 className="py-10 text-[20px] font-bold">Work Experience</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" border-b-2 border-gray-400 font-bold">
          Experience 1
        </div>
        <div className=" mt-5 grid  grid-cols-2 gap-8">
          <div className="inputCard">
            <label className=" font-light" htmlFor="jobTitle">
              Job Title:
            </label>
            <input
              type="text"
              {...register("jobTitle", {
                required: "Required*",
              })}
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
            />
            <p className=" text-red-600">{errors.jobTitle?.message}</p>
          </div>
          <div className="inputCard">
            <label className=" font-light" htmlFor="organizationName">
              Orgainzation Name:
            </label>
            <input
              type="text"
              {...register("organizationName", {
                required: "Required*",
              })}
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold"
            />
            <p className=" text-red-600">{errors.organizationName?.message}</p>
          </div>
          <div className=" col-span-2 col-start-1 mb-2">
            <label htmlFor="objective">Job Description:</label>
            <textarea
              className="mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
              {...register("jobDescription", {
                required: "Required*",
                maxLength: { value: 500, message: "Max length is 150." },
              })}
              rows="8"
            ></textarea>
            <p className=" text-red-600">{errors.jobDescription?.message}</p>
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
          to="/editInfo/personalInfo"
          className=" rounded-md border-2 border-blue-600 px-8 py-2 text-blue-600"
        >
          Back
        </Link>
        <Link
          to="/editInfo/education"
          className=" rounded-md bg-blue-600 px-8 py-2 text-white"
        >
          Next
        </Link>
      </div>
    </div>
  );
};
export default WorkExperience;
