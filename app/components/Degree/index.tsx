"use client";
import React from 'react'
import Image from "next/image";



const page = () => {
return (
  <div id="aboutus-section">
    
    
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {/* {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                /> */}
              {/* )} */}
              {item.description}
            </div>
          </div>
        ))}
      </div>
  
    </div>
  );
}

const dummyContent = [
  {
    title: " GB PANT (GIPMER) , New Delhi",
    description: (
      <>
        <p>
         Dr Anurag Mishra is trained  in the specialty of Gastroenterology from the prestigious institue of GB Pant .  
        </p>
      </>
    ),
    badge: "DM(Gastroenterology)",
    // image:
    //   "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Motilal Nehru Medical College(MLNMC), Prayagraj UP",
    description: (
      <>
        <p>
          Dr Anurag Mishra is trained in the specialty of Internal Medicine.
        </p>
       
      </>
    ),
    badge: "MD(Internal Medicine)",
    // image:
    //   "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "King George Medical University (KGMU), Lucknow",
    description: (
      <>
        <p>
          Dr Anurag Mishra has completed his MBBS from KGMU.
        </p>
      </>
    ),
    badge: "MBBS",
    // image:
    //   "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];



export default page