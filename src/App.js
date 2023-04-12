import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import HomePage from "./components/HomePage";
import InfoLayout from "./components/Info/InfoLayout";
import PersonalInfo from "./components/Info/PersonalInfo";
import WorkExperience from "./components/Info/WorkExperience";
import Education from "./components/Info/Education";
import KeySkills from "./components/Info/KeySkills";
import PreviewPage from "./components/PreviewPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="editInfo" element={<InfoLayout />}>
          <Route index element={<PersonalInfo />} />
          <Route path="personalInfo" element={<PersonalInfo />} />
          <Route path="workExp" element={<WorkExperience />} />
          <Route path="education" element={<Education />} />
          <Route path="keySkills" element={<KeySkills />} />
        </Route>
        <Route path="preview" element={<PreviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
