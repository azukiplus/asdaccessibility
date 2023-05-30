"use strict";
(function () {
    window.addEventListener('load', init);

    /**
     * The initial function that runs when the window finishes loading.
     */
    function init() {
        toastChecker();
        textSizeChanger();
        darkModer();
        popup();
        saved();
        failorSucceed();
    }


})();
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');
const textSizer = document.getElementById('text-size-change');

function toastChecker() {
    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }
}

function textSizeChanger() {
    let slider = document.getElementById('customRange2');
    slider.addEventListener("input", () => {
        let sliderVal = document.getElementById('customRange2').value;
        textSizer.style.fontSize = sliderVal + "px";
    })
}

function darkModer() {
    let light = document.getElementById('light-mode');
    let dark = document.getElementById('dark-mode');
    let darken = document.getElementById('darken');
    let darkenWords = document.getElementsByClassName('dark-tog');
    let darkSlider = document.getElementById('customRange2');

    light.addEventListener('click', () => {
        darken.classList.add('bg-light');
        darken.classList.remove('bg-dark');
        for (let i = 0; i < darkenWords.length; i++) {
            darkenWords[i].classList.add('text-black');
            darkenWords[i].classList.remove('text-white');
        }
        darkSlider.classList.add('bg-white');
        darkSlider.classList.remove('bg-dark');
    });
    dark.addEventListener('click', () => {
        darken.classList.add('bg-dark');
        darken.classList.remove('bg-light');
        for (let i = 0; i < darkenWords.length; i++) {
            darkenWords[i].classList.add('text-white');
            darkenWords[i].classList.remove('text-black');
        }
        darkSlider.classList.add('bg-dark');
        darkSlider.classList.remove('bg-white');
    });
}

function popup() {
    let alerter = document.getElementById('popup');
    alerter.addEventListener('click', () => {
        alert("Made you click!");
    });
}

function saved() {
    let saveBtn = document.getElementById('save-btn');
    let savedMsg = document.getElementById('hidden');

    saveBtn.addEventListener('click', () => {
        savedMsg.classList.add('fade-in');
        setTimeout(function () {
            savedMsg.classList.remove('fade-in');
        }, 3000);
    });
}

function failorSucceed() {
    let failBtn = document.getElementById('fail-btn');
    let sucBtn = document.getElementById('success-btn');
    let failorSucceed = document.getElementById('fail-or-succeed');

    failBtn.addEventListener('click', () => {
        failorSucceed.innerHTML = "Failed! 😔";
    });

    sucBtn.addEventListener('click', () => {
        failorSucceed.innerHTML = "Success! ⭐";
    });
}