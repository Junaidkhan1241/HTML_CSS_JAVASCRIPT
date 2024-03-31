let btn = document.querySelector('#btn');
let caption = document.querySelector('h3');
let check = 0;

btn.addEventListener('click', function(){
    if(check == 0){
        caption.innerHTML = "Friend";
        caption.style.color = "Green";
        btn.innerHTML = "Remove Friend";
        check = 1;
        
    } else {
        caption.innerHTML = "Stranger";
        caption.style.color = "red";
        btn.innerHTML = "Add Friend";
        check = 0;

    }
});