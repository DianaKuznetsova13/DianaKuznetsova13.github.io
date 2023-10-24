const body = document.querySelector("body");
const navbar = document.querySelector(".my_navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}

const buttons = document.querySelectorAll("[data-slider-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.sliderButton === "next" ? 1 : -1;
        const slides = button
            .closest("[data-slider]")
            .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})

window.addEventListener('load', function () {
    let animatedImage = document.querySelector('.image__container img');
    let animatedText = document.querySelector('.text__container');
    animatedImage.classList.add('animate');
    animatedText.classList.add('animate');
});


const form = document.querySelector("form");
eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");
form.onsubmit = (e)=>{
    e.preventDefault();
    (eInput.value == "") ? eField.classList.add("error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("error") : checkPass();
    eInput.onkeyup = ()=>{checkEmail();}
    pInput.onkeyup = ()=>{checkPass();}
    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!eInput.value.match(pattern)){
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");

            (eInput.value != "") ? errorTxt.innerText = "Введите правильный E-mail" : errorTxt.innerText = "Поле не может быть пустым";
        }else{
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }
    function checkPass(){
        if(pInput.value == ""){
            pField.classList.add("error");
            pField.classList.remove("valid");
        }else{
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }
    if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        window.location.href = form.getAttribute("action");
    }
}
