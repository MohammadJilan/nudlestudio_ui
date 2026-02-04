const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const googleBtns = document.querySelectorAll('.google-btn');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;

        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'interests.html';
    // window.location.href = 'sanlam-training.html';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'learnpage3.html';
    // window.location.href = 'sanlam-training.html';
});

googleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'interests.html';
        // window.location.href = 'sanlam-training.html';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const line = document.querySelector(".divider-line");
    window.addEventListener("resize", () => {
        if (window.innerWidth < 400) {
            line.style.height = "1px";
        } else {
            line.style.height = "2px";
        }
    });
});
