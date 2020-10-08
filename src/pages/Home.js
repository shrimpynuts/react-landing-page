import React from 'react';

import { Image } from 'react-bootstrap';

import Feature from '../components/Feature';
import SocialProof from '../components/SocialProof';

import heroImage from '../assets/hero-img.png';
import ft1 from '../assets/ft1.gif';
import ft2 from '../assets/ft2.gif';
import ft3 from '../assets/ft3.gif';


export default function Home() {

    let waitListMembers = 12;

    return (
        <div>
            <div className="hero">
                <h1>The Best Way for Bloggers to <span className="highlight">Get Ideas</span>.</h1>
                <h2>We help bloggers actually talk to their people.</h2>
                <a href="#form"><button id="call-to-action"><b>Join the waitlist!</b></button></a>
                <p>There are currently {waitListMembers} bloggers on the waitlist. 🎉</p>
                {/* <p>You're early! We're busy building. If you'd like to stay in the loop, join our waitlist.</p> */}
                <p>(This is not a real thing, just a demo for <a target="_blank" rel="noopener noreferrer" href="https://github.com/jonathancai11/react-landing-page">react-landing-page</a>,
                a guide on how to deploy this React landing page on Heroku in just 5 minutes!)</p>
            </div>

            <div className="hero-image">
                <img src={heroImage} width="100%" />
            </div>

            <SocialProof />

            <section className="details">
                <p>If you blog, you know how hard it can be to <span className="highlight"><b>come up with ideas for your next post</b></span>.</p>
                <p>You want to ask readers for <span className="highlight"><b>ideas and feedback</b></span>, but they come from so many places like Twitter, backlinks, subscriptions, organic traffic.
                 Your feedback is scattered across many platforms, communities, and comment sections.</p>
                <p>For the price of your afternoon coffee <span className="highlight"><b>(4$/month)</b></span>, we help you navigate the mess and aggregate this insight in a digestible way.</p>
                <p>We <span className="highlight"><b>save you time and energy</b></span> to do what you do best: <span className="highlight"><b>write</b></span>.</p>
            </section>

            <section className="features">
                <Feature gif={ft1} title="See it all." description="We maintain a comprehensive view of all the various viewership channels so you don't have to." direction="left" />
                <Feature gif={ft2} title="Take notes." description="Based on viewer feedback, plan out your next blog post." direction="right" />
                <Feature gif={ft3} title="Schedule posts." description="Post weekly? Monthly? Sporadically? Keep your viewers engaged and excited for your content." direction="left" />
            </section>

            {/* <section className="features-list">
                <div>
                    <p>✅  A beautiful, powerful editor.</p>
                    <p>✅  Simple content management.</p>
                    <p>✅  Email newsletters built-in.</p>
                    <p>✅  SEO features included automatically.</p>
                    <p>✅  Publish once, distribute everywhere.</p>
                </div>
            </section> */}


            <section id="form" className="form">
                <iframe title="Google Form" src="https://docs.google.com/forms/d/e/1FAIpQLSfvCK0XfUG4Ps0ZHPbF9EVqXpXnbMjIS8h9S4iC9b_cEVihlQ/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </section>


            <section className="built-by">
                <div style={{ display: "inline-block", verticalAlign: "top" }}>
                    <Image src="https://lh3.googleusercontent.com/ogw/ADGmqu93xHH49ipW6XONZerMD0I4SqmLydVzD1hfbKzK=s64-c-mo" roundedCircle />
                </div>

                <div style={{ display: "inline-block" }} className="built-by-details">
                    <p>Hi! 👋 &nbsp; I'm <a target="_blank" rel="noopener noreferrer" href="jonathancai.com">Jonathan</a>, and I'm the guy building Panda! Feel free to <a href="mailto:caimjonathan@gmail.com">reach out</a> if you have any questions or concerns.</p>
                </div>
            </section>

        </div>
    )
}