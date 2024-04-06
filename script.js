let dice = document.querySelector(".dice");
let btn = document.getElementById("btn");
let count = document.getElementById("count");
let numbers = document.getElementById("numbers")
let Code = document.getElementById("code");
let refresh=document.getElementById("refresh");
let tempCount=0;
let temNumbers=0;

//Random Number Generator Function
const gernerateRandomNumber = () => {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    return randomNumber;
}
//Get Dice Face Function
const getDiceFunction = (randomNumber) => {
    switch (randomNumber) {
        case 1:
            return '&#9856;'
        case 2:
            return '&#9857;'
        case 3:
            return '&#9858;'
        case 4:
            return '&#9859;'
        case 5:
            return '&#9860;'
        case 6:
            return '&#9861;'
        default:
            return ""
    }
}
//Animate Function For Animation
const animateFunction = () => {
    Code.classList.add('roll-animation');
    setTimeout(() => {
        Code.classList.remove('roll-animation');
    }, 1000)
}

const updateTable=(con,num)=>{
count.innerText=con;
numbers.innerText=num;
}

btn.addEventListener('click', () => {
    let randomNumber = gernerateRandomNumber();
    let code = getDiceFunction(randomNumber);
    temNumbers=temNumbers+randomNumber;
    tempCount++;
    updateTable(tempCount,temNumbers);
    Code.innerHTML = code;
    animateFunction();
})

refresh.addEventListener('click',()=>{
    tempCount=0;
    temNumbers=0;
    updateTable(tempCount,temNumbers);
})