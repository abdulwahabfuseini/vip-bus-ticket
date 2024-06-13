// "use client";

// import { Select } from "antd";
// import { Typewriter } from "react-simple-typewriter";
// import "swiper/css/navigation";
// import { Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { BannerText } from "./Data";

// const Banner = () => {
//   return (
//     <div className="w-full h-full py-16">
//       <div className="max-w-7xl rounded-lg p-5 mx-auto grid place-content-center place-items-center h-full bg-red-500 text-white">
//         {/* <h1 className="lg:text-5xl py-6  capitalize font-semibold">
//           <Typewriter
//             words={[
//               "Plan Your Trip, Book Your Ticket",
//               "Travel Smart, travel easy",
//               "Hit the road with us",
//               "Travel Anywhere, Anytime",
//               "Book Now, Travel soon",
//               "Explore new destinations, effortlessly",
//               "Where are you traveling to?",
//             ]}
//             loop={Infinity}
//             cursor
//             cursorStyle=""
//             typeSpeed={80}
//             deleteSpeed={90}
//           />
//         </h1> */}
//         <Swiper
//           spaceBetween={400}
//           slidesPerView={1}
//           loop={true}
//           speed={8000}
//           // modules={[Autoplay]}
//           autoplay={{ delay: 7800, disableOnInteraction: false }}
//           className="w-full"
//         >
//           {BannerText.map((item) => (
//             <SwiperSlide
//               key={item.id}
//               className="flex items-center py-12 lg:py-14 w-full"
//             >
//               <h1 className="lg:text-5xl py-6  capitalize font-semibold">
//                 {item?.text}
//               </h1>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <p className="text-xl font-medium capitalize">
//           Book your ticket with V.I.P and enjoy the best trip
//         </p>
//         <div className="grid sm:grid-cols-2 gap-x-5 w-full lg:grid-cols-4 py-4">
//           <Select
//             className="w-full rounded-sm bg-white border-2 border-grey"
//             defaultValue="2023"
//             style={{ height: 42, fontSize: 16, textAlign: "left" }}
//             // onChange={handleChange}
//             dropdownStyle={{ fontSize: "16px" }}
//             bordered={false}
//           >
//             <Select.Option value="2023">
//               <button className="text-base">2023</button>
//             </Select.Option>
//           </Select>
//           <Select
//             className="w-full rounded-sm bg-white border-2 border-grey"
//             defaultValue="2023"
//             style={{ height: 42, fontSize: 16, textAlign: "left" }}
//             // onChange={handleChange}
//             dropdownStyle={{ fontSize: "16px" }}
//             bordered={false}
//           >
//             <Select.Option value="2023">
//               <button className="text-base">2023</button>
//             </Select.Option>
//           </Select>
//           <Select
//             className="w-full rounded-sm bg-white border-2 border-grey"
//             defaultValue="2023"
//             style={{ height: 42, fontSize: 16, textAlign: "left" }}
//             // onChange={handleChange}
//             dropdownStyle={{ fontSize: "16px" }}
//             bordered={false}
//           >
//             <Select.Option value="2023">
//               <button className="text-base">2023</button>
//             </Select.Option>
//           </Select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
