// menampilkan Slide Navbar
const menuToggle = document.querySelector('.menu-toggle input ');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

// Membuat Active Link pada Navbar
var btnContainer = document.querySelector('ul');
var btns = btnContainer.querySelectorAll('a');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active');
        this.className += ' active';
    });
}
