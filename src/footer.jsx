import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Footer.css";
import linkedinIcon from "./assets/linkedin.png";

function Footer() {
  return (
    <footer className="site-footer py-4">
      <div className="container">
        <div className="row align-items-center">

          {/* Left column */}
          <div className="col-12 col-md-6">
            <p className="footer-designer mb-0">
              Designed with <span className="hover-word">care</span> + built in{" "}
              <span className="hover-word">code</span>.
            </p>
          </div>

          {/* Right column */}
          <div className="col-12 col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
            <a
              href="https://www.linkedin.com/in/tina-ttang/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-linkedin"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
