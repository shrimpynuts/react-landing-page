import React from 'react';

/**
 * Loads in a single feature component.
 * @param {string} title
 * @param {string} description
 * @param {image file} gif - image of feature
 * @param {string} direction - left or right
 */
export default function Feature({ title, description, gif, direction }) {
    return <div className="single-feature" id={direction}>
        {direction === "left" ? <div>
            <img src={gif} />
        </div> : <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>}
        {direction === "right" ? <div>
            <img src={gif} />
        </div> : <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>}
    </div>

}