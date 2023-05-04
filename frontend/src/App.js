import "./App.css";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
