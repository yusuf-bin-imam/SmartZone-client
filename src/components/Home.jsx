import React from "react";

const Home = () => {
  return (
    <div>
      <section>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div class="flex flex-wrap items-center mx-auto max-w-7xl">
            <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div class="relative w-full max-w-lg">
                  <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div class="relative">
                    <img
                      class="object-cover object-center mx-auto rounded-lg shadow-2xl"
                      alt="hero"
                      src="https://img.freepik.com/free-photo/portrait-smiling-young-girl-using-mobile-phone_171337-1627.jpg?w=1060&t=st=1669224128~exp=1669224728~hmac=2bc8f03b3ca912c13bd2f20ee8408fcf661a4ed4a06ce5f93538e6dee137675d"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                {" "}
                Your tagline{" "}
              </span>
              <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                Medium length display headline.
              </h1>
              <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML &amp; Next.js.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
