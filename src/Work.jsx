import "./style/Work.css";

import Wds from "./assets/wdsWork.mp4";
import Vsa from "./assets/vsaWork.mp4";
import Wits from "./assets/witsWork.mp4";

import BrandingTag from "./assets/Branding.png";
import CommunityTag from "./assets/Community.png";
import DesignTag from "./assets/design.png";


import { Link } from "react-router-dom";

function Work() {
  
  return (
    <section id="work-section" className="view-work">
      <div className="container">
        <h1 className="work-title">Work</h1>

        {/* ROW 1: WDS */}
        <div className="row align-items-start work-row">

          {/* LEFT: media */}
          <div className="col-12 col-md-7">
            <Link to="/wds" className="work-media-link">
              <div className="work-media">
                <video
                  src={Wds}
                  className="work-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </Link>
          </div>

          {/* RIGHT: text */}
          <div className="col-12 col-md-5 work-info">
            <h3 className="work-card-title">Western Developers’ Society</h3>
            <p className="work-card-desc">
              Community of learners, innovators, and developers who strive to push the
              boundaries of tech at Western University.
            </p>

            <div className="work-tags">
              <span className="work-tag-shine">
                <img src={BrandingTag} className="work-tag" alt="Branding" />
              </span>
              <span className="work-tag-shine">
                <img src={CommunityTag} className="work-tag" alt="Community" />
              </span>
            </div>

          </div>
        </div>

       {/* ROW 2: VSA*/}
<div className="row align-items-start work-row">
  {/* TEXT */}
  <div className="col-12 col-md-5 work-info order-2 order-md-1">
    <h3 className="work-card-title">Vietnamese Students’ Association</h3>
    <p className="work-card-desc">
      A welcoming space for celebrating Vietnamese culture, forming social
      connections, and strengthening ties within the local Vietnamese community.
    </p>

    <div className="work-tags">
  <span className="work-tag-shine">
    <img src={BrandingTag} className="work-tag" alt="Branding" />
  </span>
  <span className="work-tag-shine">
    <img src={CommunityTag} className="work-tag" alt="Community" />
  </span>
</div>

  </div>

  {/* MEDIA */}
  <div className="col-12 col-md-7 order-1 order-md-2">
    <Link to="/vsa" className="work-media-link">
      <div className="work-media">
        <video
          src={Vsa}
          className="work-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </Link>
  </div>
</div>

        {/* ROW 3: (temporary) */}
        <div className="row align-items-start work-row">
          <div className="col-12 col-md-7">
            <Link to="/wits" className="work-media-link">
            <div className="work-media">
              <video
                src={Wits}
                className="work-video"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            </Link>
          </div>

          <div className="col-12 col-md-5 work-info">
            <h3 className="work-card-title">Women in Tech+</h3>
            <p className="work-card-desc">
              Building community and confidence through inclusive tech events,
              mentorship, and peer connections.
            </p>

           <div className="work-tags">
              <span className="work-tag-shine">
                <img src={DesignTag} className="work-tag" alt="Branding" />
              </span>
              <span className="work-tag-shine">
                <img src={CommunityTag} className="work-tag" alt="Community" />
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
