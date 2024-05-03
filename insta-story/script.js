// Junaid Khan Frontend Developer
var arr = [
    { dp: "https://images.unsplash.com/photo-1708607728910-b00e0c1be0af?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1708896149006-40a4755c42f2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { dp: "https://images.unsplash.com/photo-1708443683300-fb5e64c59f93?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1705091981506-f0b063fa1ac0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { dp: "https://images.unsplash.com/photo-1709028942660-f8525396a90d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1664369474115-d135a8d67b4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" },

    { dp: "https://images.unsplash.com/photo-1708980047130-9c1efcf829bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D", story: "hhttps://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" }
];


let storyFrame = document.querySelector('#story-frame');

var clutter = "";


arr.forEach(function (elem, idx) {

    clutter += ` <div id="story" >
        <img id="${idx}" src=" ${elem.dp}" alt="">
        </div>`

});


let fullScreen = document.querySelector('#full-screen');


storyFrame.innerHTML += clutter;


storyFrame.addEventListener('click', function (dets) {

    fullScreen.style.display = 'block';

    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;
    setTimeout(function () {
        fullScreen.style.display = 'none';

    }, 3000);

});
// Junaid Khan Frontend Developer