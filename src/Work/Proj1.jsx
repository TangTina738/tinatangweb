import React, { useEffect, useState } from 'react'
import './WorkStyle/Proj1.css';
import FadeIn from "./animations/fadeIn";
import Vision from './WorkAssets/Vision.png';
import Clubs from './WorkAssets/Clubs.png';

import Wds from "./WorkAssets/wdsWork.mp4";

import Question from './WorkAssets/Question.png';
import before from './WorkAssets/before.png';
import after from './WorkAssets/after.png';
import Solution from './WorkAssets/Solution.png';
import point from './WorkAssets/Point.png';
import night from './WorkAssets/nightime.png';
import day from './WorkAssets/daytime.png';

function Proj1() {
    

    {/*For the percentage */}
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
    const el = document.querySelector(".impact-text");

    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
            let start = 0;
            const end = 36;
            const duration = 400;
            const stepTime = Math.max(Math.floor(duration / end), 20);

            const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
            }, stepTime);

            setHasAnimated(true);
        }
        },
        { threshold: 0.4 }
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
    }, [hasAnimated]);


  return (
    <>
    <section className="Proj1-Title">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12">

                    {/* Title of My wds page */}
                    <h1 className="work-title">Turning Attention into Action Through Design</h1>
                    <p className="intro-paragraph">Strategizing on how to increase user engagement by design.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 ">
                      <div className="work">
                                    <video
                                      src={Wds}
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

    <section className="case-section">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1">

                    <div className="context">
                        <h2 className="subtext">The Process</h2>
                        <h2 className="subtitle">Context</h2>
                        <p className="info-paragraph"><b>Western Developers’ Society (WDS)</b> is a student-run tech organization at Western University, competing for engagement in a crowded ecosystem of technical clubs targeting the same student audience.</p>
                    </div>

                     <div className="row mt-4">
                        <div className="col-12 col-md-4">
                            <h4 className="meta-title">Role</h4>
                            <ul className="meta-list">
                            <li>Vice-President (VP) of Marketing</li>
                            <li>Brand Strategy</li>
                            <li>Content Strategy</li>
                            <li>Graphic Design</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-4">
                            <h4 className="meta-title">Tools</h4>
                            <ul className="meta-list">
                            <li>Figma</li>
                            <li>Canva</li>
                            <li>Instagram Analytics</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-4">
                            <h4 className="meta-title">Timeline</h4>
                            <p className="meta-des">May 2025 – Ongoing</p>
                        </div>
                        </div>

                     <div className="problem">
                        <h2 className="subtext">Problem</h2>
                        <h2 className="subtitle">What's The Problem?</h2>
                        <p className="info-paragraph">My team and I met with students across Western at club fairs to learn what they thought about WDS, our brand, and what we can do for them. 
                            Initial discussions  led us to discover 3 key pain points:</p>
                         <ul className="info-paragraph">
                            <li>Instagram content was <b>passive</b> and easy to scroll past</li>
                            <li><b>Visual identity</b> blended in with other tech clubs</li>
                            <li><b>Low emotional connection</b> between students and the brand</li>
                        </ul>
                         
                         <div className="col-12">
                            <img src={Vision} className="intro-img img-fluid"></img>
                        </div>
                            <h2 className="subtitle">Analyze Competitor Tech Clubs</h2>
                            <p className="info-paragraph">I researched other successful tech clubs for students at Western University to gain insight on <b>how</b> they <b>attract, engage,</b> and <b>retain</b> student interest.</p>
                         </div>

          <div className="row align-items-start mt-4 pb-5">
                {/* Left big panel */}
                <div className="col-12 col-md-10 offset-md-1">
                    <div className="competitor-panel">
                    <img src={Clubs} className="img-fluid competitor-img" alt="" />
                    </div>
                </div>
                  </div>

                {/* Right text */}
            <div className="row">
                  <div className="col-12 col-md-10 offset-md-1">
                <p className="subtitle">Core Insights</p>
                </div>

             <FadeIn className="col-12 col-md-4 offset-md-1">
                    <h3 className="subtext">Intentional visual systems help students quickly identify and remember a brand. </h3>
                    <p className="info-paragraph"><strong>Intentional visual systems help students quickly identify and remember a brand. </strong>
                        The biggest tech clubs at Western all have the same thing in common - a recognizable colour identity, cohesive themes across their media, and a distinct personality which emphasizes the core atmosphere of their community (be it ultra-professional or calm and laid back). 
                        Whatever the case is, users know immediately what they are getting into amid a sea of generality and sameness.</p>
                        </FadeIn>
                 <FadeIn className="col-12 col-md-4 offset-md-1">
                    <h3 className="subtext">Real people and team presence create stronger approachability.</h3>
                    <p className="info-paragraph"> Being a tech student is hard. 
                        Finding a community can feel all the more daunting when you’re faced with cold graphics and general designs. Unlike our previous design philosophy, leading competitors included the people behind events in their content to build personable connections with their users, creating a sense of familiarity and community through their design.
                    </p>
                </FadeIn>
                </div>
                 


                 <div className="col-12">
                            <img src={Question} className="intro-img img-fluid"></img>
                 </div>

                {/*Strategy Section */}
                 <div className="strategy">
                        <h2 className="subtext">Strategy</h2>
                        <h2 className="subtitle">A brand identity that individualizes WDS</h2>

                        <p className="info-paragraph">I rethought the Instagram feed as a content dense, low-attention environment, where clarity is important to the audience of incoming tech students.
                        </p>
                        <p className="info-paragraph"> From this, I introduced a semester-based visual system that separates content by time and context:</p>
                        <ol className="info-paragraph">
                          <li><b>Fall Semester:</b> Nighttime-inspired visuals designed to</li>
                          <li><b>Winter Semester:</b> Morning/daytime visuals designed to feel lighter, clearer, and more focused</li>
                        </ol>
                         <h2 className="subtitle">But why?</h2>
                         <p className="info-paragraph">This approach intentionally <strong>breaks visual uniformity</strong>, allowing students to:</p>
                         <ol className="info-paragraph">
                          <li><b>Quickly</b> differentiate posts while scrolling</li>
                          <li><b>Recognize</b> which semester content belongs to</li>
                          <li>Identify <strong>relevant information</strong> faster without relying solely on text</li>
                        </ol>
                        <p className="info-paragraph">Instead of losing consistency, this system keeps the branding of WDS familiar, while using small visual differences to help our audience understand what they’re viewing.</p>
                        
                        
                        <div className="row align-items-center text-center">
                          {/* BEFORE */}
                            <div className="col-12 col-md-4 offset-md-2">
                              <div className="img-before">
                                <img src={night} className="img-fluid intro-img" alt="night" />
                              </div>
                            </div>

                             <div className="col-12 col-md-4">
                              <div className="img-before">
                                <img src={day} className="img-fluid intro-img" alt="day" />
                              </div>
                            </div>
                        </div>
                         
                    <FadeIn className="row align-items-center g-4">
                        <div className="col-12">
                              <img src={Solution} className="intro-img img-fluid"></img>
                        </div>
                    </FadeIn>


                </div>

                {/*Solution Section */}
                 <div className="solution">
                        <h2 className="subtext">Solution</h2>
                        <h2 className="subtitle">Designing for Comfort, Not Intimidation</h2>

                        <p className="info-paragraph">
                       The right marketing philosophy can make the difference between a brand feeling impersonal and intimidating vs inviting and community-focused. 

                        </p>

                        <p className="info-paragraph">
                          
                        Our primary audience are tech students. Many students, especially those who are new to tech or early in their academic journey, 
                        feel anxious or hesitant to reach out to an academic club.

                        </p>
                        <p className="info-paragraph">
                          
                        To reduce these barriers, my team and I designed and pushed a more community-centred approach including more content 
                        involving executive and general members. This strategy prioritized approachability, allowing students to see the faces behind our organization. 
                        This helps show real members and interactions that build trust and emphasize approachability - tenets which are fundamental in student communities.

                        </p>

                        <div className="row align-items-center text-center">
                          {/* BEFORE */}
                            <FadeIn className="col-12 col-md-5">
                              <div className="img-before">
                                <img src={before} className="img-fluid intro-img" alt="Before" />
                              </div>
                            </FadeIn>

                            {/* ARROW */}
                            <FadeIn className="col-12 col-md-2 d-flex justify-content-center fade-in">
                              <img src={point} className="img-fluid point-img" alt="Arrow" />
                            </FadeIn>

                            {/* AFTER */}
                            <FadeIn className="col-12 col-md-5">
                              <div className="img-after">
                                <img src={after} className="img-fluid intro-img" alt="After" />
                              </div>
                            </FadeIn>
                            </div>
                            {/** 
                              <p className="info-paragraph">
                                This change helped our club feel:</p>
                                <ol className="info-paragraph">
                                <li>More <b>Welcoming</b> rather than exclusive</li>
                                <li><b>Approachable,</b> not intimidating</li>
                                <li><b>Supportive</b> of questions, learning, and networking at <b>all levels</b></li>
                        </ol>
                        */}
                             
                          
                </div>

                {/* Outcome Section*/}
                <div className="outcome">
                    <h2 className="subtext">Outcome</h2>

                    <div className="row mt-4">
                    <div className="col-12 col-md-4">
                        <div className="outcome-box">
                        <h1 className="impact-text">35+</h1>
                        <p className="impact-desc">Event & Workshop Attendees</p>
                        </div>
                    </div>

                    <div className="d-none d-md-block col-md-2"></div>

                    <div className="col-12 col-md-6">
                        <div className="outcome-box">
                        <h1 className="impact-text">{count}%</h1>
                        <p className="impact-desc">
                            Increase in average Instagram post views. Measured across 9 posts
                            before and after implementing a new content and branding strategy.
                        </p>
                        </div>
                    </div>
                    </div>

                </div>
                
                  {/*Takeaways Section */}
                  <div className="takeaways">
                        <h2 className="subtext">Key Takeaways</h2>
                        <h2 className="subtitle">Design needs proof, not just polishing</h2>
                       <p className="info-paragraph">While colour, layout, and visual consistency are important, I learned that <strong>design alone is not enough to drive engagement, </strong>
                        especially in a student community where attention is limited and hesitation is common.</p>
                       <p className="info-paragraph">
                        Because design is inherently subjective, its effectiveness depends on how clearly it communicates value. Posting event recaps through captured photos and videos allows students to see what 
                        actually happens at our events: the conversations, the energy, and the people involved. This helps transform abstract promotion into what the audience wants to see.


                       </p>
                       <p className="info-paragraph">
                        <strong>Seeing faces humanizes our brand.</strong> Staying up-to-date and pushing out content trends that audiences are familiar with creates a hook, 
                        allowing users to connect with us even if they do not know who we are. 

                       </p>
                       <p className="info-paragraph">

                       By consistently communicating what students gain from attending events rather than simply announcing them, redesigning our branding strategy became a way for persuasion, clarity, and helping tech students feel at ease. Ultimately, this shifted my understanding of Marketing from more than just designing posts that “look good.” 
                       We create content that targets our audiences’ specific needs, giving them a reason to care more about “just another tech club.”
                       </p>
                </div>



                </div>
            </div>
        </div>
        
    </section>
    </>


 
  );
}

export default Proj1