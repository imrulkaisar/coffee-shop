import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const MainTemplates = () => {
  return (
    <>
      <Header />
      <main className="min-h-[300px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainTemplates;
