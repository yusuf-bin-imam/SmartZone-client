import React from "react";
import Lottie from "lottie-react";
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi";
import faq from "../../src/assets/faq.json";
const Faq = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h4 id="title" className="mt-5 text-4xl font-bold  text-teal-900 mb-2">
        Faq
      </h4>
      <p id="txt" className="font-bold">
        Got Questions? We've Got Answers!
      </p>
      <div className="grid mt-5 grid-cols-1 lg:grid-cols-2">
        <div>
          <Lottie
            className="w-1/2 mx-auto"
            animationData={faq}
            loop={true}
          ></Lottie>
        </div>
        <div class="">
          <details
            class="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-2 text-gray-900">
              <h2 class="font-bold text-xl">Why you choose SmartZone?</h2>

              <TfiAngleDown className="font-bold text-xl" />
            </summary>

            <p class="mt-4 font-bold text-start p-2 ">
              SmartZone provides smartphones at an affordable price, and its
              very reliable and trusted.
            </p>
          </details>
          <details
            class="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-2 text-gray-900">
              <h2 class="font-bold text-xl">How can I get into SmartZone?</h2>

              <TfiAngleDown className="font-bold text-xl" />
            </summary>

            <p class="mt-4 font-bold text-start p-2 ">
              By logging into the application's website on your computer or
              mobile device with an internet connection, you can access a
              fitness monitoring web application.
            </p>
          </details>
          <details
            class="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-2 text-gray-900">
              <h2 class="font-bold text-xl">
                How do I get in touch with the authorities?
              </h2>

              <TfiAngleDown className="font-bold text-xl" />
            </summary>

            <p class="mt-4 font-bold text-start p-2 ">
              You can get in touch with us by email or through our contact page.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
