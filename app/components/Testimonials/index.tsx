import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { StarIcon } from '@heroicons/react/24/solid';
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
        name: "Dr. Arvind Gupta",
        profession: 'Patient',
        comment: 'One of the best gastroenterologist in lko i have ever met who not only treats you with the required medicines but also give mental nd emotional strength  which is more important for treating any patient. Diagnosis is excellent.sir is very humble and polite. Thank you again sir for the helping  and support you provided....will recommend everyone for consultation',
        imgSrc: '/images/testimonial/testimonial_1.png',
    }, {
        name: "Ashutosh Dwivedi",
        profession: 'Patient',
        comment: 'After having been to 3 other GI doctors I was ready to give up hope. He was very nice, explained my problems to me in 1st visit and came up with a great treatment plan. I feel better than I have in years!! Great doctor',
        imgSrc: '/images/testimonial/testimonial_3.png',
    },
    {
        name: "Saba Sangrar",
        profession: 'Patient',
        comment: 'I highly recommend Dr. Anurag for anyone seeking efficient and effective medical care. Grateful for the quick relief and the exceptional care provided by a skilled healthcare professional.',
        imgSrc: '/images/testimonial/testimonial_2.png',
    },  
];

const MultipleItems: React.FC = () => {
    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
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
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
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
        <div className="bg-testimonial" id="testimonial-section">
            <div className='mx-auto max-w-7xl sm:py-4'>
                <div className="text-center">
                    <h3 className="text-4xl sm:text-6xl font-bold text-black sm:my-3">See what others are saying.</h3>
                </div>
                <Slider {...settings} ref={sliderRef}>
                    {postData.map((items, i) => (
                        <div key={i} className="relative">
                            <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                <hr style={{ color: "lightgrey" }} />
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                        <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                    </div>
                                    <div className="flex">
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="flex justify-center mx-auto px-10 mb-5 sm:hidden">
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
