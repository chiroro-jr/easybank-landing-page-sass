# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - frontend build tool
- [Sass](https://sass-lang.com/) - React framework

### What I learned

1. Its not a matter of CSS Grid **or** Flexbox, but rather CSS Grid **and** Flex. Use both. They are just different ways of creating rows and columns. Put work into learning when to use each one. Personally I feel that CSS Flexbox is for situations where you want implicit rows or columns. In this case the dimensions of each row or column is determined by the dimensions of the flex item i.e. the content. CSS Grid works best if you want more fine grained control over the rows or columns i.e. if you want to be explicit about the dimensions of the rows and columns.

2. When trying to pick between CSS Grid and Flexbox while you are implementing your design in code, try to use the one that gives you the least resistance. A simple solution is usually the best. If you find yourself fighting yourself too much especially when making your site responsive then you are probably used the wrong technique.

3. Don't focus on the low level details first when you are implementing your design for example the exact sizes of things like fonts, padding, margins and so on. Get the layout of the page out of the way first using sizes for paddings, margins and etc that just look okay. When the layout is good, come back and fine tune your side.

4. If you are struggling to implement a specific section of your design, its best to skip it and move on to the rest of the page. You can just put some filler text or anything to remind yourself that this needs to be done later. This is what I did with that header. I was finding it rather difficult to implement so I implemented the entire page then came back to it.

5. Absolutely positioned elements can overflow on the right and not on the left if their position puts them outside the viewport. This can cause scrollbars to appear which may not be the desired behavior. I faced this problem when I was positioning the mobile app mockups in the header. To solve this problem hide the horizontal overflow on the body. 

   ```css
   body {
   	overflow-x: hidden;
   }	
   ```

   For a detailed explanation of the problem, why it happens and why the solution works, please check out [this](https://stackoverflow.com/questions/36531708/why-does-position-absolute-make-page-to-overflow) stackoverflow thread.

6. Never give up. Programming requires a lot of persistence. While coding, if you feel you are starting to get confused and making a lot of mistakes, take a break. Play a game. Just do something to take your mind away from the code.

7. Take it easy. No need to rush when coding. Think. The important thing when your are learning to code is to finish. It doesn't matter how long it takes you to finish. 

7. Don't worry about version control too much when you still starting to code. I think the basics are enough like pushing and pulling, staging, committing and so on. Focus first on learning how to code before obsessing on how to version control it. I think its easier to master version control when you don't have to worry about the code at the same time.

### Continued development

I plan on doing this same site using Tailwind CSS later on. I wanted to do it in React too but I feel like its too small a site to use React. 

### Useful resources

- [Building Tailwind CSS Navbars - Responsive too!](https://https://www.youtube.com/watch?v=miiPsBlqMns) - This video helped me get an idea of how I can implement my navigation bar.

## Author

- Frontend Mentor - [@chiroro-jr](https://www.frontendmentor.io/profile/chiroro-jr)
- Twitter - [@chiroro_jr](https://www.twitter.com/chiroro_jr)
