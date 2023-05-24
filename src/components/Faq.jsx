import React from "react";
import Lottie from "lottie-react";
import { TfiAngleDown } from "react-icons/tfi";
import faq from "../../src/assets/faq.json";
const Faq = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h4 id="title" className="mt-5  text-4xl font-bold  text-[#1b3764] mb-2">
        Faq
      </h4>
      <p id="txt" className="font-bold">
        Got Questions? We've Got Answers!
      </p>
      <div className="grid m-10  grid-cols-1 lg:grid-cols-2">
        <div className="w-96 mx-auto">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_ssIwdK.json"
            loop
            speed="1"
            autoplay
          ></lottie-player>
        </div>
        <div className="mt-10 space-y-10">
          <details>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-2 text-gray-900">
              <h2 className="font-bold text-xl">Why you choose SmartZone?</h2>

              <TfiAngleDown className="font-bold text-xl" />
            </summary>

            <p className=" font-bold text-start p-2 ">
              SmartZone provides smartphones at an affordable price, and its
              very reliable and trusted.
            </p>
          </details>
          <details>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-2 text-gray-900">
              <h2 className="font-bold text-xl">Is Smartzone reliable?</h2>

              <TfiAngleDown className="font-bold text-xl" />
            </summary>

            <p className=" font-bold text-start p-2 ">
              SmartZone has built a strong reputation for trustworthiness among
              its users, offering reliable products and services. However, it is
              recommended to conduct further research and read user reviews to
              make an informed decision.
            </p>
          </details>
          <details>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-2 text-gray-900">
              <h2 className="font-bold text-xl">
                How do I make a phone reservation?
              </h2>

              <TfiAngleDown className="font-bold text-xl" />
            </summary>

            <p className=" font-bold text-start p-2 ">
              After logging in to our website, you can book a phone. Go to your
              favorite brand's products and book a product, and after booking in
              the My Orders section, you can pay for this phone.
            </p>
          </details>
          <details>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-2 text-gray-900">
              <h2 className="font-bold text-xl">
                How can I get into SmartZone?
              </h2>

              <TfiAngleDown className="font-bold text-xl" />
            </summary>

            <p className=" font-bold text-start p-2 ">
              By logging into the application's website on your computer or
              mobile device with an internet connection, you can access a
              fitness monitoring web application.
            </p>
          </details>
          <details
          //
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-2 text-gray-900">
              <h2 className="font-bold text-xl">
                How do I get in touch with the authorities?
              </h2>

              <TfiAngleDown className="font-bold text-xl" />
            </summary>

            <p className=" font-bold text-start p-2 ">
              You can get in touch with us by email or through our contact page.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
