let firstTabBtn = document.querySelector(".first-tab-btn");
let secondTabBtn = document.querySelector(".second-tab-btn");
let thirdTabBtn = document.querySelector(".third-tab-btn");
let fourthTabBtn = document.querySelector(".fourth-tab-btn");

firstTabBtn.style.color = "black"
firstTabBtn.style.borderBottom = "3px solid black"
firstTabBtn.style.transform = "translateY(5px)";


// for first tab button

let isMousedownTab1 = true;

firstTabBtn.addEventListener("mouseenter", function () {
    firstTabBtn.style.color = "black"
    firstTabBtn.style.borderBottom = "3px solid black"
})

firstTabBtn.addEventListener("mousedown",  () => {
    secondTabBtn.style.color = "black";
    secondTabBtn.style.borderBottom = "3px solid black"
    
    firstTabBtn.style.transform = "translateY(5px)";
    
    secondTabBtn.style.transform = "translateY(0)";
    thirdTabBtn.style.transform = "translateY(0)";
    fourthTabBtn.style.transform = "translateY(0)";
    
    secondTabBtn.style.color = "gray";
    secondTabBtn.style.borderBottom = "0";

    thirdTabBtn.style.color = "gray";
    thirdTabBtn.style.borderBottom = "0";

    fourthTabBtn.style.color = "gray";
    fourthTabBtn.style.borderBottom = "0";

    isMousedownTab1 = true;
    isMousedownTab2 = false;
    isMousedownTab3 = false;
    isMousedownTab4 = false;
})

firstTabBtn.addEventListener("mouseleave", function () {
    if(!isMousedownTab1){
        firstTabBtn.style.color = "gray";
        firstTabBtn.style.borderBottom = "0";
    } 
})

firstTabBtn.addEventListener("click", function () {
    document.querySelector(".first-tab").style.display = "block";
    document.querySelector(".second-tab").style.display = "none";
    document.querySelector(".third-tab").style.display = "none";
    document.querySelector(".fourth-tab").style.display = "none";
})





// for second tab button

let isMousedownTab2 = false;

secondTabBtn.addEventListener("mouseenter", function () {
    secondTabBtn.style.color = "black";
    secondTabBtn.style.borderBottom = "3px solid black"
})

secondTabBtn.addEventListener("mousedown",  () => {
    secondTabBtn.style.transform = "translateY(5px)";
    secondTabBtn.style.color = "black";
    secondTabBtn.style.borderBottom = "3px solid black"

    
    firstTabBtn.style.transform = "translateY(0)";
    thirdTabBtn.style.transform = "translateY(0)";
    fourthTabBtn.style.transform = "translateY(0)";
    
    firstTabBtn.style.color = "gray";
    firstTabBtn.style.borderBottom = "0";

    thirdTabBtn.style.color = "gray";
    thirdTabBtn.style.borderBottom = "0";

    fourthTabBtn.style.color = "gray";
    fourthTabBtn.style.borderBottom = "0";

    isMousedownTab2 = true;
    isMousedownTab1 = false;
    isMousedownTab3 = false;
    isMousedownTab4 = false
})

secondTabBtn.addEventListener("mouseleave", function () {
    if(!isMousedownTab2){
        secondTabBtn.style.color = "gray";
        secondTabBtn.style.borderBottom = "0";
    } 
})

secondTabBtn.addEventListener("click", function () {
    document.querySelector(".second-tab").style.display = "block";
    document.querySelector(".first-tab").style.display = "none";
    document.querySelector(".third-tab").style.display = "none";
    document.querySelector(".fourth-tab").style.display = "none";
})






// for third tab button

let isMousedownTab3 = false;
thirdTabBtn.addEventListener("mouseenter", function () {
    thirdTabBtn.style.color = "black";
    thirdTabBtn.style.borderBottom = "3px solid black";
})

thirdTabBtn.addEventListener("mousedown",  () => {
    thirdTabBtn.style.transform = "translateY(5px)";
    thirdTabBtn.style.color = "black";
    thirdTabBtn.style.borderBottom = "3px solid black"

    
    firstTabBtn.style.transform = "translateY(0)";
    secondTabBtn.style.transform = "translateY(0)";
    fourthTabBtn.style.transform = "translateY(0)";
    
    firstTabBtn.style.color = "gray";
    firstTabBtn.style.borderBottom = "0";

    secondTabBtn.style.color = "gray";
    secondTabBtn.style.borderBottom = "0";

    fourthTabBtn.style.color = "gray";
    fourthTabBtn.style.borderBottom = "0";

    isMousedownTab3 = true;
    isMousedownTab1 = false;
    isMousedownTab2 = false;
    isMousedownTab4 = false;
})

thirdTabBtn.addEventListener("mouseleave", function () {
    if(!isMousedownTab3){
        thirdTabBtn.style.color = "gray";
        thirdTabBtn.style.borderBottom = "0";
    }
})


thirdTabBtn.addEventListener("click", function () {
    document.querySelector(".third-tab").style.display = "block";
    document.querySelector(".first-tab").style.display = "none";
    document.querySelector(".second-tab").style.display = "none";
    document.querySelector(".fourth-tab").style.display = "none";
})



// for fourth tab button
let isMousedownTab4 = false;
fourthTabBtn.addEventListener("mouseenter", function () {
    fourthTabBtn.style.color = "black";
    fourthTabBtn.style.borderBottom = "3px solid black"
})

fourthTabBtn.addEventListener("mousedown",  () => {
    fourthTabBtn.style.transform = "translateY(5px)";
    fourthTabBtn.style.color = "black";
    fourthTabBtn.style.borderBottom = "3px solid black"

    
    firstTabBtn.style.transform = "translateY(0)";
    secondTabBtn.style.transform = "translateY(0)";
    thirdTabBtn.style.transform = "translateY(0)";
    
    firstTabBtn.style.color = "gray";
    firstTabBtn.style.borderBottom = "0";
    
    secondTabBtn.style.color = "gray";
    secondTabBtn.style.borderBottom = "0";

    thirdTabBtn.style.color = "gray";
    thirdTabBtn.style.borderBottom = "0";

    isMousedownTab4 = true;
    isMousedownTab1 = false;
    isMousedownTab2 = false;
    isMousedownTab3 = false;
})

fourthTabBtn.addEventListener("mouseleave", function () {
    if(!isMousedownTab4) {
        fourthTabBtn.style.color = "gray";
        fourthTabBtn.style.borderBottom = "0";
    }
})

fourthTabBtn.addEventListener("click", function () {
    document.querySelector(".fourth-tab").style.display = "block";
    document.querySelector(".first-tab").style.display = "none";
    document.querySelector(".second-tab").style.display = "none";
    document.querySelector(".third-tab").style.display = "none";
})