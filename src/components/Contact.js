import React from "react";
import contact from "../../src/assets/contact.json";
import Lottie from "lottie-react";

import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <div className="mt-20 max-w-screen-xl mx-auto">
        <section id="contact">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1
                id="title"
                data-aos="fade-down"
                data-aos-duration="1500"
                class="sm:text-3xl text-3xl font-bold title-font mb-2"
              >
                Contact
              </h1>
              <p
                data-aos="fade-down"
                data-aos-duration="1500"
                id="txt"
                class="lg:w-2/3 mx-auto font-bold text-xl "
              >
                Reach Us for Support or Inquiries
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <Lottie
                  className="w-full"
                  animationData={contact}
                  loop={true}
                ></Lottie>
              </div>
              <form>
                {/* ref={form} onSubmit={sendEmail} */}
                <div class="mt-20 mx-auto">
                  <div class="space-y-3">
                    <div data-aos="fade-right" data-aos-duration="1500">
                      <input
                        type="text"
                        id="inputTxt"
                        placeholder="Enter your name"
                        name="user_name"
                        required
                        class="w-full border-black border-2 py-3 px-3 rounded"
                      />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500">
                      <input
                        type="text"
                        id="inputTxt"
                        placeholder="Enter your name"
                        name="user_name"
                        required
                        class="w-full border-black border-2 py-3 px-3 rounded"
                      />
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1500">
                      <textarea
                        id="inputTxt"
                        name="message"
                        required
                        placeholder="Additional details"
                        class="w-full border-black border-2 py-5 px-3 rounded"
                        data-gramm="false"
                        wt-ignore-input="true"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  id="title"
                  className="btn btn-outline w-full max-w-xs rounded-none bg-[#1b3764] text-white"
                  // disabled={disable ? true : false}
                  type="submit"
                >
                  submit <BsFillSendFill className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
