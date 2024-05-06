import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Examples from "./components/examples/Examples";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hello from "./components/hello/Hello";
import Navigation from "./components/navigation/Navigation";
import Skills from "./components/skills/Skills";
import Modal from "./components/utilities/Modal";
import Section from "./components/utilities/Section";

function App() {
  return (
    <>
      <Modal />
      <Navigation />
      <Header />
      <Section title={"Здравствуйте"}>
        <Hello />
      </Section>
      <Section title={"Навыки"} id={"skills"}>
        <Skills />
      </Section>
      <Section title={"Примеры работ"} id={"examples"}>
        <Examples />
      </Section>
      <Section title={"Опыт работы"} id={"experience"} collapsed={true}>
        <Experience />
      </Section>
      <Section title={"Образование"} id={"education"} collapsed={true}>
        <Education />
      </Section>
      <Footer />
    </>
  );
}

export default App;
