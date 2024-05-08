import Link from "next/link";

const Beliefs = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl sm:mt-0 -mt-16 lg:px-8 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5">
        {/* COLUMN-1 */}

        <div className="bg-darkblue pt-12 px-4 sm:px-24 pb-10 rounded-3xl">
          <h2 className="sm:text-lg text-sm font-normal text-white tracking-widest mb-5 text-center sm:text-start">
            SAVE TIME, FEEL BETTER
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
            Skip{" "}
            <span className="text-grey">
              the waiting room! Call us before you arrive.
            </span>
          </h3>
          <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">
            {/* Desc */}
          </h5>
          <div className="text-center sm:text-start">
            <Link href={"https://cal.com/nikhil-mishra/15min"}>
              <button className="text-l sm:text-xl py-5 sm:px-14 px-5 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="bg-[#d6ffeb] pt-12 pb-10 px-4 sm:px-24 rounded-3xl">
          <h2 className="sm:text-lg text-sm font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
            MORE ABOUT US
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug sm:mb-20 mb-5 text-center sm:text-start">
            <span className="text-blue">New</span> to <br />
            Dr. Anurag Mishra&apos;s Clinic?
          </h3>
          <h5 className="bluish pt-2 mb-5 text-center sm:text-start">
            {/* Desc */}
          </h5>
          <div className="text-center sm:text-start">
            <Link href={"https://cal.com/nikhil-mishra/15min"}>
              <button className="text-l sm:text-xl py-5 sm:px-14 px-5 sm:mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
