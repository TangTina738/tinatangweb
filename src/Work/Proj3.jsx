
import ImageCarousel from "./animations/ImageCarousel";

import sh1 from "./WorkAssets/sh1.png";
import sh2 from "./WorkAssets/sh2.png";
import sh3 from "./WorkAssets/sh3.png";
import sh4 from "./WorkAssets/sh4.png";
import sh5 from "./WorkAssets/sh5.png";
import shFigma from "./WorkAssets/shFigma.png";
import FadeIn from "./animations/fadeIn";
import Wits from "./WorkAssets/witsWork.mp4";
import ImageCarousel3 from "./animations/ImageCarousel";


import sh6 from "./WorkAssets/sh6.png";
import sh7 from "./WorkAssets/sh7.png";
import sh8 from "./WorkAssets/sh8.png";
import sh9 from "./WorkAssets/sh9.png";

import upArrow from "./WorkAssets/up.png";


function Proj3() {

const shImages = [sh1, sh2, sh3, sh4, sh5];

const sh2Images = [sh6,sh7,sh8,sh9];

  return (
    <section className="Proj1-Title">
            <div className="container">
              <div className="row">
                <div className="col-12">
                    <h1 className="work-title">
                    A Quick Snapshot of my Design Experience for Women+ in Technology
                    </h1>
                    <p className="intro-paragraph">
                    How creativity sparked my curiosity in design and technology.
                    </p>

                </div>
                </div>

               <div className="row">
                              <div className="col-12 ">
                                    <div className="work">
                                                  <video
                                                    src={Wits}
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
            

            <div className="container">
                <div className="row">
                <div className="col-12 col-md-10 offset-md-1">
                    <ImageCarousel images={shImages} />
                     <h2 className="subtitle">Context</h2>
                     <p className="info-paragraph">SheHacks+ is dedicated to empowering women and non-binary individuals to grow as innovators, fostering leadership and creativity in a traditionally underrepresented industry, organized by a tech club at Western University called Women+ In Tech Society.
                      </p>

                      <p className="info-paragraph">Through Women in Technology+ (WITS+), I had the role of a Design Director, where our team was responsible for creating merchandise assets and ensuring the event’s theme and branding were recognizable and cohesive for our target audience.
                    </p>
              
              <div className="row mt-4">
                <div className="col-12 col-md-4">
                  <h4 className="meta-title">Role</h4>
                  <ul className="meta-list">
                    <li>Director of Design</li>
                  </ul>
                </div>

                <div className="col-12 col-md-4">
                  <h4 className="meta-title">Tools/Skills</h4>
                  <ul className="meta-list">
                     <li>Figma</li>
                    <li>Procreate</li>
                  </ul>
                </div>

                <div className="col-12 col-md-4">
                  <h4 className="meta-title">Timeline</h4>
                  <p className="meta-des">November 2024</p>
                </div>
              </div>

              
              <div className="solution">
                   <h2 className="subtext">The Process</h2>
                    <h2 className="subtitle">Bringing an Idea to Life with My Apple Pencil</h2>
                    <p className="info-paragraph">
                    These hand-illustrated designs were created in Procreate with care and attention to detail. Using a design brief from the hackathon organizers (with a focus on a more realistic space theme), I designed stickers balancing target aesthetics with marketable designs. Illustrations were then converted to various hackathon merch forms, including stickers and keychains, and were even later adapted for use on official websites and social media.
                </p>
                </div>

                   <FadeIn className="col-12 col-md-6 offset-md-3">
                    <div className="py-5">
                    <img src={shFigma} className="img-fluid competitor-img" alt="" />
                    </div>
                </FadeIn>

                  <h2 className="subtext">From Designing Stickers to Functionality</h2>
                  <p className="info-paragraph">  All Hackers need an identification card, that's what makes hacking fun! </p>
                 <p className="info-paragraph">
              As the first piece of introduction for all Hackers, creating a clear and efficient ID card was our number one priority.


              From a blank background, I built the ID card from the ground up, beginning with identifying and orienting essential elements  like name fields, pronouns, and titles. 

                </p>
                <p className="info-paragraph">
               Once the structure felt right, I added a subtle grain texture and incorporated the event logo to give the card more personality while keeping it readable and brand representative. To streamline the design process, I incorporated assets already associated with the WITS+ organization, leveraging existing assets to emphasize a consistent brand identity and recognition.
                </p>
                <p className="info-paragraph">
               Because the hackathon followed a space theme, I looked for ways to make functional details feel more intentional. Usually hackathon ID cards have a checkmark system tracking whether participants had gotten their breakfast/dinner. Our eureka moment came when we decided to redesign the food checkmarks as small planet icons, turning a simple tracking feature into a playful visual element that complemented the hackathon theme.

                </p>

               
              
              <div className="problem">
                <h2 className="subtext">The Problem</h2>
                <h2 className="subtitle">Time is Ticking!</h2>
                 <p className="info-paragraph">
                  This project was particularly challenging given the extremely 
                  tight timeline for completion. With a deadline only a week away from the project introduction, I had to balance competing media requests on top of existing academic and extracurricular demands. Through tight scheduling and clear communication with hackathon organizers, I was able to complete the entire process from ideation to creation in the nick of time (shoutout coffee!).
                </p>
              </div>
            
            <div className="outcome">
             <h2 className="subtext">Learnings</h2>
                    <h2 className="subtitle">It's Okay to Raise Your Hand!</h2>
                    <p className="info-paragraph">Through this design process, my design team was extremely supportive and helped me rid of my creative block. One thing I learned was that a design is NEVER "bad." 
                     Whether that would be a product for a customer, a graphic for your social media, or just a thought bubble that floats on top of your head, every design is part of an ongoing process. 
                      Design will always need feedback, exploration, and improvement!
                    </p>
                  <p className="info-paragraph">
                  For me, I improved my ability to tailor designs from abstract prompts via an iterative process, building upon feedback to pinpoint and fulfill exact requests. I also learned how to leverage my skills in rocreate to support and synergize with my design process.
                </p>

                    <p className="info-paragraph">
                Overall, I learned the importance of planning and being able to work around tight deadlines. This role also taught me the basics of Figma, shaping my interests in design even further.
                </p>
                 <h2 className="subtitle">Being a Designer Versus Being a Coder</h2>
                 <p className="info-paragraph">As someone who’s always been curious about meaningful work, I started asking myself how design could live alongside technical problem-solving. I reached out to my VP of Design simply to ask why and how design mattered in tech, and that conversation introduced me to User Interaction Design. What really stuck with me was realizing that my love for visual artwork didn’t have to sit separate from technology, but rather that it could be part of it.

              </p>
                <p className="info-paragraph">That curiosity pushed me to explore roles in other clubs and projects, where I began learning what it truly means to design with users in mind. I grew to appreciate how thoughtful interaction design can shape real experiences, not just visuals. I’m excited to keep building on this foundation and continue learning as I find my place in the UI/UX world.

              </p>
              </div>

              
              <div className="outcome">
              <h2 className="subtext">Outcome</h2>
                    <h2 className="subtitle">Hackers Carrying your Artwork</h2>
                    <p className="info-paragraph">With over <strong>150+</strong> participants, my designs were worn throughout the hackathon and taken home as stickers and keychains. Watching Hacker’s interact with and enjoy something I created was a rewarding reminder of how design can create small but meaningful moments of connection. They may not know it, but they were carrying a piece of my design process with them!</p>
                 
                </div> 
                <ImageCarousel3 images={sh2Images} />

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
  )
}

export default Proj3