import React, { useContext, useRef } from "react";
// import contact from "../../src/assets/contact.json";
import contact from "../../src/assets/contactUs.json";
import Lottie, { LottiePlayer } from "lottie-react";
import emailjs from "@emailjs/browser";

import { BsFillSendFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { authContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        form.current,
        "FmqreMkLnogSjg1Zs"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
          navigate("/");
        },
        (error) => {
          console.log(error.text);
          toast.error("Opps..! message not send");
        }
      );
  };

  return (
    <div>
      <div className=" max-w-screen-xl mx-auto">
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
                <lottie-player
                  src="https://assets8.lottiefiles.com/packages/lf20_gaplvsns.json"
                  background="transparent"
                  speed="1"
                  loop
                  controls
                  autoplay
                ></lottie-player>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div
                  // data-aos="fade-left"
                  // data-aos-duration="1500"
                  class="mt-40 mx-auto"
                >
                  <div class="space-y-3">
                    <div>
                      <input
                        type="text"
                        id="inputTxt"
                        placeholder="Enter your name"
                        name="user_name"
                        defaultValue={user?.displayName}
                        required
                        class="w-full border-black border-2 py-3 px-3 rounded"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="inputTxt"
                        placeholder="Enter your Email"
                        name="user_email"
                        defaultValue={user?.email}
                        required
                        class="w-full border-black border-2 py-3 px-3 rounded"
                      />
                    </div>

                    <div>
                      <textarea
                        id="inputTxt"
                        name="message"
                        required
                        placeholder="Additional details"
                        class="w-full border-black border-2 py-5 px-3 rounded"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
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
