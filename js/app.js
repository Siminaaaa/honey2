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



document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search_form_sec6');
    const input = document.querySelector('.search-form__field_sec6');
    const button = document.querySelector('.search-form__submit_sec6');

    function createError(text,input) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')
        parent.classList.add('error')
        errorLabel.classList.add('error-label')
        errorLabel.textContent = text
        parent.appendChild(errorLabel)
    }



    function validateAndClearInput() {
        const emailValue = input.value.trim();

        if (input.value.trim() === '') { 
          
            input.style.borderColor = 'red';
            createError("Поле не заполнено", input)
        } else if (!emailValue.endsWith('@gmail.com')){
            input.style.borderColor = 'red';
            createError("Email должен заканчиваться на '@gmail.com'", input);
        return;
        }else {
            input.style.borderColor = '';
            input.value = ''; 
            const errorLabels = document.querySelectorAll('.error-label');
            errorLabels.forEach(function(label) {
                label.remove();
            });
            alert("Форма успешно отправлена ")
            }
    }

    button.addEventListener('click', function(event) {
        event.preventDefault();

        validateAndClearInput();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const pages = document.querySelector('.pages');
    let isMenuVisible = false;
  
    function closeMenu() {
      pages.classList.remove('visible');
      isMenuVisible = false;
    }
  
    burgerBtn.addEventListener('click', function(event) {
      event.stopPropagation(); 
      isMenuVisible = !isMenuVisible; 
      if (isMenuVisible) {
        pages.classList.add('visible')
      } else {
        closeMenu()
      }
    });
    
      document.addEventListener('click', function(event) {
      if (isMenuVisible && !pages.contains(event.target) && event.target !== burgerBtn) {
        closeMenu();
      }
    });
  });
  