import "./Style/Home.css";
import arrow from "./assets/Arrow.png";
import cat from "./assets/cat2.gif";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToWork) {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
      navigate(".", { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <section className="home-section">
      <div className="container">
        <div className="row align-items-start">
          {/* LEFT CONTENT — columns 1–8 */}
          <div className="col-12 col-md-8">
            <h1 className="home-title">Hey There! I'm Tina.</h1>

            <div className="home-accent">
              <Typewriter
                words={["community-driven", "designer", "cat lover", "learning as I go"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1300}
              />
            </div>
          
            <div className="row">
              <div className="col-12 col-md-7">
                <p className="home-description mb-1">
                  I use design and marketing to help understand what type of content strategies drive audiences to engage with a brand.
                </p>
                <p className="home-description mt-0">
                  Through my work with student organizations and tech communities, I transform passive digital media into active, human-focused content.
                </p>
              </div>
            </div>

            <a
              href="#work-section"
              className="scroll-text"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <img src={arrow} alt="" className="arrow-icon" />
              <p className="scroll-button">psst.. scroll to see my work</p>
            </a>
          </div>

    
        <div className="col-12 col-md-4 d-flex align-items-start">
            <div className="ms-auto">
                <img src={cat} alt="cat" className="home-cat align-last-col" />
            </div>
        </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
