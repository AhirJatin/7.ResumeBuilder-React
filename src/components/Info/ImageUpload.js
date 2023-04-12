import { useForm } from "react-hook-form";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToProfilePhoto } from "../../state/actions/profilePhoto";

const ImageUpload = () => {
  // const profilePhoto = useSelector((state) => state.profilePhoto);
  // console.log(profilePhoto);
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      files: {},
    },
  });

  const [image, setimage] = useState("");

  const convert2base64 = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setimage(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    if (data.files.length > 0) {
      convert2base64(data.files[0]);
    }
  };
  return (
    <div className=" py-10">
      <div className=" flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full border-2 border-gray-400 bg-noProfile bg-contain bg-center bg-no-repeat ">
        {image ? <img src={image} alt="Your Img." /> : null}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mt-3 ">
          <input
            type="file"
            id="fileUpload"
            {...register("files", {
              required: "Required* , supported format jpg/png/svg",
            })}
          />
          <p className=" text-red-600">{errors.files?.message}</p>
        </div>
        <button className=" mt-3 block text-blue-600" type="submit">
          Submit / Change Profile photo
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
