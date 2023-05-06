import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="container mx-auto px-4 md:px-12 my-20 overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
