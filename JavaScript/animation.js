//If you console of this const it will show it's html element
const text = document.querySelector('.fancy');
console.log(text);

//If you console this const it will show it's value
const strtext = text.textContent;
console.log(strtext);

//If you console like this it will show like array
const splittext = strtext.split("");
console.log(splittext)

text.textContent = ""
for (let i = 0; i < splittext.length; i++) {
    text.innerHTML += "<span>" + splittext[i] + "</span>";
};

let char = 0;
let timer = setInterval(onTick, 50);

function onTick () {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splittext.length){
        complete();
        return;
    };
};

function complete() {
    clearInterval(timer);
    timer = null;
} 