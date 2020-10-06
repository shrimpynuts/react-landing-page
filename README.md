
# React Landing Page

![Heroku](https://heroku-badge.herokuapp.com/?app=react-landing-page1)

With this guide you should get an awesome landing page up and running in 5 minutes!

If you have ideas on how to improve this, issues or PR's are much appreciated!

[Live demo](https://react-landing-page1.herokuapp.com/) of what we'll be deploying.

![alt text](https://github.com/jonathancai11/react-landing-page/blob/main/demo.gif)

## Deploying

It is best practice to deploy first, and then develop second. Let's get started!

Just 7 really easy steps! 😎

1. Just hit the "Fork" button in the top right-hand corner of this Github repo.
2.  Sign up for an account at [heroku](https://heroku.com/).
3.  Create a new Heroku app with a name you like
4.  Go to the "Deploy" section in the project nav-bar
5.  Under "Deployment Method/Connect to Github", enter in your forked Github repository 
6.  Under "Manual deploy" click "Deploy Branch"
7.  We're done! Check [your-app-name].herokuapp.com to make sure it's live! 🚀

* (optional) Under "Automatic deploys", click "Enable Automatic Deploys" (this will ensure that every new commit under the main branch will automatically trigger a redeploy)

NOTE: If there is enough interest, I will add a guide on how to hook up a custom domain.  

## Developing


You'll obviously want to modify the content of this landing page to suit your next cool thing. Here are a few instructions on how:

#### Running locally

1. In your terminal, run `yarn start`.
2. Head to localhost:3000 in your browser to make sure its working.

#### Google Form

The most important aspect of your landing page is probably the form input. You need to see if your audience is picking up what you're putting down!

1. Head to [forms.google.com](forms.google.com) and create a form. It's quite intuitive.
2. When you're done creating it, click "Send" in the top right corner
3. Under the "Send via" line, click the embed icon. 
4. Copy the Embed HTML code.
5. Paste into `src/pages/Home.js` near the bottom where the form is (replacing the old iframe object).
6. (optional) Go to the "Responses" tab and in the three dots drop-down, check "Get email notification for responses" It's helpful to get notifications when people sign up.

NOTE: If there is enough interest, I may also add a TypeForm integration so you can see if people are even willing to pay you for pre-orders or beta access or what-not 😉

#### Hero

The hero is basically what you first see when the page is loaded.

You should modify the copy and the big image.

#### Features

I'm using gif's to show off the features but you can also just display static images.

If you like the gif's, I recommend using [giphy capture](https://giphy.com/apps/giphycapture) to screen record your features.

#### Google Analytics

It's helpful to track how many people are reaching your landing page in the first place. 

Using Google Analytics, you can track metrics including acquisition (which channel are you viewers coming from) and stuff like how often they click the "Join the waitlist" button.

Paired with the data from your sign up, you can see what percentage of viewers actually sign up, which can be helpful.

1. Head to [analytics.google.com](analytics.google.com)
2. Create a new property under Admin
3. Retrieve and copy the gtag javascript code for your new property
4. Paste this into `public/index.html`, replacing the old gtag

NOTE: I don't have many instructions yet, but if you have a basic understanding of React, making changes to this codebase shouldn't be too difficult. I'm not sure what level of detail in my instructions is necessary, but I'm lazy, so I'm stopping right now.

## Backlog:

Just some things that I might implement in the future for this template. Create a Github issue if you want me to add any other features.

- [x] Change headline copy to "The Best Way for Bloggers to Get _____"
- [x] Add personal touch (person who is building this) with ability to contact ("Reach out to me")
- [x] Fix feature card on mobile (stack instead of side-by-side)
- [ ] Fix second feature card re-ordering on mobile
- [x] Make the header nicer (and replace logo words with real h1)
- [x] Alert for promotional discount (maybe limited time alert)
- [ ] Repeat important features using checklist
- [ ] Pricing tiers
- [ ] Alert for number of people already on waitlist with progress bar
- [ ] Add feedback testomonial
- [ ] SEO and page metadata
- [ ] Typeform integration
- [ ] Custom fonts
- [ ] Referral program for waitlist (share on Twitter? custom links?)

Guide: 
- [ ] How to hook up a custom domain
- [ ] How to customize (more)
- [ ] File structure
