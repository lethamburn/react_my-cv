import { useState } from "react";
import "./App.css";
import { Hero, About, Education, Experience, More } from "./components";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <nav>
        <button onClick={() => setShowEducation(true)}>Educación</button>
        <button onClick={() => setShowEducation(false)}>Experiencia</button>
      </nav>
      {showEducation ? (
        <Education education={education} />
      ) : (
        <Experience experience={experience} />
      )}
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  );
}

export default App;
