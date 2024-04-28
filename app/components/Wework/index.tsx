"use client";
import Slider from "react-slick";
import React, { Component, useState } from "react";
import Image from "next/image";
import Modal from "../Modal";

// CAROUSEL DATA

interface DataType {
  desc: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ut vitae voluptates quas minus excepturi exercitationem ex. Reprehenderit, voluptatem officia?",
    name: "Name 1",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    desc: "Co-founder",
    name: "Name 2",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    desc: "Co-founder",
    name: "Name 3",
    imgSrc: "/images/wework/avatar4.svg",
  },
  {
    desc: "Co-founder",
    name: "Name 4",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    desc: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    desc: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/avatar4.svg",
  },
];

// CAROUSEL SETTINGS

const index = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 4000,
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
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const handleOpenModal: any = (name: string, desc: string) => {
    setIsOpen(true);
    setName(name);
    setDesc(desc);
  };

  return (
    <div className="bg-wework py-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
            We work in several verticals.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">
            We work in several verticals.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">
            We work in several verticals.
          </h3>
        </div>
      </div>
      {isOpen && <Modal name={name} desc={desc} closeModal={() => setIsOpen(false)} />}
      <Slider {...settings}>
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
              </div>
              <h4
                className="text-3xl pt-14 cursor-pointer"
                onClick={() => handleOpenModal(items.name, items.desc)}
              >
                {items.name}
              </h4>
              {/* <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.desc}</h3> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default index;
