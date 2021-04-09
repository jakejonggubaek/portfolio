const loading = document.querySelector('.loading');
const intro = document.querySelector('.intro'); 
const skillsPage = document.querySelector('.skills');
const projectsPage = document.querySelectorAll('.projects');
const contactPage = document.querySelector('.contact');
const arrowButton = document.querySelectorAll('.fa-chevron-down');
const liveViewLinks = document.querySelectorAll('.live-view');
const gitLink = document.querySelectorAll('.git-repo');
const camLink = document.querySelector('.cam');
const fernLink = document.querySelector('.fern');
const melLink = document.querySelector('.mel');
const jessLink = document.querySelector('.jess');
const samsungLink = document.querySelector('.samsung');
const fcLink = document.querySelector('.flight-centre');
const resumeLink = document.querySelector('.resume');
const form = document.getElementById("my-form");
const p1Link = document.querySelector('.popsipoll');
const p2Link = document.querySelector('.what-to-cook');
const p3Link = document.querySelector('.travel-survey');
const p4Link = document.querySelector('.boat-ride');

setTimeout(() => { loading.style.display = 'none'}, 2000);

resumeLink.addEventListener('click', () => {
    window.location.href = './assets/Resume_JongguJakeBaek.pdf';
});

samsungLink.addEventListener('click', () => {
    window.location.href = 'https://www.samsungsds.com/en/company/overview/about_comp_over.html';
});

fcLink.addEventListener('click', () => {
    window.location.href = 'https://www.flightcentre.ca/destination/canada';
});

arrowButton[0].addEventListener('click', () => {
    intro.scrollIntoView({ behavior: "smooth" });
});

arrowButton[1].addEventListener('click', () => {
    skillsPage.scrollIntoView({ behavior: "smooth" });
});

arrowButton[2].addEventListener('click', () => {
    projectsPage[0].scrollIntoView({ behavior: "smooth" });
});

arrowButton[3].addEventListener('click', () => {
    projectsPage[1].scrollIntoView({ behavior: "smooth" });
});

arrowButton[4].addEventListener('click', () => {
    contactPage.scrollIntoView({ behavior: "smooth" });
});

p1Link.addEventListener('click', () => {
    window.location.href = 'https://popsipoll-project.netlify.app/';
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

jessLink.addEventListener('click', () => {
    window.location.href = 'https://jessonthenet.com';
});

p2Link.addEventListener('click', () => {
    window.location.href = 'https://donno-what-to-cook.netlify.app/';
});

liveViewLinks[1].addEventListener('click', () => {
    window.location.href = 'https://donno-what-to-cook.netlify.app/';
});

gitLink[1].addEventListener('click', () => {
    window.location.href = 'https://github.com/Jess-Jake/project2';
});

p3Link.addEventListener('click', () => {
    window.location.href = 'https://travel-survey.netlify.app/';
});

liveViewLinks[2].addEventListener('click', () => {
    window.location.href = 'https://travel-survey.netlify.app/';
});

gitLink[2].addEventListener('click', () => {
    window.location.href = 'https://github.com/jakejonggubaek/travel-survey-app-project3';
});

p4Link.addEventListener('click', () => {
    window.location.href = 'https://amy-jake.github.io/first-project/';
});

liveViewLinks[3].addEventListener('click', () => {
    window.location.href = 'https://amy-jake.github.io/first-project/';
});

gitLink[3].addEventListener('click', () => {
    window.location.href = 'https://github.com/Amy-Jake/first-project';
});

async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        alert("Thanks for sending me a message!");
        form.reset()
    }).catch(error => {
        alert("Message was not sent properly. Please submit your message again :)");
    });
}
form.addEventListener("submit", handleSubmit)