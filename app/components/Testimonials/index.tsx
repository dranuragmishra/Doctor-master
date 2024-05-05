"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

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
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
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


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See what others are saying.</h3>
                    </div>


                    <Slider {...settings}>
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
                </div>
            </div>

        );
    }
}
