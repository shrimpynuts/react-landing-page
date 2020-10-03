import React from 'react';
import heroImage from '../assets/hero-img.png';
import ft1 from '../assets/ft1.gif';
import ft2 from '../assets/ft2.gif';
import ft3 from '../assets/ft3.gif';

export default function Home() {
    return (
        <div>
            <div className="hero">
                <h1>Figure out what your audience wants.</h1>
                <h2>We help you talk to users.</h2>
                <a href="#form"><button id="call-to-action"><b>Join the waitlist!</b></button></a>
                {/* <p>You're early! We're busy building. If you'd like to stay in the loop, join our waitlist.</p> */}
                <p>P.S. This is not a real product, just a demo for <a href="https://github.com/jonathancai11/react-boilerplate">react-boilerplate</a></p>
                <img src={heroImage} width="100%" />
            </div>

            <section className="details">
                <p>If you blog, it can be a pain to come up with ideas for your next blog post.</p>
                <p>Typically you want to do something to talk to your users.</p>
                <p>But viewers can be from many different channels: SEO, subscribers, organic traffic.</p>
                <p>Why don't we aggregate all of these different streams to give a single source of feedback for your content.</p>
                <p>Here are all the features we plan to build:</p>
            </section>

            <section className="features">
                <div className="single-feature" id="left">
                    <img src={ft1} />
                    <div>
                        <h3>Feature 1: Stripe integration</h3>
                        <p>Stuff that is awesome.</p>
                    </div>
                </div>
                <div className="single-feature" id="right">
                    <div>
                        <h3>Feature 2: Something great</h3>
                        <p>Stuff that is awesome.</p>
                    </div>
                    <img src={ft2} />
                </div>
                <div className="single-feature" id="left">
                    <img src={ft3} />
                    <div>
                        <h3>Feature 3: Awesome sauce</h3>
                        <p>Snoop Doggy Dogg.</p>
                    </div>
                </div>

            </section>

            <section id="form" className="form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfvCK0XfUG4Ps0ZHPbF9EVqXpXnbMjIS8h9S4iC9b_cEVihlQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </section>
        </div>
    )
}