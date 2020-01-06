const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const t1 = new TimelineMax();


t1.fromTo(hero,0.75, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
.fromTo(hero, 0.75, { width: "0%"}, {width: "100%", ease: Power2.easeInOut})
.fromTo(headline, 1, {x: "-1000%"}, {x: "0%", ease: Power2.easeInOut}, "-=0.75")
