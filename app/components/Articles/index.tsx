import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// CAROUSEL DATA

interface DataType {
  time: string;
  heading: string;
  heading2: string;
  heading3: string;
  date: string;
  imgSrc: string;
  name: string;
  link: string;
}

const postData: DataType[] = [
  {
    time: "15 min",
    heading: "Efficacy of hepatitis B ",
    heading2: "vaccination in patients",
    heading3: "",
    name: "Published on Intestinal Research",
    date: "February 08, 2022",
    imgSrc: "/images/articles/A1.jpeg",
    link: "https://irjournal.org/journal/view.php?doi=10.5217/ir.2021.00106",
  },
  {
    time: "15 min",
    heading: "Prevalence and Association of ",
    heading2: "Hyperuricemia in Patients",
    heading3: "",
    name: "Published on IJCMR",
    date: "March 03, 2017",
    imgSrc: "/images/articles/A2.jpeg",
    link: "https://www.ijcmr.com/uploads/7/7/4/6/77464738/ijcmr_1273_march_4.pdf",
  },
];

const MultipleItems: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    arrows: false,
    autoplay: false,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-white py-20" id="blog-section">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest">
            ARTICLES
          </h3>
          <h3 className="text-4xl sm:text-6xl font-semibold">
            Our latest post.
          </h3>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
                <Image
                  src={items.imgSrc}
                  alt="gaby"
                  width={380}
                  height={262}
                  className="inline-block m-auto"
                />

                <Link href={items.link}>
                  <h4 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6  rounded-full article-img">
                    {items.time} read
                  </h4>
                </Link>
                <h4 className=" text-2xl text-center font-bold sm:pt-6 pt-12 text-black">
                  {items.heading}
                </h4>
                <h4 className="text-2xl text-center font-bold pt-1 text-black">
                  {items.heading2}
                </h4>
                <h4 className="text-2xl text-center font-bold pt-1 text-black">
                  {items.heading3}
                </h4>

                <div>
                  <h3 className="text-base text-center font-normal pt-6 pb-2 opacity-75">
                    {items.name}
                  </h3>
                  <h3 className="text-base text-center font-normal pb-1 opacity-75">
                    {items.date}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mx-auto px-10 mt-4 sm:hidden">
          <button className="bg-[#abcbf9] mr-5 py-3 px-5 rounded-full" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="bg-[#abcbf9] ml-5 py-3 px-5 rounded-full" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultipleItems;
