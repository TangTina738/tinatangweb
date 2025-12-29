import React from 'react'
import headImage from "./WorkAssets/shHead.png";
import ImageCarousel from "./animations/ImageCarousel";

import sh1 from "./WorkAssets/sh1.png";
import sh2 from "./WorkAssets/sh2.png";
import sh3 from "./WorkAssets/sh3.png";
import sh4 from "./WorkAssets/sh4.png";
import sh5 from "./WorkAssets/sh5.png";
import shFigma from "./WorkAssets/shFigma.png";

import Wits from "./WorkAssets/witsWork.mp4";

function Proj3() {

const shImages = [sh1, sh2, sh3, sh4, sh5];

  return (
    <section className="Proj1-Title">
            <div className="container">
              <div className="row">
                <div className="col-12">
                    <h1 className="work-title">
                    A Quick Snapshot of my Design Process for Women in Technology+
                    </h1>
                    <p className="intro-paragraph">
                    Through <strong>Women in Technology+ (WITS+),</strong> I had the role of a Design Director. Through this, I designed a hackathon ID card using <strong>Figma</strong> and hand-illustrated stickers using <strong>Procreate</strong>, ensuring it matched the SheHacks+ 9 space theme. 

                        This project became my entry point into creating graphic design with Figma and shaping how I think about using design to connect people and technology.
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
                    <p className="info-paragraph">
                    These hand-illustrated designs were created in Procreate with care and attention to detail. Using a design brief from the hackathon organizers (with a focus on a more realistic space theme), I designed stickers balancing target aesthetics with marketable designs. Illustrations were then converted to various hackathon merch forms, including stickers and keychains, and were even later adapted for use on official websites and social media.

                </p>
                <p className="info-paragraph">
                  This project was particularly challenging given the extremely 
                  tight timeline for completion. With a deadline only a week away from the project introduction, I had to balance competing media requests on top of existing academic and extracurricular demands. Through tight scheduling and clear communication with hackathon organizers, I was able to complete the entire process from ideation to creation in the nick of time (shoutout coffee!).

                </p>
                <p className="info-paragraph">
                  Throughout this process, I refined my ability to craft refined designs from abstract starting prompts via an iterative process, building upon feedback to pinpoint and fulfill exact requests. I also learned how to leverage my skills in procreate to support and synergize with my design process.

                </p>

                <div className="col-12 col-md-6 offset-md-3">
                    <div className="py-5">
                    <img src={shFigma} className="img-fluid competitor-img" alt="" />
                    </div>
                </div>
                  <h2 className="subtitle">Process of Design</h2>
                 <p className="info-paragraph">
                As the first piece of introduction for all hackers, creating a clear and efficient ID card was our number one priority.


              From a blank background, I built the ID card from the ground up, beginning with identifying and orienting essential elements  like name fields, pronouns, and titles. 

                </p>
                <p className="info-paragraph">
               Once the structure felt right, I added a subtle grain texture and incorporated the event logo to give the card more personality while keeping it readable and brand representative. To streamline the design process, I incorporated assets already associated with the WITS+ organization - leveraging existing content to emphasize a consistent brand identity and recognition.


                </p>
                <p className="info-paragraph">
               Because the hackathon followed a space theme, I looked for ways to make functional details feel more intentional. Usually hackathon ID cards have a checkmark system tracking whether participants had gotten their breakfast/dinner. Our eureka moment came when we decided to redesign the food checkmarks as small planet icons - turning a simple tracking feature into a playful visual element that complemented the hackathon theme.

                </p>
                <p className="info-paragraph">
                Overall, I learned the importance of planning and being able to work around tight deadlines. This role also taught me the basics of Figma, shaping my interests in design even further.
                </p>
                </div>
                </div>
            </div>
          </section>
  )
}

export default Proj3