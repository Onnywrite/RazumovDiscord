const themeToggle = document.querySelector('.theme-switcher');
const body = document.body;
let isDark = true;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    body.setAttribute('data-theme', theme(isDark));
    themeToggle.innerHTML = isDark ?
        '<i class="fas fa-moon"></i>' :
        '<i class="fas fa-sun"></i>';

    localStorage.setItem('theme', theme(isDark));
});

const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
isDark = savedTheme === 'dark';
themeToggle.innerHTML = isDark ?
    '<i class="fas fa-moon"></i>' :
    '<i class="fas fa-sun"></i>';

function theme(isDark) {
    return isDark ? 'dark' : 'light';
}