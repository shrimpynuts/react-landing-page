import React from 'react';
import heroImage from '../assets/hero-img.png';

export default function Home() {
    return (
        <div>
            <div className="hero">
                <h1>Figure out what your audience wants.</h1>
                <h2>We'll help you talk to your users.</h2>
                <a href="#form"><button>Join the waitlist</button></a>
                <p>You're early!</p>
                <img src={heroImage} width="100%" />
            </div>
            <div className="details">
                <p>If you blog, it can be a pain to come up with ideas for your next blog post.</p>
                <p>Typically you want to do something to talk to your users.</p>
                <p>But viewers can be from many different channels: SEO, subscribers, organic traffic.</p>
                <p>Why don't we aggregate all of these different streams to give a single source of feedback for your content.</p>
            </div>
            <div className="form">
                <section id="form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfvCK0XfUG4Ps0ZHPbF9EVqXpXnbMjIS8h9S4iC9b_cEVihlQ/viewform?embedded=true" width="640" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </section>
            </div>
        </div>
    )
}