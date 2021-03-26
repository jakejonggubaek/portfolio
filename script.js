const intro = document.querySelector('.intro');
const arrowButton = document.querySelector('.fa-chevron-down');
const liveViewLinks = document.querySelectorAll('.live-view');
const gitLink = document.querySelectorAll('.git-repo');
const camLink = document.querySelector('.cam');
const fernLink = document.querySelector('.fern');
const melLink = document.querySelector('.mel');
const samsungLink = document.querySelector('.samsung')
const fcLink = document.querySelector('.flight-centre')

samsungLink.addEventListener('click', () => {
    window.location.href = 'https://www.samsungsds.com/en/company/overview/about_comp_over.html';
});

fcLink.addEventListener('click', () => {
    window.location.href = 'https://www.flightcentre.ca/destination/canada';
});

arrowButton.addEventListener('click', () => {
    intro.scrollIntoView();
});

liveViewLinks[0].addEventListener('click', () => {
    window.location.href = 'https://popsipoll-project.netlify.app/';
});

gitLink[0].addEventListener('click', () => {
    window.location.href = 'https://github.com/Cam-Fernanda-Melissa-Jake-Project4/popsipoll';
});

camLink.addEventListener('click', () => {
    window.location.href = 'https://camduffin.com/';
});

fernLink.addEventListener('click', () => {
    window.location.href = 'https://ferncodes.com/';
});

melLink.addEventListener('click', () => {
    window.location.href = 'https://melissalocquiao.com';
});

liveViewLinks[1].addEventListener('click', () => {
    window.location.href = 'https://donno-what-to-cook.netlify.app/';
});

gitLink[1].addEventListener('click', () => {
    window.location.href = 'https://github.com/Jess-Jake/project2';
});

liveViewLinks[2].addEventListener('click', () => {
    window.location.href = 'https://travel-survey.netlify.app/';
});

gitLink[2].addEventListener('click', () => {
    window.location.href = 'https://github.com/jakejonggubaek/travel-survey-app-project3';
});

liveViewLinks[3].addEventListener('click', () => {
    window.location.href = 'https://amy-jake.github.io/first-project/';
});

gitLink[3].addEventListener('click', () => {
    window.location.href = 'https://github.com/Amy-Jake/first-project';
});
