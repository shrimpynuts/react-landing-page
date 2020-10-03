import React from 'react';

import Feature from '../components/Feature';

import heroImage from '../assets/hero-img.png';
import ft1 from '../assets/ft1.gif';
import ft2 from '../assets/ft2.gif';
import ft3 from '../assets/ft3.gif';


export default function Home() {
    return (
        <div>
            <div className="hero">
                <h1>Find out what your audience <span className="highlight">really wants</span>.</h1>
                <h2>We help bloggers actually talk to their people.</h2>
                <a href="#form"><button id="call-to-action"><b>Join the waitlist!</b></button></a>
                {/* <p>You're early! We're busy building. If you'd like to stay in the loop, join our waitlist.</p> */}
                <p>(P.S. This is definitely not a real product, just a demo for <a href="https://github.com/jonathancai11/react-boilerplate">react-boilerplate)</a></p>
            </div>
            <div >
                <img src={heroImage} width="100%" />
            </div>
            <section className="details">
                <p>If you're a blogger, you know that it can a pain to <b>come up with ideas for your next blog post</b>.</p>
                <p>Ideally, you'd ask them for <b>ideas and feedback</b>.</p>
                <p>But viewers can be from many different channels including newsletters, SEO, subscribers, organic traffic.</p>
                <p>Your audience gives you feedback across many platforms, communities, comment sections, and inboxes.</p>
                <p>For the price of a coffee (4$/month), we help you navigate the mess and aggregate this information in a digestible way, <b>saving you hours of time and energy</b>, 
                so you can do what you do best: <b>create</b>.</p>
                <p>Here are a few of the awesome things we have in store for you:</p>
            </section>

            <section className="features">
                <Feature gif={ft1} title="Feature 1: Stripe integration." description="Stuff that is awesome!!" direction="left"/>
                <Feature gif={ft2} title="Feature 2: Something great." description="Stuff that is awesome!!" direction="right" />
                <Feature gif={ft3} title="Feature 3: Something awesome." description="Stuff that is awesome!!" direction="left" />
            </section>

            <section id="form" className="form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfvCK0XfUG4Ps0ZHPbF9EVqXpXnbMjIS8h9S4iC9b_cEVihlQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </section>
        </div>
    )
}