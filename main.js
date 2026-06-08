const home=document.querySelector("#home");
const programs=document.querySelector("#programs");
const socials=document.querySelectorAll("#socials img");

//navigation btns
home.addEventListener("click", () =>{
    window.location.href="index.html";
});
programs.addEventListener("click", () =>{
    window.location.href="programs.html";
});

//socials
socials.forEach(item => {
    item.addEventListener("click", () =>{
        switch(item.id){
            case "fb":
                window.open("https://www.facebook.com/IQOnlineAcademyMK/");
                break;
            case "ig":
                window.open("https://www.instagram.com/iqonlineacademy/?hl=en");
                break;
            case "in":
                window.open("https://mk.linkedin.com/company/iq-online-academy");
                break;
        }
    });
});

//buttons
function buttonListeners() {
  const schedules = document.querySelectorAll(".schedule");
  const explores = document.querySelectorAll(".explore");

  schedules.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.open(
        "https://calendly.com/info-iq-online-academy/15min?month=2025-10",
      );
    });
  });
  explores.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "programs.html";
    });
  });
}

//testimonials
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
let current = 0;

slides[current]?.classList.add("active");
function showSlide(index){
    slides.forEach(slide=>slide.classList.remove("active"));
    slides[index].classList.add("active");
}

rightBtn?.addEventListener("click", () => {
    current = (current+1) % slides.length;
    showSlide(current);
});

leftBtn?.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

//programs
const pages = document.querySelectorAll(".page");
const leftB = document.getElementById("left-slide");
const rightB = document.getElementById("right-slide");
let currentPage = 0;

pages[currentPage]?.classList.add("visible");
function showPage(index) {
  pages.forEach((page) => page.classList.remove("visible"));
  pages[index].classList.add("visible");
  currentPage = index;
}
rightB?.addEventListener("click", () => {
  const nextPage = (currentPage + 1) % pages.length;
  showPage(nextPage);
});

leftB?.addEventListener("click", () => {
  const prevPage = (currentPage - 1 + pages.length) % pages.length;
  showPage(prevPage);
});


//popups
const btnPopup = document.querySelectorAll(".btn-popup");
const popup = document.querySelector(".popups");
const overlay = document.querySelector(".overlay");

btnPopup &&
  btnPopup.forEach((item) => {
        item.addEventListener("click", function () {
          document
  .querySelectorAll(".popup-block")
  .forEach(p => p.classList.remove("popup-open"));

          popup?.classList.add("display-flex");
          overlay.classList.add("display-block");
          document.body.style.overflow = "hidden";

          loadPopups();

          const idParent = item.parentElement.parentElement.id + "-popup";
          const parentId = item.parentElement.id + "-popup";

          if (idParent != "-popup") {
            setTimeout(() => {
              switch (idParent) {
                case "digital-marketing-popup":
                  document
                    .getElementById("digital-marketing-popup")
                    ?.classList.add("popup-open");
                  break;

                case "graphic-design-popup":
                  document
                    .getElementById("graphic-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "uxui-design-popup":
                  document
                    .getElementById("uxui-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "motion-graphics-popup":
                  document
                    .getElementById("motion-graphics-popup")
                    ?.classList.add("popup-open");
                  break;

                case "interior-design-popup":
                  document
                    .getElementById("interior-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "frontend-popup":
                  document
                    .getElementById("frontend-popup")
                    ?.classList.add("popup-open");
                  break;
              }
            }, 50);
          } else {
            setTimeout(() => {
              switch (parentId) {
                case "digital-marketing-popup":
                  document
                    .getElementById("digital-marketing-popup")
                    ?.classList.add("popup-open");
                  break;

                case "graphic-design-popup":
                  document
                    .getElementById("graphic-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "uxui-design-popup":
                  document
                    .getElementById("uxui-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "motion-graphics-popup":
                  document
                    .getElementById("motion-graphics-popup")
                    ?.classList.add("popup-open");
                  break;

                case "interior-design-popup":
                  document
                    .getElementById("interior-design-popup")
                    ?.classList.add("popup-open");
                  break;

                case "frontend-popup":
                  document
                    .getElementById("frontend-popup")
                    ?.classList.add("popup-open");
                  break;
              }
            }, 50);
          }

        });
  });

const popupBlock = document.querySelectorAll(".popup-block");
function closePopup(){
    popup?.classList.remove("display-flex");
    btnPopup.forEach(nav => nav.classList.remove("display-block"));
    popupBlock.forEach(sec => sec.classList.remove("popup-open"));
    overlay.classList.remove("display-block");
    document.body.style.overflow="auto";
}
function popupClose(){
    const closePopupBlock=document.querySelectorAll(".esc-container");
    closePopupBlock.forEach(item => {
    item.addEventListener("click", closePopup)
})
}
overlay.addEventListener("click", closePopup)
let popupsLoaded = false;
function loadPopups() {
  if (popupsLoaded) return;

  fetch("programs.html")
    .then(res => res.text())
    .then(html => {
      const temp = document.createElement("div");
      temp.innerHTML = html;

      const popupsFromPrograms = temp.querySelector(".popups");
      document.querySelector(".popups").innerHTML = popupsFromPrograms.innerHTML;
      
      buttonListeners();
      popupClose();
      
      popupsLoaded = true;
    });
}

//menu - responsive
const logo=document.querySelector("#burgerButton");
const mobileMenu=document.querySelector(".mobile-menu");
logo?.addEventListener("click", (e) =>{
  e.preventDefault();
  mobileMenu?.classList.toggle("open");
})


