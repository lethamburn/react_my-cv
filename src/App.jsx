import "./App.css";
import { Hero, About, Education, Experience, More } from "./components";

function App() {
  const CV = [
    {
      name: "Antonio",
      adress: "Rosales Martínez",
      city: "Madrid-Spain",
      email: "antoniorosalesmartinez90@gmail.com",
      birthDate: "26/10/1990",
      phone: "(+34) 657511155",
      aboutMe: [
        {
          info: "",
          info: "",
          info: "",
          info: "",
        },
      ],
      education: [
        {
          name: "",
          date: "",
          where: "",
        },
        {
          name: "",
          date: "",
          where: "",
        },
      ],
      experience: [
        {
          name: "",
          date: "",
          where: "",
        },
        {
          name: "",
          date: "",
          where: "",
        },
      ],
      languages: [
        {
          language: "",
          wrlevel: "",
          splevel: "",
        },
      ],
      habilities: ["HTML5", "CSS3"],
      volunteer: [{ name: "", where: "", description: "" }],
    },
  ];
  return (
    <div className="App">
      <Hero />
      <About />
      <Education />
      <Experience />
      <More />
    </div>
  );
}

export default App;
