"use strict";
var nav = document.querySelectorAll('.nav');
var openBtn = document.getElementById('open-btn');
var closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', function () {
    nav.forEach(function (navEl) {
        navEl.classList.remove('visible');
    });
});
openBtn.addEventListener('click', function () {
    nav.forEach(function (navEl) {
        navEl.classList.add('visible');
    });
});
