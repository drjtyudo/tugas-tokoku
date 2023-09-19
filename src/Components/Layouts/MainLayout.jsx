import FooterHome from "./FooterHome";
import Navbar from "./Navbar";

const MainLayout = ({ children, showHeader = true }) => {
  return (
    <>
      {showHeader && <Navbar />}
      {children}
      <FooterHome />
    </>
  );
};

export default MainLayout;
