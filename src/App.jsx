import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Studios from "./components/Studios";
import Classes from "./components/Classes";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

export const App = () => {
  return (
  <div>
    <Header />
    <Section1 />
    <Section2 />
    <Studios />
    <Classes />
    <Footer />
  </div>
  );
};

export default App;
