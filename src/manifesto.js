
// http://animejs.com/documentation/#basicTimeline
const anime = require("animejs");

var basicTimeline = anime.timeline({
  direction: 'alternate',
  loop: true
});

basicTimeline
  .add({
    targets: '#manifesto h1',
    translateX: 250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#manifesto .p1',
    translateX: 250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#manifesto .p2',
    translateX: 250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#manifesto .p3',
    translateX: 250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#manifesto .p4',
    translateX: 250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#manifesto .p5',
    translateX: 250,
    easing: 'easeOutExpo'
  })