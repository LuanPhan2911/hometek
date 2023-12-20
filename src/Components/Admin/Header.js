import Breadcrumb from "./Breadcrumb";
import Offcanvas from "./Offcanvas";

const Header = ({ offcanvasTitle, offcanvasBody }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Breadcrumb />
        <div className="search">
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
        <Offcanvas offcanvasTitle={offcanvasTitle}>{offcanvasBody}</Offcanvas>
      </div>
    </nav>
  );
};

export default Header;
