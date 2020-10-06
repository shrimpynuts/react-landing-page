import React from 'react';

import Feature from '../components/Feature';
import SocialProof from '../components/SocialProof';

import heroImage from '../assets/hero-img.png';
import ft1 from '../assets/ft1.gif';
import ft2 from '../assets/ft2.gif';
import ft3 from '../assets/ft3.gif';


export default function Home() {
    return (
        <div>
            <div className="hero">
                <h1>The Best Way for Bloggers to <span className="highlight">Get Ideas</span>.</h1>
                <h2>We help bloggers actually talk to their people.</h2>
                <a href="#form"><button id="call-to-action"><b>Join the waitlist!</b></button></a>
                {/* <p>You're early! We're busy building. If you'd like to stay in the loop, join our waitlist.</p> */}
                <p>(This is not a real thing, just a demo for <a target="_blank" rel="noopener noreferrer" href="https://github.com/jonathancai11/react-landing-page">react-landing-page</a>, 
                a guide on how to deploy this React landing page on Heroku in just 5 minutes!)</p>
            </div>
            
            <div className="hero-image">
                <img src={heroImage} width="100%" />
            </div>
            
            <SocialProof/>

            <section className="details">
                <p>If you blog, you know how hard it can be to <span className="highlight"><b>come up with ideas for your next post</b></span>.</p>
                <p>Ideally, you'd ask your readers for <span className="highlight"><b>ideas and feedback</b></span>.</p>
                <p>But viewers come from many different channels including Twitter, newsletters, backlinks, subscribers, organic traffic.</p>
                <p>So your feedback is scattered across many platforms, communities, and comment sections.</p>
                <p>For the price of your afternoon coffee <span className="highlight"><b>(4$/month)</b></span>, we help you navigate the mess and aggregate this information in a digestible way.</p>                
                <p>We <span className="highlight"><b>save you time and energy</b></span> to do what you do best: <span className="highlight"><b>write</b></span>.</p>
                <p>Here are a few of the awesome features we have in store for you:</p>
            </section>

            <section className="features">
                <Feature gif={ft1} title="Feature 1: Some integration." description="Stuff that is awesome!!" direction="left"/>
                <Feature gif={ft2} title="Feature 2: Something great." description="Stuff that is awesome!!" direction="right" />
                <Feature gif={ft3} title="Feature 3: Something awesome." description="Stuff that is awesome!!" direction="left" />
            </section>

            <section id="form" className="form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfvCK0XfUG4Ps0ZHPbF9EVqXpXnbMjIS8h9S4iC9b_cEVihlQ/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </section>
        </div>
    )
}