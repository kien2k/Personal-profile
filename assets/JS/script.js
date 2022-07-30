let $ = document.querySelector.bind(document) 
let $$ = document.querySelectorAll.bind(document) 

let lines = $$('.nav .nav-list li a .nav-line')
let menu = $('.header .nav .menu')
let navList = $('.header .nav .nav-list')
let menu_items = $$('.nav .nav-list li a')

// xử lí menu khi cuộn xuống 
window.onscroll = function() {
    if(this.scrollY > 20) {
        $('.header').classList.add('active')
        lines.forEach(line => {
            line.style.backgroundColor = 'white'
        });
    }
    else {
        $('.header').classList.remove('active')
        lines.forEach(line => {
            line.style.backgroundColor = 'var(--primary-color)'
        });
    }
    if(this.scrollY > 500) {
        $('.scroll-up-btn ').classList.add('show')
    }
    else {
        $('.scroll-up-btn ').classList.remove('show')
    }
}

// xử lí chữ chạy tự động 
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Single", "Simple person"],
    typeSpeed: 100,
    backSpeed: 60, 
    loop: true
});

$('.scroll-up-btn ').onclick = function() {
    // $('html').animate([{scrollTop: 0}])
    $('html').scrollTop = 0
}

//click vào menu ở tablet, mobile
menu.onclick = function() {
    this.classList.toggle('active')
    navList.classList.toggle('active')
}

// click vào menu btn on tablet, mobile
menu_items.forEach((menu_item) => {
    menu_item.onclick = () => {
        navList.classList.toggle('active')
        menu.classList.toggle('active')
    }
})

// carousel
// $('.carousel').owlCarousel({
//     margin: 20,
//     loop: true,
//     autoplayTimeOut: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             item: 1,
//             nav: false
//         },
//         600: {
//             item: 2,
//             nav: false
//         },
//         1000: {
//             item: 3,
//             nav: false
//         }
//     }
// });

//xử lí khi di chuột or click vào li 
// $$('.nav .nav-list li').forEach((li, index) => {
//     let isClick  = false;
//     let liActive = $('.nav .nav-list li.active')
//     let line = lines[index]
    
//     li.onmouseenter = function() {
//         li.classList.add('active')
        
//     }
//     li.onclick = function() {
//         isClick = true
//         liActive.classList.remove('active')
//     }
//     li.onmouseleave = function() {
//         if(isClick){
//             // $('.nav .nav-list li.active').classList.remove('active')
//             li.classList.add('active')
//         }
//         else {
//             li.classList.remove('active')
//             // deleteAcitve();
//         }
//         console.log(isClick)
        
//     }
    
// }) 

// function deleteAcitve() {
//     $$('.nav .nav-list li').forEach((li, index) => {
//             li.classList.remove('active')
//     })
// }


