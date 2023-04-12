import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToKeySkills } from "../../state/actions";

const KeySkills = () => {
  const keySkills = useSelector((state) => state.keySkills);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skill_1: `${keySkills.skill_1}`,
      skill_2: `${keySkills.skill_2}`,
      skill_3: `${keySkills.skill_3}`,
      skill_4: `${keySkills.skill_4}`,
      skill_5: `${keySkills.skill_5}`,
    },
  });

  const onSubmit = (data) => {
    dispatch(addToKeySkills(data));
  };

  return (
    <div className="WorkExpSection w-full px-5 shadow-2xl sm:px-20">
      <h2 className="border-b-2 border-gray-400 py-10 pb-5 pt-10 text-[20px] font-bold ">
        Key Skills
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mt-5 grid  grid-cols-2 gap-8">
          <div className="inputCard">
            <input
              placeholder="Add Skills"
              type="text"
              {...register("skill_1", {
                required: "Required*",
              })}
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
            />
            <p className=" text-red-600">{errors.skill_1?.message}</p>
          </div>
          <div className="inputCard ">
            <input
              placeholder="Add Skills"
              type="text"
              {...register("skill_2")}
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
            />
          </div>
          <div className="inputCard ">
            <input
              placeholder="Add Skills"
              type="text"
              {...register("skill_3")}
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
            />
          </div>
          <div className="inputCard ">
            <input
              placeholder="Add Skills"
              type="text"
              {...register("skill_4")}
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
            />
          </div>
          <div className="inputCard ">
            <input
              placeholder="Add Skills"
              type="text"
              {...register("skill_5")}
              className=" mt-1 block w-full rounded-md border-2 border-gray-400 py-1 pl-2 font-bold "
            />
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
          to="/editInfo/education"
          className=" rounded-md border-2 border-blue-600 px-8 py-2 text-blue-600"
        >
          Back
        </Link>
        <Link
          to="/preview"
          className=" rounded-md bg-blue-600 px-8 py-2 text-white"
        >
          Next
        </Link>
      </div>
    </div>
  );
};
export default KeySkills;
