//// Slider

function Slider(slider, intTime) {
    if (!(slider instanceof Element)) {
      throw new Error('No slider passed in');
    }
   
  
    // select elements needed
    this.slides = slider.querySelector('.slides');
    this.slider = slider;
    this.myTimer = setInterval(this.move.bind(this), intTime);
    this.intTime = intTime;
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');
  
    this.startSlider();
    this.applyClasses();
  


    const thumbs = document.querySelectorAll('.thumbs');
    thumbs.forEach(thumb => thumb.addEventListener('click', this.changeOnClick.bind(this, thumb)));
    /// / Event Listener
    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', this.move.bind(this));
  }
  
  // Slider.prototype.sliderInterval = function (fn, t, clear) {
  //   const timer1 = setInterval(fn, t);
  //   console.log(timer1);
  //   if (clear) {
  //     clearInterval(timer1);
  //     // setInterval(fn, t);
  //     // setInterval(fn, t);
  //   }
  // };
 
  //// Click on thumbnails
  Slider.prototype.changeOnClick = function (thumb) {
    thumbId = thumb.dataset['thumb'];
    const classesToRemove = ['prev', 'current', 'next'];
    // console.log(this.prev, this.current, this.next);
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    this.current = document.querySelector(`div[data-slide="${thumbId}"]`);
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
    // console.log(slidePrev, slideCurrent, slideNext);
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
    
  };
  Slider.prototype.startSlider = function () {
    this.current =
      this.slider.querySelector('.current') || this.slides.firstElementChild;
    // console.log(this.current);
    this.prev =
      this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  };
  
  Slider.prototype.applyClasses = function () {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
  };
  
  Slider.prototype.move = function (direction) {
    clearInterval(this.myTimer);
  
    const classesToRemove = ['prev', 'current', 'next'];
    // [prev, current, next].forEach((el) =>
    //   el.classList.remove(...classesToRemove)
    // );
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    if (direction === 'back') {
      // a new array and destrucure them
      [this.prev, this.current, this.next] = [
        this.prev.previousElementSibling || this.slides.lastElementChild,
        this.prev,
        this.current,
      ];
    } else {
      [this.prev, this.current, this.next] = [
        this.current,
        this.next,
        this.next.nextElementSibling || this.slides.firstElementChild,
      ];
    }
    this.applyClasses();
    this.myTimer = setInterval(this.move.bind(this), this.intTime);
    // console.log(this.myTimer);
    // this.sliderInterval(this.move.bind(this), 5000, 1);
  };
  //// Creation of slider
  // console.log(document.querySelector('.slider'));
  if(document.querySelector('.slider') !== null
  ){
    const mySlider = new Slider(document.querySelector('.slider'),10000);
  }
  if(document.querySelector('.sliderProduct') !== null
  ){
    const mySlider = new Slider(document.querySelector('.sliderProduct'),500000);
  }
 
  
  
  ////// Menu itemi 
  const closeProducts = document.querySelectorAll('.closeProduct');
  const hamburgers = document.querySelectorAll('.hamburger');
  // const hamburger = document.querySelector('.hamburger');
  const prod = document.querySelectorAll('.header__nav-nav-products');
  let clicked = 0;
  const navlinks = document.querySelectorAll('.navlinks');
  function handleNavClick(e){
    // const products = document.querySelectorAll('.header__nav-nav-products');
    navlinks.forEach(link => link.classList.remove('active'));
    e.currentTarget.classList.add('active');
    prod.forEach(product => product.classList.remove('openProducts'));
    e.currentTarget.parentNode.lastElementChild.classList.add('openProducts');
    clicked = 1;
    
  }
  hamburgers.forEach(hamburger => hamburger.addEventListener('click',function(){
    clicked=3;
   }));
  // hamburger.addEventListener('click',function(){
  //   clicked=3;
  //  });
  document.addEventListener('click',handleClickOuside);
  function handleClickOuside(e){
    const inputs = document.querySelectorAll('.checkNavbar');
   if(clicked === 0){
    // console.log('too');
    //  console.log('too');
   }
   else if(clicked === 1)
   {
    
     clicked ++;

   }
   else if (clicked === 2){
    // console.log('Usao');
    if(document.querySelector('.openProducts') !== null){
      if(e.target !== document.querySelector('.openProducts') && !document.querySelector('.openProducts').contains(e.target)){
        // !document.querySelector('.openProducts').contains(e.target)
        // console.log(document.querySelector('.openProducts'));
        // console.log();
        navlinks.forEach(link => link.classList.remove('active'));
     
        document.querySelector('.openProducts').classList.remove('openProducts');
        clicked = 0;
       }
       
     }
     
    }
    else if(clicked === 3){
      // console.log('Ovo je trojka');
      clicked ++;
    }
    else if (clicked === 4){
      // console.log('Ovo je cetvorka');
      // inputs.forEach(input => input.checked = false);
      inputs.forEach(input => {
        if(input.name !== 'checkMenu'){
          input.checked = false;
        }
        else{
          
          document.querySelector('.openProducts') !== null && document.querySelector('.openProducts').classList.remove('openProducts');
          if(  document.querySelector('.active') != null){document.querySelector('.active').classList.remove('active');}
          
          clicked = 0;
        }
        // console.log(input.name);
        
      });
      // input.checked = false;
    }
    else{
      document.querySelector('.activeBox').classList.remove('activeBox');
      clicked = 0;
      
     
     }
  }
 navlinks.forEach(link => link.addEventListener('click', handleNavClick));

 
 
 function handleCloseClick(e){
   e.currentTarget.parentNode.classList.remove('openProducts');
   navlinks.forEach(link => link.classList.remove('active'));
  //  console.log(e.currentTarget.parentNode.parentNode);
  //  console.log(e.current);
 }
 closeProducts.forEach(closeProd => closeProd.addEventListener('click',handleCloseClick));


 /////////// Search box
const searchInput = document.querySelector('.searchInput');
function handleKeyUp(e){
  // console.log(e.target.value);
  const searchBox = document.querySelector('.searchBox');
  if(e.target.value === ''){
    searchBox.classList.remove('activeBox');
  }
  else{
    searchBox.classList.add('activeBox');
    clicked = 5;
  }
  // console.log(searchBox);
  // searchBox.classList.add('activeBox');
}
searchInput.addEventListener('keyup',handleKeyUp);

///// Cart
const cart = document.querySelector('.cart');
// console.log(cart);
function handleCartHover(e){
  // console.log('to');
  const openCart = document.querySelector('.openCart');
  cartOver = setTimeout(() => {
    cartOver = openCart.classList.add('cartActive');
  }, 300);
  
  clearInterval(timerCart);
}
let timerCart;
let cartOver;
cart.addEventListener('mouseover', handleCartHover);
cart.addEventListener('mouseout', function(){
  // console.log('123');
  // document.querySelector('.openCart').classList.remove('cartActive');
  clearInterval(cartOver);
  timerCart =  setTimeout(function(){document.querySelector('.openCart').classList.remove('cartActive')}, 400);
  // console.log(timer);
 
});

///// Star
const star = document.querySelector('.star');
// console.log(cart);
function handleStarHover(e){
  // console.log('to');
  const openStar = document.querySelector('.openStar');
  starOver = setTimeout(() => {
    starOver = openStar.classList.add('cartActive');
  }, 300);
  
  clearInterval(timerStar);
}
let timerStar;
let starOver;
star.addEventListener('mouseover', handleStarHover);
star.addEventListener('mouseout', function(){
  // console.log('123');
  // document.querySelector('.openCart').classList.remove('cartActive');
  clearInterval(starOver);
  timerStar =  setTimeout(function(){document.querySelector('.openStar').classList.remove('cartActive')}, 400);
  // console.log(timer);
 
});


//// User
let timerUser;
let userOver;
const user = document.querySelector('.user');
// console.log(user);
function handleUserHover(e){
  // console.log('radi');
  const openUser = document.querySelector('.openUser');
  userOver = setTimeout(() => {
    userOver = openUser.classList.add('userActive');
  }, 300);
  
  // console.log(openUser);
  clearInterval(timerUser);
}

user.addEventListener('mouseover', handleUserHover);
user.addEventListener('mouseout', function(){
  // console.log(userOver);
  clearInterval(userOver);
  timerUser =  setTimeout(function(){document.querySelector('.openUser').classList.remove('userActive')}, 400);
  
});

///Slider
$(document).ready(function(){
  $('.slideSlick').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      // dots: true,
      arrows:true,
      focusOnSelect: false,
       responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      // prevArrow: $('.prev'),
      // nextArrow: $('.next'),
      // draggable: false,
  });
});


///// Scroll

function debounce(func, wait = 20, immediate = true){
  var timeout;
  return function(){
    var context = this, args = arguments;
    var later = function(){
      timeout = null;
      if(!immediate) func.apply(context,args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later,wait);
    if(callNow) func.apply(context,args);
  }
}

const comeIn = document.querySelector('.comeIn');
const container = document.querySelector('.header__top-container');
const headerTop = document.querySelector('.header__top');
const returnToTop = document.querySelector('.gotop');


function comeInFixed(e){
 
  const slideInAt = (window.scrollY + window.innerHeight);
  // comeInBottom = comeIn.offsetTop;
  const isNotScrolledPast = window.scrollY < 350;
  // console.log(slideInAt);
  // console.log(returnToTop);
  // console.log(isNotScrolledPast);
  if(!isNotScrolledPast){
    // document.documentElement.scrollTop = 400;
    
    
    container.classList.add('fixed');
    headerTop.classList.add('fixed');
    document.querySelector('.header').style.margin = '100px 0 0 0 ';
    returnToTop.style.display ="block";

  }
  else{
   
    // setTimeout(function())
    document.querySelector('.header').style.margin = '0px 0 0 0';
    container.classList.remove('fixed');
    headerTop.classList.remove('fixed');
    returnToTop.style.display ="none";
  }
  // console.log(comeIn.offsetTop);
  // console.log(slideInAt);
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// window.addEventListener('scroll', debounce(comeInFixed,20));
returnToTop.addEventListener('click', topFunction);
window.addEventListener('scroll', comeInFixed);


//////////////////////////////////////////
//////////// SELECT BOX

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
          and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
    except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
 

////////////////////////////////////////////////////
///////////// 
function confirmFunction(e) {
  const conf = confirm("Da li ste sigurni?");
  if(!conf === true){
    return true;
  }
  else{
    e.preventDefault();
  }
}

//////////////////////////////////////////////////////////////
/////////////////// Zoom on hover
// $(document).ready(function () {
//   $(".ex1").zoom({ duration: 120 });
//   // $("#ex2").zoom({ on: "grab" });
// });


//////////////////////////////////////////////////////////////
/////////////// Gallery

function Gallery(gallery){
  
  const images = Array.from(gallery.querySelectorAll('.gallerySlide'));
  // console.log(images);
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.modalPrev');
  const nextButton = modal.querySelector('.modalNext');
  // console.log(nextButton);
  let currentImage;


  function openModal() {
    if (modal.matches('.openModal')) {
      // console.info('Modal already open');
      return;
    }
    modal.classList.add('openModal');
    document.querySelector('body').classList.add('openModal');
    // console.log('open Modal works');
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }
  function closeModal() {
    modal.classList.remove('openModal');
    document.querySelector('body').classList.remove('openModal');
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function showImage(el) {
    // console.log(  el.querySelector('.backgroundimage'));
    imageSrc =el.querySelector('.backgroundimage').src;
    if (!el) {
      console.info('no image to show');
      return;
    }
    // console.log(el);
    modal.querySelector('img').src = imageSrc;
    currentImage = el;
    openModal();
  }
  
  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
     
      closeModal();
    }
  }
  function handleKeyUp(e) {
    if (e.key === 'Escape') {
      return closeModal();
    }
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPrevImage();
  }
  function showNextImage() {
    console.log(currentImage.nextElementSibling);
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  function showPrevImage() {
    console.log(currentImage.previousElementSibling);
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  images.forEach((image) =>
    image.addEventListener('click', (e) => showImage(e.currentTarget))
  );
  modal.addEventListener('click', handleClickOutside);
}




if(document.querySelector('.gallery1') !== null){
  const gallery1 = Gallery(document.querySelector('.gallery1'));
}




/////////////////////////////////////////////////////////////
/////////////// Opis i Dimenzije promena
const descButtons = document.querySelectorAll('.productDescriptions');
function handleDescButtonClick(){
  if(this !== document.querySelector('.descriptionActive')){
  const activeDesc = document.querySelector('.descriptionActive').classList.remove('descriptionActive');
  this.classList.add('descriptionActive');
  const activeInfoDesc = document.querySelector('.descriptionInfoActive');
  const notActiveInfoDesc = activeInfoDesc.previousElementSibling || activeInfoDesc.nextElementSibling;
  notActiveInfoDesc.classList.add('descriptionInfoActive');
  activeInfoDesc.classList.remove('descriptionInfoActive');
  }
}
descButtons.forEach(descButton => descButton.addEventListener('click', handleDescButtonClick));