// var lastScroll = 0;
// var scrolling = false;

// window.onscroll = function(e) {
//   var html = document.documentElement;
//   var body = document.body;
//   var viewHeight = Math.max(
//     document.documentElement.clientHeight,
//     window.innerHeight || 0
//   );
//   var direction = html.scrollTop > lastScroll || body.scrollTop > lastScroll; // true thì scrollDown / false thì scrollUp
//   var scrollTo = html.scrollTop || body.scrollTop;

//   if (scrolling) {
//     lastScroll = scrollTo;
//     return;
//   }

//   if (direction && lastScroll > 0 && lastScroll < viewHeight) {
//     // body.style.overflowY = "hidden";
//     scrollDown(viewHeight, html || body);
//   }

//   if (!direction && lastScroll < viewHeight) {
//     // body.style.overflowY = "hidden";

//     scrollUp(html || body);
//   }
//   // setTimeout(() => {
//   //   scrolling = false;
//   //   body.style.overflowY = "auto";
//   // }, 500);
//   lastScroll = scrollTo;
// };

// function scrollDown(viewHeight, body) {
//   window.onscroll = null;
//   scrolling = true;
//   let time = 3000;
//   let solan = 10;
//   let saveTime = 0;
//   let saveHeight = viewHeight / solan;

//   // html.scrollTop = viewHeight;
//   // var elmnt = document.getElementById("content");
//   // elmnt.scrollIntoView();

//   for (let i = 1; i <= solan; i++) {
//     if (i === 10) {
//       scrolling = false;
//     }
//     setTimeout(function() {
//       console.log(saveHeight);
//       body.scrollTop = saveHeight;
//     }, saveTime);
//     saveHeight = saveHeight + viewHeight / solan;
//     saveTime = saveTime + time / solan;
//     console.log(saveHeight, saveTime);
//   }
//   // scrolling = false;
// }

// function scrollUp() {
//   scrolling = true;
//   // html.scrollTop = 0;
//   // var elmnt = document.getElementById("navBar");
//   // elmnt.scrollIntoView();
// }

function setDefaultTagA() {
  var day = document.querySelectorAll(".day a");
  for (let i = 0; i < day.length; i++) {
    day[i].onclick = function(e) {
      e.preventDefault();
    };
  }
}

var slideActive = 2;
// xử lý slider Chính
function show(id) {
  clearActiveDot();
  addActiveDot(id);
  setBackground(id);
  clearActiveItem();
  addActiveItem(id);
  setSlideActive(id + 1);
  clearInterval(idAuto);
  setTimeout(() => {
    autoSlide1();
  }, 5000);
}

// Xử lý auto slide chính
function showForAuto(id) {
  clearActiveDot();
  addActiveDot(id);
  setBackground(id);
  clearActiveItem();
  addActiveItem(id);
  slideActive = id;
}

function clearActiveDot() {
  var listDots = document.getElementsByClassName("dotSlides")[0].children;

  for (var i = 0; i < listDots.length; i++) {
    var classes = listDots[i].classList;

    for (let j = 0; j < classes.length; j++) {
      if (classes[j] === "activeDot") {
        classes.remove("activeDot");
      }
    }
  }
}

function addActiveDot(id) {
  var dot = document.getElementById("dot" + id);
  var classes = dot.classList;
  classes.add("activeDot");
}

function setBackground(id) {
  var background = document.getElementById("slideBackground");
  // var movies = document.getElementsByClassName("movie")[0];

  // background.children[0].classList.add("fadeBackground");
  // movies.classList.add("fadeBackground");
  // setTimeout(() => {
  //   // background.children[0].classList.remove("fadeBackground");
  //   movies.classList.remove("fadeBackground");
  // }, 1000);

  if (id === 1) {
    background.style.backgroundImage = "url(images/aladin.jpg)";
  }

  if (id === 2) {
    background.style.backgroundImage = "url(images/pikachu.jpg)";
  }

  if (id === 3) {
    background.style.backgroundImage = "url(images/endgame.jpg)";
  }
}

function addActiveItem(id) {
  var item = document.getElementById("item" + id);
  item.classList.add("activeItem");
}

function clearActiveItem() {
  var listItems = document.getElementsByClassName("movie")[0].children;

  for (var i = 0; i < listItems.length; i++) {
    var classes = listItems[i].classList;

    for (let j = 0; j < classes.length; j++) {
      if (classes[j] === "activeItem") {
        classes.remove("activeItem");
      }
    }
  }
}

function setSlideActive(id) {
  if (id > 3) {
    slideActive = 1;
  } else slideActive = id;
}

var idAuto = null;
function autoSlide1() {
  var time = 5000;
  idAuto = setInterval(() => {
    showForAuto(slideActive);
    setSlideActive(slideActive + 1);
  }, time);
}

function showFixedNav() {
  var fixedNav = document.getElementById("fixedNav");
  fixedNav.classList.remove("hideNav");

  var classes = fixedNav.classList;
  classes.add("showNav");
}

function hideFixedNav() {
  var fixedNav = document.getElementById("fixedNav");
  fixedNav.classList.remove("showNav");
  var classes = fixedNav.classList;
  classes.add("hideNav");
}

// Xử lý slider phim đang chiếu

function doSlider2(numberItem, marginOfItem) {
  // var numberItem = 4;
  // var marginOfItem = 10;
  setHeightItems(numberItem, marginOfItem);
  setLoopSlider2(numberItem);
  setEventSlider2(numberItem);
}
function setHeightItems(numberItemDisplay, margin) {
  var slider = document.getElementById("slider2");
  var style = window.getComputedStyle(slider);
  var width = parseInt(style.width);
  var widthForItem = width / numberItemDisplay - margin * 2;

  var arrItem = document.querySelectorAll("#slider2 .item");
  for (let i = 0; i < arrItem.length; i++) {
    const item = arrItem[i];
    item.style.width = widthForItem + "px";
    item.style.margin = `0px ${margin}px`;
  }
}

var curPosition = 0;
function setEventSlider2(numberItemDisplay) {
  var slider = document.getElementById("slider2");
  var style = window.getComputedStyle(slider);
  var width = parseInt(style.width);
  var widthMove = width / numberItemDisplay;
  var prevS2 = document.getElementById("prevS2");
  var nextS2 = document.getElementById("nextS2");
  prevS2.addEventListener("click", function() {
    pevSlider2(widthMove);
  });
  nextS2.addEventListener("click", function() {
    nextSlider2(widthMove);
  });
}

// function clearEventSlider2() {
//   var prevS2 = document.getElementById("prevS2");
//   var nextS2 = document.getElementById("nextS2");
//   prevS2.removeEventListener("click", function() {
//     pevSlider2(widthMove);
//   });
//   nextS2.removeEventListener("click", function() {
//     nextSlider2(widthMove);
//   });
// }

function pevSlider2(widthMove) {
  var sliderDisplay = document.querySelector("#slider2 .sliderDisplay");
  var slider2 = document.querySelector("#slider2");

  var widthOfSlider2 = parseInt(window.getComputedStyle(slider2).width);
  var style = window.getComputedStyle(sliderDisplay);
  var widthDisplay = parseInt(style.width);

  var valueMove = curPosition - widthMove;

  if (curPosition > 0) {
    sliderDisplay.style.transform = `translateX(-${valueMove}px)`;
    setCurPosition(curPosition - widthMove);
  } else {
    var positionEnd = widthDisplay - widthOfSlider2;
    transformEnd(positionEnd);
    setTimeout(() => {
      // sliderDisplay.style.transform = `translateX(-${valueMove}px)`;
      // setCurPosition(curPosition + widthMove);
      pevSlider2(widthMove);
    }, 20);
  }
}

function nextSlider2(widthMove) {
  var sliderDisplay = document.querySelector("#slider2 .sliderDisplay");
  var slider2 = document.querySelector("#slider2");
  var widthOfSlider2 = parseInt(window.getComputedStyle(slider2).width);
  var style = window.getComputedStyle(sliderDisplay);
  var width = parseInt(style.width);
  var valueMove = curPosition + widthMove;

  // var sliderDisplay = document.querySelector("#slider2 .sliderDisplay");
  if (curPosition < width - widthOfSlider2) {
    sliderDisplay.style.transform = `translateX(-${valueMove}px)`;
    setCurPosition(curPosition + widthMove);
  } else {
    transformStart();
    setTimeout(() => {
      // sliderDisplay.style.transform = `translateX(-${valueMove}px)`;
      // setCurPosition(curPosition + widthMove);
      nextSlider2(widthMove);
    }, 10);
  }
}

function setCurPosition(value) {
  var sliderDisplay = document.querySelector("#slider2 .sliderDisplay");
  var style = window.getComputedStyle(sliderDisplay);
  var width = parseInt(style.width);

  if (value < 0) {
    curPosition = 0;
    return;
  }

  if (value > width) {
    curPosition = width;
    return;
  }

  curPosition = value;
  // console.log(curPosition);
}

function setLoopSlider2(numberItemDisplay) {
  var nodeSliderDisplay = document.getElementById("slider2").children[0];
  var items = nodeSliderDisplay.children;

  if (items.length < numberItemDisplay) {
    console.log("erro");
    return;
  }

  for (let i = 0; i < numberItemDisplay; i++) {
    var item = items[i].cloneNode(NodeList);
    nodeSliderDisplay.append(item);
  }
}

function transformStart() {
  var sliderDisplay = document.querySelector("#slider2 .sliderDisplay");
  sliderDisplay.style.transition = "none";
  sliderDisplay.style.transform = "translateX(0)";
  setTimeout(() => {
    sliderDisplay.style.transition = "";
  }, 1);
  setCurPosition(0);
}

function transformEnd(value) {
  var sliderDisplay = document.querySelector("#slider2 .sliderDisplay");
  sliderDisplay.style.transition = "none";
  sliderDisplay.style.transform = `translateX(-${value}px)`;
  setTimeout(() => {
    sliderDisplay.style.transition = "";
  }, 1);
  setCurPosition(value);
}

// EVENT
// Xử lý Navbar fixed
window.onscroll = function() {
  var html = document.documentElement;
  var body = document.body;
  var scroll = html.scrollTop || body.scrollTop;
  if (scroll > 500) {
    showFixedNav();
  } else {
    hideFixedNav();
  }
};

// window.onresize = function() {
//   setCurPosition(0);
//   clearEventSlider2();
//   doSlider2(4, 10);
// };

function doTabMovieWeek() {
  setHandleClickTab();
}

function setHandleClickTab() {
  var days = document.querySelectorAll(".movieWeek .day li");
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    day.onclick = function(e) {
      var id = null;
      if (e.target.localName === "a") {
        id = e.target.parentElement.id;
        setActiveTab(e.target.parentElement);
      } else {
        id = e.target.id;
        setActiveTab(e.target);
      }

      showMovieWeek(id);
    };
  }
}

function setActiveTab(element) {
  var days = document.querySelectorAll(".movieWeek .day li");

  // Clear class activeMovieWeek
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    day.classList.remove("activeMovieWeek");
  }

  element.classList.add("activeMovieWeek");
}

function showMovieWeek(id) {
  var idTab = id.split("_")[1]; // id = day_...
  var tabshow = document.getElementById(idTab);
  var tabs = document.querySelectorAll(".movieWeek > div");

  // Clear class showMovieWeek
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    if (tab.classList.contains("showMovieWeek")) {
      if (tab.id !== idTab) {
        tab.classList.remove("showMovieWeek");
        tab.classList.add("hideMovieWeek");
        tabshow.classList.add("showMovieWeek");

        setTimeout(() => {
          tab.classList.remove("hideMovieWeek");
        }, 1000);
      }
    }
  }
}

function doSlider3(numberItem, marginOfItem) {
  setHeightItemsSlider3(numberItem, marginOfItem);
  setEventArrowSlider3(numberItem);
  setEventItemSlider3();
}

var curPosition2 = 0;
function setEventArrowSlider3(numberItemDisplay) {
  var slider = document.getElementById("slider3");
  var style = window.getComputedStyle(slider);
  var width = parseInt(style.width);
  var widthMove = width / numberItemDisplay;
  var prevS3 = document.getElementById("prevS3");
  var nextS3 = document.getElementById("nextS3");
  prevS3.addEventListener("click", function() {
    pevSlider3(widthMove);
  });
  nextS3.addEventListener("click", function() {
    nextSlider3(widthMove);
  });
}

function setHeightItemsSlider3(numberItemDisplay, margin) {
  var slider = document.getElementById("slider3");
  var style = window.getComputedStyle(slider);
  var width = parseInt(style.width);
  var widthForItem = width / numberItemDisplay - margin * 2;

  var arrItem = document.querySelectorAll("#slider3 .itemSlide");
  for (let i = 0; i < arrItem.length; i++) {
    const item = arrItem[i];
    item.style.width = widthForItem + "px";
    item.style.margin = `0px ${margin}px`;
  }
}

function pevSlider3(widthMove) {
  var sliderDisplay = document.querySelector("#slider3 .sliderDisplay");

  var valueMove = curPosition2 - widthMove;

  if (curPosition2 > 0) {
    sliderDisplay.style.transform = `translateX(-${valueMove}px)`;
    setCurPosition2(curPosition2 - widthMove);
  } else {
    cantPrevSlider3();
  }
}

function nextSlider3(widthMove) {
  var sliderDisplay = document.querySelector("#slider3 .sliderDisplay");
  var slider3 = document.querySelector("#slider3");
  var widthOfSlider3 = parseInt(window.getComputedStyle(slider3).width);
  var style = window.getComputedStyle(sliderDisplay);
  var width = parseInt(style.width);
  var valueMove = curPosition2 + widthMove;

  if (curPosition2 < width - widthOfSlider3) {
    sliderDisplay.style.transform = `translateX(-${valueMove}px)`;
    setCurPosition2(curPosition2 + widthMove);
  } else {
    cantNextSlider3();
  }
}

function setCurPosition2(value) {
  var sliderDisplay = document.querySelector("#slider3 .sliderDisplay");
  var style = window.getComputedStyle(sliderDisplay);
  var width = parseInt(style.width);

  if (value < 0) {
    curPosition2 = 0;
    return;
  }

  if (value > width) {
    curPosition2 = width;
    return;
  }

  curPosition2 = value;
  // console.log(curPosition);
}

var cantPrevTimeout = null;
function cantPrevSlider3() {
  cantPrevTimeout = null;
  var sliderDisplay = document.querySelector("#slider3 .sliderDisplay");
  var sliderComingSoon = document.querySelector(".sliderComingSoon .slider");
  var itemHeight = document.querySelector("#slider3 .itemSlide");
  var valueMove = parseInt(itemHeight.style.width) / 3;
  sliderDisplay.style.transform = `translateX(${valueMove}px)`;
  sliderComingSoon.classList.add("cantprev");
  cantPrevTimeout = setTimeout(() => {
    sliderDisplay.style.transform = `translateX(0px)`;
    sliderComingSoon.classList.remove("cantprev");
  }, 500);
}

var cantNextTimeout = null;
function cantNextSlider3() {
  cantNextTimeout = null;
  var sliderDisplay = document.querySelector("#slider3 .sliderDisplay");
  var sliderComingSoon = document.querySelector(".sliderComingSoon .slider");
  var itemHeight = document.querySelector("#slider3 .itemSlide");
  var valueMove = parseInt(itemHeight.style.width) / 3 + curPosition2;
  sliderDisplay.style.transform = `translateX(-${valueMove}px)`;
  // sliderDisplay.style.transition = `0.5s all`;
  sliderComingSoon.classList.add("cantnext");
  cantNextTimeout = setTimeout(() => {
    sliderDisplay.style.transform = `translateX(-${curPosition2}px)`;
    sliderComingSoon.classList.remove("cantnext");
  }, 500);
}

function setEventItemSlider3() {
  var items = document.querySelectorAll(
    ".comingSoon .sliderComingSoon .itemSlide "
  );
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.onclick = function() {
      handleClickItemSlider3(item);
    };
  }
}

function handleClickItemSlider3(item) {
  var idItem = item.id;
  var id = idItem.split("_")[1]; // idItem : Slider3_...
  clearActiveItemSlider3();
  item.classList.add("activeItemSlide3");
  setBackgroundComingSoon(id);
  clearClassShowItem();
  showDataSlider3(id);
}

function clearActiveItemSlider3() {
  var items = document.querySelectorAll(
    ".comingSoon .sliderComingSoon .itemSlide "
  );
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.classList.contains("activeItemSlide3")) {
      item.classList.remove("activeItemSlide3");
    }
  }
}

function setBackgroundComingSoon(id) {
  var comingSoon = document.getElementById("comingSoon");

  var arrUrl = [
    "url(images/chua-te-godzilla-2019_1558815495-big.jpg)",
    "url(images/dangchapthucung2.jpg)",
    "url(images/xmen-ngang.jpg)",
    "url(images/gangster.jpg)",
    "url(images/ngoi-den-ki-quai-ngang.jpg)",
    "url(images/nuhonmaquai-ngang.jpg)",
    "url(images/gautrucvenha-ngang.jpg)",
    "url(images/doremonngnag.jpg)"
  ];
  // switch (id) {
  //   case 1:
  //     url = "url(images/chua-te-godzilla-2019_1558815495-big.jpg)";
  //     break;
  //   case 2:
  //     url = "url(images/dangchapthucung2.jpg)";
  //     break;
  //   case 3:
  //     url = "url(images/xmen-ngang.png)";
  //     break;
  //   case 4:
  //     url = "url(images/gangster.jpg)";
  //     break;
  //   case 5:
  //     url = "url(images/ngoi-den-ki-quai-ngang.jpg)";
  //     break;
  //   case 6:
  //     url = "url(images/nuhonmaquai-ngang.jpg)";
  //     break;
  //   case 7:
  //     url = "url(images/gautrucvenha-ngang.jpg)";
  //     break;
  //   case 8:
  //     url = "url(images/doremonngnag.jpg)";
  //     break;
  //   default:
  //     url = "url(images/chua-te-godzilla-2019_1558815495-big.jpg)";
  //     break;
  // }
  // comingSoon.style.backgroundImage = "url(images/dangchapthucung2.jpg)";
  // console.log(url);
  comingSoon.style.backgroundImage = arrUrl[id - 1];
}

function clearClassShowItem() {
  var items = document.querySelectorAll(".comingSoon .containerItems .item ");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.classList.contains("showItem")) {
      item.classList.remove("showItem");
    }
  }
}

function showDataSlider3(id) {
  var data = document.getElementById(`data_${id}`);
  data.classList.add("showItem");
}

function doShowVideo() {
  var video = document.getElementsByClassName("showVideo")[0];
  video.onclick = function(e) {
    console.log(e.target);
    closeShowVideo();
  };
}

function openShowVideo() {
  var video = document.getElementsByClassName("showVideo")[0];
  video.classList.add("activeShowVideo");
}

function closeShowVideo() {
  var video = document.getElementsByClassName("showVideo")[0];
  video.classList.remove("activeShowVideo");
}

// Các hàm sẽ chạy
autoSlide1();
setDefaultTagA();
doSlider2(4, 10);
doTabMovieWeek();
doSlider3(6, 10);
doShowVideo();
