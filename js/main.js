
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
 console.log(window.scrollY);
 if(window.scrollY > 500){
 //gsap.to(요소, 지속시간, 옵션);
  gsap.to(badgeEl, .6, {
    opacity:0,
    display:'none'
  });
  gsap.to('#to-top', .2, {
    x: 0
  });
 } else {
  gsap.to(badgeEl, .6, {
    opacity:1,
    display:'block'
  });
  gsap.to(toTopEl, .2, {
    x: 100
  });
 }
}, 300));


toTopEl.addEventListener('click',()=>{
  gsap.to(window, .7, {
    scrollTo:0
  });
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay:(index + 1) * .7,
    opacity:1
  });
});

//(선택자, 옵션)
new Swiper('.notice-line .swiper-container ', {
   direction: 'vertical',//수직
   autoplay: true,
   loop:true        
});
new Swiper('.promotion .swiper-container', {
  slidesPerView:3,
  spaceBetween:10,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay:5000
  },
  pagination: {
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
 });


 new Swiper('.awards .swiper-container', {
  autoplay: true, //자동재생
  loop:true, //반복재생
  spaceBetween:30, //사이 여백
  slidesPerView:5,
  navigation :{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
 });





 const promotionEl = document.querySelector('.promotion');
 const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidepromotion = false;

promotionToggleBtn.addEventListener('click',()=>{
  isHidepromotion = !isHidepromotion
  if(isHidepromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}



function floatingObject(selector, delay, size){
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니매이션 동작 시간
     {//옵션 
    y: size,
    repeat:-1,
    yoyo:true,
    ease: Power1.easeInOut,
    delay:random(0, delay)
  }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);




const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

