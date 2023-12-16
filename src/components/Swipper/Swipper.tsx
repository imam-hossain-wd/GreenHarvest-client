// // import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';

// import './style.css';


// import { Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <div className='w-[80%] mx-auto'>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           '@0.00': {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           '@0.75': {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           '@1.00': {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           '@1.50': {
//             slidesPerView: 4,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide className='w-60 h-60 bg-red-400'>Slide 1</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-green-400'>Slide 2</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-yellow-400'>Slide 3</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-sky-400'>Slide 4</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-orange-400'>Slide 5</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-purple-400'>Slide 6</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-red-400'>Slide 7</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-red-400'>Slide 8</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-red-400'>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation'; // Import navigation styles

// import './style.css';

// import { Pagination, Navigation } from 'swiper/modules';

// // Install Swiper modules
// Swiper.use([Pagination, Navigation]);

// export default function App() {
//   return (
//     <div className='w-[80%] mx-auto'>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         autoplay={{
//           delay: 3000, // Delay in milliseconds
//           disableOnInteraction: false // Autoplay continues even when the user interacts with the slider
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           '@0.00': {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           '@0.75': {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           '@1.00': {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           '@1.50': {
//             slidesPerView: 4,
//             spaceBetween: 50,
//           },
//         }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         className="mySwiper"
//       >
//         <SwiperSlide className='w-60 h-60 bg-red-400'>Slide 1</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-green-400'>Slide 2</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-yellow-400'>Slide 3</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-sky-400'>Slide 4</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-orange-400'>Slide 5</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-purple-400'>Slide 6</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-red-400'>Slide 7</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-red-400'>Slide 8</SwiperSlide>
//         <SwiperSlide className='w-60 h-60 bg-red-400'>Slide 9</SwiperSlide>

//         {/* Navigation Buttons */}
//         <div className="swiper-button-next"></div>
//         <div className="swiper-button-prev"></div>
//       </Swiper>
//     </div>
//   );
// }
