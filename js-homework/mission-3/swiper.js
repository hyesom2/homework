// // var swiper2 = new Swiper(".mySwiper2", {
// //   grabCursor: true,
// //   centeredSlides: true,
// //   centeredSlidesBounds: true,
// //   effect: "creative",
// //   slidesPerView: 4,
// //   initialSlide: 4,
// //   loop: true,
// //   autoplay: true,
// //   creativeEffect: {
// //     perspective: true,
// //     limitProgress: 6,
// //     prev: {
// //       translate: ["-100px", "100px", 0],
// //       rotate: [0, 0, -10],
// //       origin: "bottom"
// //     },
// //     next: {
// //       translate: ["100px", "100px", 0],
// //       rotate: [0, 0, 10],
// //       origin: "bottom"
// //     }
// //   }
// // });

// // var swiper = new Swiper('.mySwiper2', {
// //   /* 보여지는 슬라이드 갯수 */
// // slidesPerView: 3,
// // /* swiper-slide에 각각 margin-right를 준다. */
// // spaceBetween: 20,
// // /* 전체적인 슬라이드의 왼쪽에 20px 공백을 준다. */
// // slidesOffsetBefore: 20,
// // /* 전체적인 슬라이드의 오른쪽에 20px 공백을 준다. */
// // slidesOffsetAfter: 20,
// // pagination: {
// //   el: '.swiper-pagination',
// //   clickable: true,
// // }
// // }) 


// var swiper = new Swiper(".mySwiper", {
//   grabCursor: true,
//   slidesPerView: 4,
//   effect: 'card',
//   // centeredSlides: true,
//   spaceBetween: 0,
//   // focusableElements: 'select',
//   // loop: true,
//   mousewheelControl: true,
// });

// Swiper 초기화 코드
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  scrollbar: {
      el: '.swiper-scrollbar',
  },
  observer: true,
  observeParent: true
});
