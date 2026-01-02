import "./WorkStyle/Proj1.css";

import ImageCarousel2 from "./animations/ImageCarousel";
import FadeIn from "./animations/fadeIn";


import vsaQuestion from "./WorkAssets/vsaQuestion.png";
import Feedback1 from "./WorkAssets/Feedback1.png";
import Feedback2 from "./WorkAssets/Feedback2.png";
import Feedback3 from "./WorkAssets/Feedback3.png";
import vsaSolution from "./WorkAssets/vsaSolution.png";
import vsaLogo from "./WorkAssets/vsaLogo.png";
import vsaOutcome from "./WorkAssets/vsaOutcome.png";


import upArrow from "./WorkAssets/up.png";
import Vsa from "./WorkAssets/vsaWork.mp4";

import photo1 from "./WorkAssets/photo1.png";
import photo2 from "./WorkAssets/photo2.png";
import photo3 from "./WorkAssets/photo3.png";
import photo4 from "./WorkAssets/photo4.png";
import photo5 from "./WorkAssets/photo5.png";
import photo6 from "./WorkAssets/photo6.png";
import photo7 from "./WorkAssets/photo7.png";
import photo8 from "./WorkAssets/photo8.png";
import photo9 from "./WorkAssets/photo9.png";
import photo10 from "./WorkAssets/photo10.png";

import agm1 from "./WorkAssets/agm1.png";
import agm2 from "./WorkAssets/agm2.png";
import agm3 from "./WorkAssets/agm3.png";
import agm4 from "./WorkAssets/agm4.png";

function Proj2() {
  const carouselImages = [photo1, photo2, photo3, photo4, photo5, photo6,photo7,photo8,photo9,photo10];

  const agmImages =[agm1,agm2,agm3,agm4];

  return (
    <>
      <section className="Proj1-Title">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <h1 className="work-title">
                Rebranding a Cultural Community to Reflect Its Next Generation
              </h1>
              <p className="intro-paragraph">
                How marketing and design helped modernize the branding of a cultural club.
              </p>
            </div>
          </div>

                 <div className="row">
                         <div className="col-12 ">
                               <div className="work">
                                             <video
                                               src={Vsa}
                                               className="work-video"
                                               autoPlay
                                               loop
                                               muted
                                               playsInline
                                             />
                                           </div>
                         </div>
                     </div>
        </div>
      </section>

      <section className="case-study">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <div className="context">
                <h2 className="subtext">The Process</h2>
                <h2 className="subtitle">Context</h2>
                <p className="info-paragraph">
                  <b>The Vietnamese Students' Association (VSA)</b> is a long-standing cultural
                  organization established in 2008, with deep emotional significance for
                  Vietnamese students across generations at Western University. Its visual
                  identity had remained largely unchanged since 2015, creating a growing
                  disconnect between the club’s legacy and its current student audience.
                </p>
              </div>

              <div className="row mt-4">
                <div className="col-12 col-md-4">
                  <h4 className="meta-title">Role</h4>
                  <ul className="meta-list">
                    <li>Vice-President (VP) of Media</li>
                      <li>President</li>
                  </ul>
                </div>

                <div className="col-12 col-md-4">
                  <h4 className="meta-title">Tools/Skills</h4>
                  <ul className="meta-list">
                    <li>Photography and Videography</li>
                    <li>Figma, Canva, Affinity Photoshop</li>
                    <li>CapCut</li>
                  </ul>
                </div>

                <div className="col-12 col-md-4">
                  <h4 className="meta-title">Timeline</h4>
                  <p className="meta-des">May 2024 – Ongoing</p>
                </div>
              </div>

              <div className="problem">
                <h2 className="subtitle">Cultural Disconnect</h2>
                <p className="info-paragraph">
                  The challenge was not low engagement, but an inconsistent and outdated
                  brand system that no longer reflected the evolving identity of the Vietnamese
                  student community. Any redesign risked losing cultural authenticity or
                  alienating long-standing members.
                </p>

                <div className="col-12">
                  <img src={vsaQuestion} className="intro-img img-fluid" alt="" />
                </div>

                <p className="info-paragraph">
                  As VP of Media, I worked closely with my media team and the core team
                  to ensure the rebrand reflected diverse
                  perspectives within the Vietnamese student community. Rather than designing in
                  isolation, I facilitated discussions around visual direction, colour usage,
                  and cultural representation, valuing feedback from both executive members
                  and general members.
                </p>
              </div>

              <div className="strategy">
                <h2 className="subtext">Strategy</h2>
                <h2 className="subtitle">
                  Students wanted Stronger, More Recognizable Branding Across Platforms
                </h2>
                <p className="info-paragraph">
                  To better understand how members perceived VSA’s brand and importance, our team
                  conducted a feedback survey using Google Forms. The survey was
                  distributed to VSA members as well as students outside of VSA to capture
                  diverse perspectives and to gather qualitative insights, rather than relying
                  solely on assumptions based on past performance.
                </p>

                <FadeIn className="row g-4 align-items-start feedback-grid">
                  <div className="col-12 col-md-6 d-flex justify-content-md-start justify-content-center">
                    <img src={Feedback1} className="img-fluid feedback-img" alt="" />
                  </div>

                  <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center">
                    <img src={Feedback2} className="img-fluid feedback-img" alt="" />
                  </div>

                  <div className="col-12 d-flex justify-content-center">
                    <img src={Feedback3} className="img-fluid feedback-img feedback-img--center" alt="" />
                  </div>
                </FadeIn>

                <p className="info-paragraph">
                  From this feedback, our team identified a clear priority: modernizing VSA’s
                  identity. These insights directly informed us of a serious need for a colour
                  refresh, updated content style, and intentional brand presence across our
                  social platforms.
                </p>
              </div>

              <div className="solution">
                <h2 className="subtext">Solution</h2>
                <h2 className="subtitle">Refreshed Colour Palette</h2>

                <div className="row align-items-start">
                  <div className="col-12 col-md-9">
                    <img src={vsaSolution} className="intro-img img-fluid" alt="" />
                  </div>

                  <div className="col-12 col-md-3 d-flex justify-content-start justify-content-md-end mt-3 mt-md-0">
                    <p className="competitor-list note-text mb-0">
                      <strong>Note:</strong> Black borders were caused by Instagram’s new dimension
                      updates.
                    </p>
                  </div>
                </div>

                <div className="row align-items-start mt-4">
                  <div className="col-12 col-md-3 d-flex justify-content-start">
                    <p className="competitor-list note-text mb-0 text-start">
                      <strong>Logo Design:</strong>
                      <br />
                      Christina Tran
                      <br />
                      Tina Tang
                      <br />
                      Stefan Dang
                    </p>
                  </div>

                  <div className="col-12 col-md-9">
                    <img src={vsaLogo} className="intro-img img-fluid" alt="" />
                  </div>
                </div>
              </div>

              <div className="outcome">
                <h2 className="subtext">Outcome</h2>
                <h2 className="subtitle">Better Views, Better Connection</h2>
                <p className="info-paragraph">
                  The visual rebrand led to increased visibility and a more recognizable presence
                  across VSA’s social platforms.
                </p>

                <FadeIn className="col-12">
                  <img src={vsaOutcome} className="intro-img img-fluid" alt="" />
                </FadeIn>

                <h2 className="subtitle">Increased Memberships</h2>
                <p className="info-paragraph">
                  Between the 2023–2024 and 2024–2025 academic years, VSA membership grew from 108
                  to 134 members. Beyond membership growth, event attendance also increased,
                  reflecting stronger community engagement both online and in person. The
                  refreshed brand established a new structure that future Media teams can build
                  upon.
                </p>
              </div>
              
               <div className="agm-carousel mt-4">
                <ImageCarousel2 images={agmImages} />
              </div>

              <div className="takeways">
                <h2 className="subtext">Key Takeaways</h2>

                <h2 className="subtitle">Do Not Be Afraid of Change</h2>
                <p className="info-paragraph">
                  Stepping outside of my comfort zone meant challenging VSA’s long-standing
                  visual choices and leading a shift towards a more modern colour palette and
                  content style. By defining clearer visual boundaries and brand direction, we
                  created a more consistent and recognizable presence across our platforms.
                </p>

                <h2 className="subtitle">Teamwork Makes the Dream Work</h2>
                <p className="info-paragraph">
                 Working in a close team to identify pain points, ideate solutions, and iteratively improve design strategies to balance both brand re-imagination and familiarity demanded both effective communication and intense collaboration. Through my experiences, 
                 I learned how to effectively integrate diverse perspectives, seek feedback from stakeholders, and adjust delegation to match the evolving needs of a project.

                </p>

                <p className="info-paragraph">I wanted to show that this role was more than just a resume filler, but a position where you are able to invest your time and skills to make something you are genuinely proud of. 
                  I believe that when people feel a connection to their team, they will also feel a connection to their work and feel a 
                  more intrinsic desire to produce quality content as opposed to simply doing the bare minimum required of their role.</p>

              </div>

            
              <div className="mt-4">
                <h2 className="subtext">Graphic Work</h2>
                <ImageCarousel2 images={carouselImages} />
              </div>
               <div className="scroll-top-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 d-flex justify-content-center">
                        <a
                          href="#"
                          className="scroll-text"
                          onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <img src={upArrow} alt="Scroll to top" className="arrow-icon" />
                          <p className="scroll-button">back to top</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Proj2;
