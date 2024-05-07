"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

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
        heading: 'Prevalence and Association of ',
        heading2: 'Hyperuricemia in Patients',
        heading3:'',
        name: "Published on IJCMR",
        date: 'March 03, 2017',
        imgSrc: '/images/articles/A2.jpeg',
        link : "https://www.ijcmr.com/uploads/7/7/4/6/77464738/ijcmr_1273_march_4.pdf",
    },
    {
        time: "15 min",
        heading: 'Efficacy of hepatitis B ',
        heading2: 'vaccination in patients',
        heading3:'',
        name: "Published on Intestinal Research",
        date: 'February 08, 2022',
        imgSrc: '/images/articles/A1.jpeg',
        link : "https://irjournal.org/journal/view.php?doi=10.5217/ir.2021.00106",
    },
    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     heading3:'f',
    //     name: "Published on Startupon",
    //     date: 'August 19, 2021',
    //     imgSrc: '/images/articles/article3.png',
    //     link: " ",
    // },
    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     name: "Published on Startupon",
    //     date: 'August 19, 2021',
    //     imgSrc: '/images/articles/article.png',
    // },
    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     name: "Published on Startupon",
    //     date: 'August 19, 2021',
    //     imgSrc: '/images/articles/article2.png',
    // },
    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     name: "Published on Startupon",
    //     date: 'August 19, 2021',
    //     imgSrc: '/images/articles/article3.png',
    // },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 2,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
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
            <div className="bg-white py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">ARTICLES</h3>
                        <h3 className="text-4xl sm:text-6xl font-semibold">Our latest post.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (   
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={380} height={262} className="inline-block m-auto" />

                                    <Link href={items.link}>
                                        <h4 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6  rounded-full article-img">{items.time} read</h4>
                                    </Link>
                                    <h4 className=' text-2xl text-center font-bold sm:pt-6 pt-12 text-black'>{items.heading}</h4>
                                    <h4 className='text-2xl text-center font-bold pt-1 text-black'>{items.heading2}</h4>
                                    <h4 className='text-2xl text-center font-bold pt-1 text-black'>{items.heading3}</h4>

                                    <div>
                                        <h3 className='text-base text-center font-normal pt-6 pb-2 opacity-75'>{items.name}</h3>
                                        <h3 className='text-base text-center font-normal pb-1 opacity-75'>{items.date}</h3>
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
