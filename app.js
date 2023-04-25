let inpuuut = document.querySelector("input");
let list = document.querySelector(".list");
let newObj;
let checkedBut;

let i = 0;
let j = 0;
let obj = {
    value: "",
    checked: false,
    deleted: false
}

function addTolist(par, lol, text){
    par.appendChild(text);
    lol.appendChild(par);
    list.appendChild(lol);
}

function assignValues(par, but, check){
    but.innerHTML = "x";
    check.className = "check";
    but.className = "del";
    par.className = `par${i}`;
}

function addTodo(){
    var jadid = Object.assign({}, obj);
    let lol = document.createElement("div");
    let par = document.createElement("p");
    let but = document.createElement("button");
    let check = document.createElement("button");
    var parr;
    jadid.value = inpuuut.value;
    let text = document.createTextNode(jadid.value);
    lol.appendChild(check);
    addTolist(par, lol, text);
    assignValues(par, but, check);
    lol.appendChild(but);
    newObj = jadid;
    parr = document.querySelector(`.par${i}`);
    check.onclick = function (){
        if (parr.style.textDecoration == "line-through")
        {
            parr.style.textDecoration = "none";
            console.log("hello");
            check.innerHTML = "";
        }
        else
        {
            parr.style.textDecoration = "line-through";
            check.innerHTML = "✓";
        }
    };
    but.onclick = function (){
        console.log(lol);
        lol.remove();
    };
    i++;
}