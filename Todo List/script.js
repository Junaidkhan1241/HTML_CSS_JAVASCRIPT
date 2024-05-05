// Junaid khan front end developer
document.getElementById("btn").addEventListener("click", add);
document.getElementById("btn").addEventListener("click", two);

function add() {
    let value = document.getElementById("input").value;

    let li = document.createElement('li');
    li.textContent = value;

    //   document.getElementById("result").innerText=value;
    
    document.getElementById("result").appendChild(li);

}

function two() {
    document.getElementById("result").style.background = "#ccc"
    document.getElementById("result").style.color = "#000"
}



