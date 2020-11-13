//// Slider

function Slider(slider) {
    if (!(slider instanceof Element)) {
      throw new Error('No slider passed in');
    }
  
    // select elements needed
    this.slides = slider.querySelector('.slides');
    this.slider = slider;
    this.myTimer = setInterval(this.move.bind(this), 50000);
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');
  
    this.startSlider();
    this.applyClasses();
  
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
    this.myTimer = setInterval(this.move.bind(this), 50000);
    // console.log(this.myTimer);
    // this.sliderInterval(this.move.bind(this), 5000, 1);
  };
  //// Creation of slider

  const mySlider = new Slider(document.querySelector('.slider'));
  
  
  ////// Menu itemi 
  const closeProducts = document.querySelectorAll('.closeProduct');
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
  document.addEventListener('click',handleClickOuside);
  function handleClickOuside(e){
   if(clicked === 0){
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


//// Go to top
$(window).scroll(function() {
  if ($(this).scrollTop() >= 300) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 1000);
  
});