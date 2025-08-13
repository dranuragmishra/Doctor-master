"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQdata = [
  {
    question: "What is gastroenterology, and what conditions does it cover?",
    answer:
      "Gastroenterology is a medical specialty focused on the diagnosis and treatment of disorders affecting the digestive system, including the esophagus, stomach, intestines, liver, gallbladder, and pancreas. It covers a wide range of conditions such as acid reflux, inflammatory bowel disease (IBD), irritable bowel syndrome (IBS), liver disease, and pancreatic disorders.",
  },
  {
    question: `What are the common procedures performed by gastroenterologists?`,
    answer: `Gastroenterologists perform various diagnostic and therapeutic
      procedures, including endoscopy (such as upper GI endoscopy and
      colonoscopy), liver biopsies, endoscopic retrograde cholangiopancreatography
      (ERCP), Endoscopic ultrasound  (EUS), and capsule endoscopy.`,
  },
  {
    question: "How can I prepare for a gastroenterology procedure?",
    answer: `Preparation for gastroenterology procedures depends on the
      specific test being performed. Generally, patients may need to
      follow dietary restrictions, adjust medication schedules, and
      undergo bowel preparation. Your gastroenterologist will
      provide detailed instructions tailored to your procedure.`,
  },
  {
    question:
      " What lifestyle changes can help improve gastrointestinal health?",
    answer: `Adopting a healthy lifestyle can significantly improve
      gastrointestinal health. This includes maintaining a balanced
      diet rich in fiber, staying hydrated, regular exercise,
      avoid smoking and excessive alcohol consumption, managing
      stress levels, and practicing good hygiene habits.`,
  },
];

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl sm:my-16 faq-bg"
    >
      <h3 className="text-xl font-normal  text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center ">
        Frequently asked <br /> questions.
      </h2>
      <div className="w-full px-4 pt-16">
        {FAQdata.map((item, index) => (
          <div
            className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5"
            key={index}
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex gap-4 w-full justify-between items-center rounded-lg sm:px-4 sm:py-2 text-left sm:text-2xl text-lg font-semibold">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "" : "rotate-180 transform"
                      } h-10 w-10 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="sm:px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
