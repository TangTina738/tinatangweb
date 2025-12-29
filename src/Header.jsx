import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style/Header.css";

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleWorkClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // already on home → scroll
      document
        .getElementById("work-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // not on home → go home with intent
      navigate("/", { state: { scrollToWork: true } });
    }
  };
  
  return (
    <header className="py-4 site-header">
      <div className="container">
        <div className="row align-items-center">

          {/* Left */}
          <div className="col-6 col-md-3 d-flex align-items-end">
            <h2 className="m-0 header-name">Tina Tang</h2>
            <span className="ms-3 header-designer">designer</span>
          </div>

          {/* Right */}
          <div className="col-6 col-md-9 d-flex justify-content-end">
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link-custom">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link nav-link-custom">About</Link>
                </li>
                <li className="nav-item">
                  <a href="/" onClick={handleWorkClick} className="nav-link nav-link-custom">
                  Work</a>
                </li>
                            <li className="nav-item">
                <a
                  href="mailto:tangtina738@gmail.com"
                  className="nav-link nav-link-custom"
                >
                  Contact
                </a>
              </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
