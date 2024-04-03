let img = document.querySelector('img');
let icon = document.querySelector('#icon');
let span = document.querySelector('span');
let heart = document.querySelector('.heart');

img.addEventListener('dblclick', function () {
    icon.style.opacity = 0.8;
    icon.style.transform = "scale(2)";
    icon.style.color = 'red';
    setTimeout(function () {

        icon.style.transform = "scale(0)";

    }, 3000)
    setTimeout(function () {
        icon.style.opacity = 0;


    }, 2000)
});

heart.addEventListener("click", function () {
    span.innerHTML = "787,200 likes"
    heart.style.color = "red";

});

img.addEventListener("dblclick", function () {
    span.innerHTML = "787,200 likes"
    setTimeout(function () {
        heart.style.color = "red";
    }, 300);

});