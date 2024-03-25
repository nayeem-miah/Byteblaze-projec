import { Outlet } from "react-router-dom";
// import Home from "../../Home";
// import Blogs from "../../Pages/Blogs";
// import Bookmarks from "../../Pages/Bookmarks";
import Nav from "../Nav";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      {/* nevBar */}
      <div className="h-16">
        <Nav></Nav>
      </div>
     <div className="min-h-[calc(100vh-116px)]">
     <Outlet></Outlet>
     </div>
     {/*  footer */}
     <Footer></Footer>
    </div>
  );
};

export default MainLayout;
