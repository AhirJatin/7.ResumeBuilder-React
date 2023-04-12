import { Link } from "react-router-dom";

const PreviewPage = () => {
  return (
    <div className="previewPageSection py-10">
      <div className="container mx-auto">
        <div>
          <h2 className="pb-5 text-[22px] font-bold">Resume Preview</h2>

          <div className="border-2 border-orange-400 p-5">
                <div className="resumeHeader ">
                <div className="flex justify-between">
                    <div className="text-[48px] font-bold text-orange-400">
                    Jatin Ahir
                    </div>
                    <div className=" w-full max-w-[300px]">
                    <p>
                        Room-30, Brahma Niwas Chawl-3, near Barot saree center,
                        Ganesh Nagar, Dahisar east.
                    </p>
                    <p>Mumbai - 400068</p>
                    <p>Maharashtra</p>
                    <p>Email: jatinahir571@gmail.com</p>
                    <p>Contact: 8879279139</p>
                    </div>
                </div>
                <p className="my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    cumque natus blanditiis asperiores quae amet illo molestiae
                    voluptas! Saepe ad modi quo iste molestias perspiciatis, officia
                    quibusdam esse iusto ab. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Corrupti, cum. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Perferendis, esse! Distinctio
                    necessitatibus culpa et natus dolor rem, eveniet corporis
                    expedita.
                </p>
                </div>

                <div className="professionalExpSection my-5">
                <h3 className="border-b-2 border-orange-400 text-[24px] font-semibold text-orange-400">
                    Professional Experience
                </h3>
                <p className="mt-2 text-[20px] font-bold">
                    Production Engineer -
                    <span className="ml-3 text-[16px]">Godrej</span>
                    <span className="ml-3 text-[16px]">2020 -</span>
                    <span className="text-[16px] ">2021</span>
                </p>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolores nesciunt commodi asperiores debitis molestias
                    exercitationem aspernatur quam itaque nemo unde. Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Ipsum, soluta?
                </p>
                </div>

                <div className="educationSection my-5">
                <h3 className="border-b-2 border-orange-400 text-[24px] font-semibold text-orange-400">
                    Education
                </h3>
                <p className="mt-2 text-[20px] font-bold">
                    Production Engineering -
                    <span className="ml-3 text-[16px]">2020 -</span>
                    <span className="text-[16px] ">2021</span>
                </p>
                <p className="text-[18px]">Mumbai University</p>
                </div>

            
            </div>


          <div className="flex gap-5 py-5">
            <Link
              to="/editInfo/keySkills"
              className=" rounded-md border-2 border-blue-600 px-8 py-2 text-blue-600"
            >
              Back
            </Link>
            <button className=" rounded-md bg-blue-600 px-8 py-2 text-white">
              Save
            </button>
          </div>
          <div>
        </div>
    </div>
  );
};

export default PreviewPage;
