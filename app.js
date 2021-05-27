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