const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    document.body.classList.toggle('menu-open');
});

overlay.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.classList.remove('menu-open');
});