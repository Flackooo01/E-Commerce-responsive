humburger = document.querySelector(".humburger");
humburger.onclick = function(){
    navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}

// Navbar
first = document.querySelector(".font-logo");
first.onclick = function(){
    navbar = document.querySelector(".first-nav-nav");
    navbar.classList.toggle("active");
};
sec = document.querySelector(".sec-font-logo");
sec.onclick = function(){
    navbar = document.querySelector(".sec-nav-nav");
    navbar.classList.toggle("active");
};

// image Slider
let slideImg = document.getElementById("slideImg");

let image = new Array("images/Background/Background.jpg",
                    "images/Background/Backgroud2.jpg",
                    "images/Background/Backgroud3.jpg",
                    "images/Background/Backgroud4.jpg",
                    );
let len = image.length;
let i = 0;
function slider(){
    if(i > len -1){
        i = 0;
    }
    slideImg.src = image[i];
    i++
    setTimeout('slider()',3000);
};


// Single Product Images
let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function (){
    MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function (){
    MainImg.src = smallimg[1].src;
};
smallimg[1].onclick = function (){
    MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function (){
    MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function (){
    MainImg.src = smallimg[3].src;
};












// Navbar @media queries
// $(document).ready(function(){
//     $('.font-logo').on('click',function(){
//         $('.nav .first-nav-nav').toggleClass('show');
//     })
// })
// $(document).ready(function(){
//     $('.sec-font-logo').on('click',function(){
//         $('.nav .sec-nav-nav').toggleClass('show');
//     })
// })
