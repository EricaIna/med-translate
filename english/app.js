//header
let btn = document.querySelector("#js-hamburger");
let nav = document.querySelector("#js-list");

btn.onclick = () => {
  nav.classList.toggle("open");
};

let headerList = document.querySelector(".header-list");
headerList.onclick = function () {
  nav.classList.remove("open");
};

//customer voice slider

var customerVoiceEnglish = [
  {
    title: "Used service : Hospital accompaniment",
    text: "A few days after arriving in the UK, my 1-year-old daughter suddenly vomited, had a high fever and had difficulty breathing. Thanks to this service, even someone like me, who doesn't understand English at all, was able to get help immediately. During the waiting time, they helped me with medical care, and the staff was a medical worker, so it was very helpful mentally.",
    reviewer: "A.Tanaka",
  },
  {
    title: "Used service : Pharmacy correspondence",
    text: "I needed a substitute for the medicine I usually take in Japan, and I was worried about buying the correct medicine because I have allergies, so I used this. A local pharmacist made a three-way call over the videophone, and I was able to replenish the necessary medicine without any problems. I didn't have to go back to Japan, so it was really helpful.",
    reviewer: "Perterson Cocomi",
  },
  {
    title: "Used service :English translation of medical documents",
    text: " I used this service because I needed an English translation of my chronic illness and surgery history when I signed up for insurance. Thank you for your quick response, even though I didn't have much time.",
    reviewer: "I.Emma",
  },
];

function updateCustomerVoice(currentServiceEnglish, customerVoiceEnglish) {
  var title = customerVoiceEnglish[currentServiceEnglish].title;
  var text = customerVoiceEnglish[currentServiceEnglish].text;
  var reviewer = customerVoiceEnglish[currentServiceEnglish].reviewer;

  customerTitleAreaEnglish.innerHTML = title;
  customerTextAreaEnglish.innerHTML = text;
  customerReviewAreaEnglish.innerHTML = reviewer;
}

var previousArrowEnglish = document.getElementById("previous-arrow-english");
var nextArrowEnglish = document.getElementById("next-arrow-english");
var customerTitleAreaEnglish = document.getElementById(
  "customer-title-english"
);
var customerTextAreaEnglish = document.getElementById("customer-text-english");
var customerReviewAreaEnglish = document.getElementById(
  "customer-name-english"
);

var currentServiceEnglish = 0;

nextArrowEnglish.onclick = function () {
  if (currentServiceEnglish == customerVoiceEnglish.length - 1) {
    currentServiceEnglish = 0;
  } else {
    currentServiceEnglish += 1;
  }

  updateCustomerVoice(currentServiceEnglish, customerVoiceEnglish);
};

previousArrowEnglish.onclick = function () {
  if (currentServiceEnglish == 0) {
    currentServiceEnglish = customerVoiceEnglish.length - 1;
  } else {
    currentServiceEnglish -= 1;
  }

  updateCustomerVoice(currentServiceEnglish, customerVoiceEnglish);
};

// Contact Modal
const buttonOpen = document.getElementById("modalOpen");
const buttonClose = document.querySelector(".modalClose");
const modal = document.getElementById("modal");

buttonOpen.addEventListener("click", () => {
  //open modal
  modal.style.display = "block";
});

buttonClose.addEventListener("click", () => {
  //close modal
  modal.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Language change
const btnEn = document.getElementById("toggleButton");

btnEn.addEventListener("click", () => {
  window.location.href = "../index.html";
});

//nav scroll color change
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollHeight = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollHeight < windowHeight) {
      $(".header-list a").css("color", "rgb(255, 254, 243)");
    } else {
      $(".header-list a").css("color", "#333");
    }
  });
});
