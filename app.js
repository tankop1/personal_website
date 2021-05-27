// NAV BAR POSITIONING
const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.scrollY > (nav.offsetTop + nav.offsetHeight)) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.left = '0';
    }

    else {
        nav.style.position = 'sticky';
        nav.style.top = '';
        nav.style.left = '';
    }
});

// SECTION TITLE ANIMATIONS

function setTitleAnimation(section, title) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > (section.offsetTop)) {
            title.style.animationName = 'sectionTitle';
            title.style.animationDuration = '1.5s';
            title.style.animationFillMode = 'forwards';
        }
    });
}

const sections = document.querySelectorAll('section');
const titles = document.querySelectorAll('.section-title');

for (let i = 0; i < sections.length; i++) {
    //setTitleAnimation(sections[i], titles[i]);
}

// STATS ANIMATIONS

const languageStat = document.getElementById('languages-stat');
const experienceStat = document.getElementById('experience-stat');
const optionStat = document.getElementById('option-stat');

function setNextNumber() {
    if (parseInt(languageStat.innerHTML) < 8) {
        languageStat.innerHTML = parseInt(languageStat.innerHTML) + 1;
    }

    if (parseInt(experienceStat.innerHTML) < 16) {
        experienceStat.innerHTML = parseInt(experienceStat.innerHTML) + 1;
    }
}

setInterval(setNextNumber, 100);
setInterval(() => {
    if (parseInt(optionStat.innerHTML) < 100) {
        optionStat.innerHTML = parseInt(optionStat.innerHTML) + 1 + '%';
    }
}, 25);