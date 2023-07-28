# issure-swiper-10-angular
Hi there!

In my Angular/Ionic project, I'm experiencing an issue when calling this.swiper!.slideNext(); after updating to the latest version of Swiper. I receive the following error message: TypeError: Cannot read properties of undefined (reading 'speed').

**Steps to reproduce:**

Create a new Angular/Ionic project.
Install the latest version of Swiper ("swiper": "^10.0.4").
Set up a component with a Swiper and a button that calls swiper.slideNext() on click.
Run the application and click on the button.

If you change to the previous version of swiper (9.4.1), the app works without problems
`npm uninstall swiper
`
`npm install swiper@9.4.1`

the second branch works because I use Swiper 9

[here a live preview app with the issure](https://dashboard.ionicframework.com/preview/ea491581/csz6cd39i3)
