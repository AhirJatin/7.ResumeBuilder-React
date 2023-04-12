import { Link } from "react-router-dom";
// import { RxDotFilled } from "react-icons/rx";
import JsPDF from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";

const PreviewPage = () => {
  const [pdfName, setpdfName] = useState("");
  const personalInfo = useSelector((state) => state.personalInfo);
  const workExp = useSelector((state) => state.workExp);
  const education = useSelector((state) => state.education);
  const keySkills = useSelector((state) => state.keySkills);

  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#report")).then(() => {
      report.save(`${pdfName}.pdf`);
    });
  };

  const handleChange = (e) => {
    setpdfName(e.target.value);
  };

  return (
    <div className="previewPageSection py-10">
      <div className="container mx-auto">
        <h2 className="pb-5 text-[22px] font-bold">Resume Preview</h2>

        <div className="flex flex-col gap-3 lg:flex-row">
          <div className=" overflow-scroll whitespace-nowrap">
            <div
              id="report"
              className=" w-[595px] border-2 border-orange-400 p-2"
            >
              <div className="resumeHeaderSection ">
                <div className="flex justify-between">
                  <div className="text-[20px] font-bold text-orange-400">
                    {personalInfo.firstName}
                    <span className="ml-1"> {personalInfo.lastName}</span>
                  </div>
                  <div className=" w-full max-w-[300px] text-[10px]">
                    <p className=" whitespace-normal">{personalInfo.address}</p>
                    <p>
                      {personalInfo.city} - {personalInfo.postalCode}
                    </p>
                    <p>{personalInfo.state}</p>
                    <p>Email: {personalInfo.email}</p>
                    <p>Contact: {personalInfo.mobile}</p>
                  </div>
                </div>
                <p className=" my-2 whitespace-normal text-[10px]">
                  {personalInfo.objective}
                </p>
              </div>

              <div className="professionalExpSection my-2">
                <h3 className=" text-[14px]  font-semibold text-orange-400">
                  Professional Experience
                </h3>
                <div className=" mt-2 h-[2px] w-full bg-orange-400"></div>
                <p className="mt-2 text-[12px] font-bold">
                  {workExp.jobTitle} -
                  <span className="ml-2 text-[10px]">
                    {workExp.organizationName}
                  </span>
                  <span className="ml-2 text-[10px]">
                    {workExp.startYear} -
                  </span>
                  <span className="text-[10px] ">{workExp.endYear}</span>
                </p>
                <p className=" whitespace-normal text-[10px]">
                  {workExp.jobDescription}
                </p>
              </div>

              <div className="educationSection my-2">
                <h3 className=" text-[14px] font-semibold text-orange-400">
                  Education
                </h3>
                <div className=" mt-2 h-[2px] w-full bg-orange-400"></div>
                <p className="mt-2 text-[12px] font-bold">
                  {education.degree} -
                  <span className="ml-3 text-[10px]">
                    {education.degreetype} -
                  </span>
                  <span className="ml-3 text-[10px]">
                    {education.startYear} -
                  </span>
                  <span className="text-[10px] ">{education.endYear}</span>
                </p>
                <p className="text-[12px]">{education.university}</p>
              </div>

              <div className="keySkillsSection my-2">
                <h3 className="text-[14px] font-semibold text-orange-400">
                  Key Skills
                </h3>
                <div className=" mt-2 h-[2px] w-full bg-orange-400"></div>
                <div className="my-1">
                  <div>
                    <p className=" inline text-[10px]">{keySkills.skill_1}</p>
                  </div>
                  <div>
                    {keySkills.skill_2 ? (
                      <p className=" inline text-[10px]">{keySkills.skill_2}</p>
                    ) : null}
                  </div>
                  <div>
                    {keySkills.skill_3 ? (
                      <p className=" inline text-[10px]">{keySkills.skill_3}</p>
                    ) : null}
                  </div>
                  <div>
                    {keySkills.skill_4 ? (
                      <p className=" inline text-[10px]">{keySkills.skill_4}</p>
                    ) : null}
                  </div>
                  <div>
                    {keySkills.skill_5 ? (
                      <p className=" inline text-[10px]">{keySkills.skill_5}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p>Create File name</p>
              <input
                className=" mt-1 block max-w-[200px] rounded-md border-2 border-gray-400 py-1 pl-2 font-bold lg:w-full "
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-5 py-5">
              <Link
                to="/editInfo/keySkills"
                className=" rounded-md border-2 border-blue-600 px-8 py-2 text-blue-600"
              >
                Back
              </Link>
              <button
                onClick={generatePDF}
                className=" rounded-md bg-blue-600 px-8 py-2 text-white"
              >
                Export PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
