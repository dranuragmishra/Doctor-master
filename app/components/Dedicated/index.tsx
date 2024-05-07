import Image from "next/image";
import {
  TimelineComponent,
  ItemsDirective,
  ItemDirective,
} from "@syncfusion/ej2-react-layouts";
import Degree from "../Degree";

const Dedicated = () => {
  return (
    <div className="relative">
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-0 hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl px-4  sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div>
            <Image
              src="/images/banner/bhaiya_photo.jpeg"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0"
            />
          </div>

          {/* COLUMN-2 */}
          <div className="relative">
            <Image
              src="images/dedicated/comma.svg"
              alt="comma-image"
              width={200}
              height={106}
              className="absolute comma-pos hidden lg:block"
            />
            <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
              Dedicated to help peoples gastro needs.
            </h2>
            <p className="font-medium text-lightblack sm:text-2xl mt-5 text-justify lg:text-start">
              Dr Anurag has breadth & depth of experience of more than 8 years,
              emphasizing the high volume & variety of procedures completed.
              This heading communicates the exceptional level of expertise &
              dediction to gastointestinal health. He is an active particitant
              in various national & international conferences & workshops. He is
              actively involved in research activities & has many research
              papers to his name including &ldquo;Intestinal Research&rdquo;
            </p>
            <p className="text-2xl font-semibold mt-12 lg:ml-32 text-center lg:text-start">
              {" "}
              Dr. Anurag Mishra (DM)
            </p>
          </div>
        </div>
      </div>
      {/* <Degree /> */}
    </div>
  );
};

export default Dedicated;
