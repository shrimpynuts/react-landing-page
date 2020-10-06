import React from 'react';

import google from '../assets/google.jpg'
import substack from '../assets/substack.png'
import mailchimp from '../assets/mailchimp.png'
import wordpress from '../assets/wordpress.png'
import medium from '../assets/medium.png'

export default function SocialProof() {
    return <div className="social-proof">
        <div>
            <img alt="social proof" src={google}/>
            <img alt="social proof" src={substack}/>
            <img alt="social proof" src={mailchimp}/>
            <img alt="social proof" src={wordpress}/>
            <img alt="social proof" src={medium}/>
        </div>
    </div>
}