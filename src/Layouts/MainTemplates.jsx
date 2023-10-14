
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const MainTemplates = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default MainTemplates;
