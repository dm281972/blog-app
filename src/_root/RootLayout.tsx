import { Outlet } from "react-router-dom";
import { Footer, Topbar } from "../components/shared";

const RootLayout = () => {
  return (
    <div className="w-full ">
      <Topbar />
      <section className="w-full ">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
// '
export default RootLayout;
