import Sidbar from "./Sidbar/index";
import AboutMe from "./body/AboutMe/index";
import WhImGood from "./body/WhImGood/index";
import MyWorks from "./body/MyWorks/index";
import ContactMe from "./body/ContactMe/index";
import Container from "./body/Helpers/Container";
function App() {
  return (
    <Container>
      <div className={`md:w-3/12`}>
        <Sidbar />
      </div>
      <div className="px-6 md:px-12 md:w-9/12">
        <AboutMe />
        <WhImGood />
        <MyWorks />
        <ContactMe />
      </div>
    </Container>
  );
}

export default App;
