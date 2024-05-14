import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// CAROUSEL DATA
interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Gastroenterology Expert",
    profession: "Patient",
    comment:
      "He is trained in the Gastroenterology from the prestigious institute GB Pant (GIPMER) , New Delhi .",
    imgSrc: "/images/wework/IMG_1.jpg",
  },
  {
    name: "Hepatology Expert",
    profession: "Patient",
    comment:
      "He is trained & proficient in managing all liver related ailments including management of Hepatitis , Cirrhosis & its complications.",
    imgSrc: "/images/wework/img_6.jpeg",
  },
  {
    name: "Endoscopy Expert",
    profession: "Patient",
    comment:
      "He is proficient in diagnostic & international endoscopic procedures including ERCP & EUS . He has done more than 15000 endoscopy till date",
    imgSrc: "/images/wework/img_4.png",
  },
  {
    name: "GI Emergency & Intensive care Expert",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'He is well trained in management of Gastrointestinal emergencies & gastro patient requiring intensive care treatment with good outcomes.',
    imgSrc: '/images/wework/img_5.jpeg',
  },
];

const Index = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: currentSlide,
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
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
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
    <div className="bg-wework py-32" id="services-section">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
            Specialisation/Expertis
          </h3>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
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
                    className="inline-block m-auto test-pos mb-2 rounded-full"
                  />
                </div>
                <div>
                  <h3 className=" font-bold text-xl p-2">{items.name}</h3>
                </div>
              </div>
              <hr style={{ color: "lightgrey" }} />
              <h4 className="text-xl font-medium text-testColor my-4 h-[120px] overflow-y-auto">
                {items.comment}
              </h4>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center mx-auto px-10">
        <button className="bg-[#abcbf9] mr-5 py-3 px-5 rounded-full" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="bg-[#abcbf9] ml-5 py-3 px-5 rounded-full" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Index;
