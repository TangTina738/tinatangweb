import "bootstrap/dist/css/bootstrap.min.css";
import about1 from "./assets/about1.png";
import about2 from "./assets/about2.png";
import about3 from "./assets/about3.png";
import about4 from "./assets/about4.png";

const aboutImages = [about1, about2, about3, about4];

function Home() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="row align-items-start">
      
          <div className="col-12 col-md-6">
            <h1 className="home-title">About Me</h1>
            <div>
            <p className="home-description">
             Before designing, I take time to understand <strong>who</strong> I am designing for, <strong>what</strong> they care about, and <strong>why</strong> someone might choose to interact with a brand in the first place.
            </p>

            <p className="about-desc"> Outside of coding, designing, and marketing: </p>
            <ol>
               <li className="about-desc"> I love to spend time with my cat, Momo </li> 
              <li className="about-desc">  I am exploring different types of cuisine, latest is Hakka Chinese.</li> 
              <li className="about-desc"> Ikea swedish meatball enthusiast</li>
              <li className="about-desc"> Wait, did I mention my cat already?</li>
              </ol>
            </div>
          </div>

  
          <div className="col-12 col-md-6 img-wrap">
  <div className="row g-3 flex-nowrap flex-md-wrap about-img-row">
    {aboutImages.map((src, i) => (
      <div className="col-8 col-sm-6 col-md-6" key={i}>
        <img src={src} className="about-img" alt="" />
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Home;
