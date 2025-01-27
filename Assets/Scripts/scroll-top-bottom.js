const scrollUp = document.getElementById('scrollUp');
const scrollDown = document.getElementById('scrollDown');
const updateScrollButtons = () => {
    const scrollPosition = window.scrollY; 
    const contentHeight = document.body.scrollHeight; 
    const visibleHeight = window.innerHeight; 

    if (scrollPosition > 0) {
        scrollButtons.classList.add('visible'); 
    } else {
        scrollButtons.classList.remove('visible'); 
    }

    if (scrollPosition + visibleHeight >= contentHeight - 1) {
        scrollDown.style.display = 'none';
    } else {
        scrollDown.style.display = 'block'; 
    }
};

const addButtonEffect = (button) => {
    button.classList.add('active'); 
    setTimeout(() => {
        button.classList.remove('active'); 
    }, 200); 
};

scrollUp.addEventListener('click', function () {
    addButtonEffect(scrollUp); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollDown.addEventListener('click', function () {
    addButtonEffect(scrollDown); 
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

window.addEventListener('scroll', updateScrollButtons);

updateScrollButtons();
