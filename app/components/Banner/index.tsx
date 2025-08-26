import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl -mb-16 sm:py-10 sm:my-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0">
          {/* <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>DESIGN AGENCY</button>
                    </div> */}
          <div className="py-3 text-center lg:text-start">
            <h1 className="text-3xl lg:text-7xl font-bold text-darkpurple">
              Compassionate{" "}
              <span className="font-bold text-[#abcbf9]">Care</span> <br /> For
              All Your <br /> Gastro & Liver Needs.
            </h1>
          </div>
          <div className="my-7 text-center lg:text-start flex sm:flex-row flex-col items-center">
            <Link href="https://cal.com/dranuragmishra/bookings">
              <button className="text-sm md:text-xl font-semibold mr-2 hover:shadow-xl my-3 bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-[#abcbf9]">
                Book your Appointment
              </button>
            </Link>
            <a href="tel:918200994039">
              <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-[#abcbf9]">
                Call us for Appointment
              </button>
            </a>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="lg:-m-24 lg:pl-16 hidden lg:block">
          <Image
            src="/images/banner/bhaiya_photo.jpeg"
            alt="hero-image"
            className=" mx-36 rounded-full"
            width={500}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
