import Sidbar from "./Sidbar/index";
import AboutMe from "./body/AboutMe/index";
import WhImGood from "./body/WhImGood/index";
import MyWorks from "./body/MyWorks/index";
import ContactMe from "./body/ContactMe/index";
function App() {
  return (
    <div
      className="w-full flex justify-between bg-no-repeat bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url(./images/page-bg.jpg)" }}
    >
      <div className="ml-0 lg:ml-20">
        <Sidbar />
      </div>
      <div className="mr-0 md:mr-20 w-full md:w-6/12 lg:w-8/12">
        <AboutMe />
        <WhImGood />
        <MyWorks />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
