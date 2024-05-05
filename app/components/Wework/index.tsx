"use client";
import Slider from "react-slick";
import React, { Component, useState } from "react";
import Image from "next/image";
import Modal from "../Modal";

// CAROUSEL DATA
interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Dr. Arvind Gupta",
    profession: "Patient",
    comment:
      "One of the best gastroenterologist in lko i have ever met who not only treats you with the required medicines but also give mental nd emotional strength  which is more important for treating any patient. Diagnosis is excellent.sir is very humble and polite. Thank you again sir for the helping  and support you provided....will recommend everyone for consultation",
    imgSrc: "/images/testimonial/testimonial_1.png",
  },
  {
    name: "Ashutosh Dwivedi",
    profession: "Patient",
    comment:
      "After having been to 3 other GI doctors I was ready to give up hope. He was very nice, explained my problems to me in 1st visit and came up with a great treatment plan. I feel better than I have in years!! Great doctor",
    imgSrc: "/images/testimonial/testimonial_3.png",
  },
  {
    name: "Saba Sangrar",
    profession: "Patient",
    comment:
      "I highly recommend Dr. Anurag for anyone seeking efficient and effective medical care. Grateful for the quick relief and the exceptional care provided by a skilled healthcare professional.",
    imgSrc: "/images/testimonial/testimonial_2.png",
  },

  // {
  //     name: "Robert Fox",
  //     profession: 'CEO, Parkview Int.Ltd',
  //     comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
  //     imgSrc: '/images/testimonial/user1.svg',
  // },
  // {
  //     name: "Leslie Alexander",
  //     profession: 'CEO, Parkview Int.Ltd',
  //     comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
  //     imgSrc: '/images/testimonial/user2.svg',
  // },
  // {
  //     name: "Cody Fisher",
  //     profession: 'CEO, Parkview Int.Ltd',
  //     comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
  //     imgSrc: '/images/testimonial/user3.svg',
  // },
];
// interface DataType {
//   desc: string;
//   name: string;
//   imgSrc: string;
// }

// const postData: DataType[] = [
//   {
//     desc: "Welcome to Dr. Manish K Tomar Clinic, where we specialize in the comprehensive management of digestive health issues. If you’re experiencing uncomfortable symptoms like gas and bloating, you’re not alone. These symptoms can significantly impact your quality of life, but relief is within reach with our expert care. Gas and bloating are common complaints that can arise from various causes, including dietary habits, underlying medical conditions, or lifestyle factors. While occasional gas and bloating are normal, persistent or severe symptoms may indicate an underlying gastrointestinal issue that requires attention. Dr. Manish K Tomar, a seasoned gastroenterologist with extensive experience in treating digestive disorders, is here to help. With a patient-centered approach, Dr. Tomar and his dedicated team strive to provide personalized care tailored to your unique needs.Our clinic offers state-of-the-art diagnostic tools and cutting-edge treatments to identify and address the root cause of your gas and bloating symptoms. Whether it’s dietary modifications, medication management, or advanced procedures, we will work closely with you to develop a comprehensive treatment plan aimed at alleviating your discomfort and restoring your digestive health.At Dr. Manish K Tomar Clinic, we understand the impact that gas and bloating can have on your daily life. That’s why we’re committed to providing compassionate care in a warm and welcoming environment. Your comfort and well-being are our top priorities, and we’ll go above and beyond to ensure you receive the highest standard of care every step of the way. Don’t let gas and bloating hold you back from enjoying life to the fullest. Schedule a consultation with Dr. Manish K Tomar today and take the first step towards a healthier, happier you.",
//     name: "Gas and Bloating",
//     imgSrc: "/images/wework/avatar.svg",
//   },
//   {
//     desc: "Co-founder",
//     name: "Name 2",
//     imgSrc: "/images/wework/avatar3.svg",
//   },
//   {
//     desc: "Co-founder",
//     name: "Name 3",
//     imgSrc: "/images/wework/avatar4.svg",
//   },
//   {
//     desc: "Co-founder",
//     name: "Name 4",
//     imgSrc: "/images/wework/avatar.svg",
//   },
//   {
//     desc: "Co-founder",
//     name: "John Doe",
//     imgSrc: "/images/wework/avatar3.svg",
//   },
//   {
//     desc: "Co-founder",
//     name: "John Doe",
//     imgSrc: "/images/wework/avatar4.svg",
//   },
// ];

// CAROUSEL SETTINGS

const index = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 5,
  //   // centerMode: true,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true,
  //   speed: 4000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 450,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //   ],
  // };
  // const [isOpen, setIsOpen] = useState(false);
  // const [name, setName] = useState("");
  // const [desc, setDesc] = useState("");
  // const handleOpenModal: any = (name: string, desc: string) => {
  //   setIsOpen(true);
  //   setName(name);
  //   setDesc(desc);
  // };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    // centerMode: true,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-wework py-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
            We treat in several verticals.
          </h3>
          {/* <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">
            We work in several verticals.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">
            We work in several verticals.
          </h3> */}
        </div>
      </div>
      <Slider {...settings}>
        {postData.map((items, i) => (
          <div key={i} className="relative">
            <div className="bg-white test-sha m-3 p-10 my-20 rounded-3xl">
              <div className="flex gap-2 text-center items-center">
                <div>
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={71}
                    height={71}
                    className="inline-block m-auto test-pos mb-2"
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium p-2">{items.name}</h3>
                  {/* if you want to use the below text then add pb-0 to the above h3 */}
                  {/* <h3 className="text-xs font-medium text-left pl-2 opacity-50">
                    {items.profession}
                  </h3> */}
                </div>
              </div>
              <hr style={{ color: "lightgrey" }} />
              <h4
                className="text-base font-medium text-testColor my-4 h-[120px] overflow-y-auto"
                // style={{ scrollbarWidth: "none" }}
              >
                {items.comment}
              </h4>
            </div>
          </div>
        ))}
      </Slider>

      {/* {isOpen && <Modal name={name} desc={desc} closeModal={() => setIsOpen(false)} />}
      {/* <Slider {...settings}>
        {postData.map((items, i) => (
          <div key={i}>
            <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
              <div className="relative">
                <Image
                  src={items.imgSrc}
                  alt="gaby"
                  width={182}
                  height={182}
                  className="inline-block m-auto"
                />
                {/* <Image src={'/images/wework/linkedin.svg'} alt="greenbg" width={120} height={120} className=" absolute inline-block position-linkedin" /> */}
      {/* </div> */}
      {/* <h4
              //   className="text-3xl pt-14 cursor-pointer"
              //   onClick={() => handleOpenModal(items.name, items.desc)}
              // >
              //   {items.name}
              // </h4>
              // {/* <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.desc}</h3> */}
      {/* </div> */}
      {/* // ))} */}
      {/* // </Slider> */}
    </div>
  );
};

export default index;
