# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./images/Screen%20Shot%202022-05-06%20at%203.04.06%20PM.png)


### Links

- Solution URL: [Link to code](https://github.com/Drrecommended/tip-calculator)
- Live Site URL: [Link to live site](https://drrecommended.github.io/tip-calculator/)

## My process

I started with the markup from there I went straight into the Javascript. I used a workflow called chunking with this project where I broke the problem into smaller ones(grabbing input values, parsing numbers, calculating result, etc). From there I was able to put the peices together easier. Once the functionality started to come together more I started adding CSS. 

### Built with

- Semantic HTML5 markup
- SCSS
- Javascript
- Flexbox
- Mobile-first workflow


### What I learned

Through this project I learned that you can reset the style of an element to its default by including empty quotes like this
```js
  if (guests === 0 || guestCount.value === '' && billInput.value > 0) {
    warningLabel.style.visibility = 'visible'
    guestCount.style.border = '2px solid #B48070'
  } else {
    warningLabel.style.visibility = 'hidden'
    guestCount.style.border = ''
  }
```

I also learned how to prevent certain buttons from firing and cool ways to use ternary. 

### Continued development

I plan on building a couple more Jr level projects to continue to test my skills. 

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Drrecommended)



