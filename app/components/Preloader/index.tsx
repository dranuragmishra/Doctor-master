// components/Spinner.tsx
import * as React from "react";


import Image from 'next/image';
import spinnerImage from '../../../public/images/preloader/preloader.jpeg';
import {Spinner} from "@nextui-org/react";

const Preloader: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-lightgrey">
      <div className="w-64 h-64 pt-10 relative">
        {/* Spinner */}
      
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[320px] h-[300px] border-t-4 border-b-4 border-gray-600 rounded-full animate-spin">
          
          </div>
        </div>
        <Image src={spinnerImage} alt="Loader" className="rounded-full object-fit" />
        {/* Image */}
        
      </div>
    </div>
  );
};

export default Preloader;
