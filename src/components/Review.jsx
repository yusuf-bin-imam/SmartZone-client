import React, { useContext } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { authContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const giveFeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewerName = form.userName.value;
    const reviewerEmail = form.userEmail.value;
    const reviewerImage = form.photo.value;
    const feedback = form.message.value;

    const reviewInfo = {
      reviewerEmail,
      reviewerName,
      reviewerImage,
      feedback,
    };
    // console.log(reviewInfo);
    fetch(`http://localhost:5000/feedbacks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (user?.uid) {
          //   console.log(result);
          toast.success("Thanks for your feedback");
          form.reset();
          navigate("/");
        } else {
          toast.error("kindly log in first");
          navigate("/login");
        }
      });
  };

  return (
    <div>
      <div>
        <div className=" max-w-screen-xl mx-auto">
          <section>
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1
                  id="title"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  class="sm:text-3xl text-3xl font-bold title-font mb-2"
                >
                  Give Feedback
                </h1>
                <p
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  id="txt"
                  class="lg:w-2/3 mx-auto font-bold text-xl "
                >
                  Share your experience and let us exceed your expectations
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <lottie-player
                    src="https://assets1.lottiefiles.com/packages/lf20_EU5QSFMWQ7.json"
                    background="transparent"
                    speed="1"
                    loop
                    // controls
                    autoplay
                  ></lottie-player>
                </div>
                <form onSubmit={giveFeedback}>
                  <div
                    // data-aos="fade-left"
                    // data-aos-duration="1500"
                    class="mt-0 lg:mt-40 mx-auto"
                  >
                    <div class="space-y-3">
                      <div>
                        <input
                          type="text"
                          id="inputTxt"
                          placeholder="Enter your name"
                          name="userName"
                          readOnly
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
                          name="userEmail"
                          readOnly
                          defaultValue={user?.email}
                          required
                          class="w-full border-black border-2 py-3 px-3 rounded"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          id="inputTxt"
                          // placeholder="Enter your Email"
                          name="photo"
                          readOnly
                          defaultValue={user?.photoURL}
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
                    Send Feedback <BsFillSendFill className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Review;
