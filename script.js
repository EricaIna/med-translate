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
var customerVoice = [
  {
    title: "利用したサービス：救急外来対応",
    text: "渡英した数日後、1歳の娘が急に嘔吐、高熱で呼吸困難に。このサービスのおかげで英語が全くわからない私でも現地ですぐに救急にかかることができました。待ち時間の間には一緒にできる手当をしてくれたり、スタッフの方が医療従事者なので精神的にもとっても助かりました。",
    reviewer: "A.Tanaka",
  },
  {
    title: "利用したサービス：薬局対応",
    text: "日本で日頃から服用している薬の代替が必要となり、アレルギー持ちのため正しく薬が買えるかが不安でこちらを利用しました。テレビ電話越しで現地の薬剤師さんと３者通話で対応していただき、無事に必要だった薬を補填することができました。日本に帰らずに済んだので本当に助かりました。",
    reviewer: "Perterson Cocomi",
  },
  {
    title: "利用したサービス：医療資料の翻訳",
    text: " 保険加入の際に、持病や手術歴の英訳が必要になったのでこちらを利用しました。時間があまりない中迅速に対応して頂き助かりました。",
    reviewer: "I.Emma",
  },
];

var previousArrow = document.getElementById("previous-arrow");
var nextArrow = document.getElementById("next-arrow");
var customerTitleArea = document.getElementById("customer-title");
var customerTextArea = document.getElementById("customer-text");
var customerReviewArea = document.getElementById("customer-name");

var currentService = 0;

nextArrow.onclick = function () {
  if (currentService == customerVoice.length - 1) {
    currentService = 0;
  } else {
    currentService += 1;
  }

  var title = customerVoice[currentService].title;
  var text = customerVoice[currentService].text;
  var reviewer = customerVoice[currentService].reviewer;
  customerTitleArea.innerHTML = title;
  customerTextArea.innerHTML = text;
  customerReviewArea.innerHTML = reviewer;
};

previousArrow.onclick = function () {
  if (currentService == 0) {
    currentService = customerVoice.length - 1;
  } else {
    currentService -= 1;
  }

  var title = customerVoice[currentService].title;
  var text = customerVoice[currentService].text;
  var reviewer = customerVoice[currentService].reviewer;
  customerTitleArea.innerHTML = title;
  customerTextArea.innerHTML = text;
  customerReviewArea.innerHTML = reviewer;
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
  window.location.href = "english/index.html";
});
