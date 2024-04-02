(function(){
    const mask =document.querySelector('.mask')
    window.addEventListener('load',()=> {
        mask.classList.add('hide')
        setTimeout(()=>{
            mask.remove()
        },2000
        )
    })
}) ()

let slideIndex = 1;

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let i;
    const slides = document.querySelectorAll('.pic5');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
       slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active"); 
    }
    
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].classList.add("active"); 
}

document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
});

const dots = document.querySelectorAll('.dot');
dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
        currentSlide(index + 1);
    });
});


showSlide(slideIndex);
