import React from 'react';

import google from '../assets/google.jpg'
import substack from '../assets/substack.png'
import mailchimp from '../assets/mailchimp.png'
import wordpress from '../assets/wordpress.png'
import medium from '../assets/medium.png'

export default function SocialProof() {
    return <div className="social-proof">
        <div>
            <img src={google}/>
            <img src={substack}/>
            <img src={mailchimp}/>
            <img src={wordpress}/>
            <img src={medium}/>
        </div>
    </div>
}