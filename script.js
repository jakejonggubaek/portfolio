const body = document.querySelector('body');

//each section page
const loading = document.querySelector('.loading');
const intro = document.querySelector('.intro'); 
const skillsPage = document.querySelector('.skills');
const projectsPage = document.querySelectorAll('.projects');
const contactPage = document.querySelector('.contact');

//page down arrow button
const arrowButton = document.querySelectorAll('.fa-chevron-down');
//go to the top button
const topButton = document.querySelector('.topBtn');

const liveViewLinks = document.querySelectorAll('.live-link');
const gitLink = document.querySelectorAll('.git-repo');
const camLink = document.querySelector('.cam');
const fernLink = document.querySelector('.fern');
const melLink = document.querySelector('.mel');
const jessLink = document.querySelector('.jess');
// const samsungLink = document.querySelector('.samsung');
// const fcLink = document.querySelector('.flight-centre');
const resumeLink = document.querySelector('.resume');

const form = document.getElementById("my-form");

const projectBrief= document.querySelectorAll('.project-brief');
const projectDetail = document.querySelectorAll('.project-detail');
const progectDetailClose = document.querySelectorAll('.close');

//loading page
setTimeout(() => { 
    loading.style.display = 'none';
    
}, 2000);

setTimeout(() => {
    arrowButton[0].style.visibility = 'visible';

}, 7000);

//show&hide go-to-the top button
const screenScroll = () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}
body.addEventListener("scroll", screenScroll);

//scroll to top button - to landing page
topButton.addEventListener('click', () => {
    document.body.scrollTo({ top: 0, behavior: 'smooth' }); // For Safari
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
});

resumeLink.addEventListener('click', () => {
    window.open('./assets/RESUME_JAKE_BAEK.pdf');
});

// samsungLink.addEventListener('click', () => {
//     window.open('https://www.samsungsds.com/en/company/overview/about_comp_over.html');
// });

// fcLink.addEventListener('click', () => {
//     window.open('https://www.flightcentre.ca/destination/canada');
// });

//arrow button to scroll down
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
    contactPage.scrollIntoView({ behavior: "smooth" });
});

liveViewLinks[0].addEventListener('click', () => {
    window.open('https://samsungfire.com/m/');
});

camLink.addEventListener('click', () => {
    window.open('https://camduffin.com/');
});

fernLink.addEventListener('click', () => {
    window.open('https://ferncodes.com/');
});

melLink.addEventListener('click', () => {
    window.open('https://melissalocquiao.com');
});

jessLink.addEventListener('click', () => {
    window.open('https://jessonthenet.com');
});

//popsipoll link - live and git repo
liveViewLinks[1].addEventListener('click', () => {
    window.open('https://popsipoll.netlify.app/');
});
gitLink[0].addEventListener('click', () => {
    window.open('https://github.com/Cam-Fernanda-Melissa-Jake-Project4/popsipoll');
});


//jake's travel link - live and git repo
liveViewLinks[2].addEventListener('click', () => {
    window.open('https://travel-survey.netlify.app/');
});
gitLink[1].addEventListener('click', () => {
    window.open('https://github.com/jakejonggubaek/travel-survey-app-project3');
});

//random recipe link - live and git repo
liveViewLinks[3].addEventListener('click', () => {
    window.open('https://random-recipe-jj.netlify.app/');
});
gitLink[2].addEventListener('click', () => {
    window.open('https://github.com/Jess-Jake/randome-recipe-app');
});


//to-do app link - live and git repo
liveViewLinks[4].addEventListener('click', () => {
    window.open('https://team-to-do-manager.netlify.app/');
});
gitLink[3].addEventListener('click', () => {
    window.open('https://github.com/jakejonggubaek/to-do-list-for-group-app');
});

//korean sachal app link - live and git repo
liveViewLinks[5].addEventListener('click', () => {
    window.open('https://korean-sachal.netlify.app/');
});
gitLink[4].addEventListener('click', () => {
    window.open('https://github.com/jakejonggubaek/boilerplate-webpack-react-less');
});

//project detail pop up page open 
for (let i = 0; i < projectBrief.length; i++) {

    projectBrief[i].addEventListener('click', () => {
        projectDetail[i].style.right = '0';
    })
    progectDetailClose[i].addEventListener('click', () => {
        projectDetail[i].style.right = '-5000px';
    })
}

//contact form logic
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