import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const AdminLayout = ({ offcanvasTitle, offcanvasBody }) => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar />
        <div className="col">
          <div className="container">
            <Header
              offcanvasTitle={offcanvasTitle}
              offcanvasBody={offcanvasBody}
            />
            {<Outlet />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
