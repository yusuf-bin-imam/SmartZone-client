import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="3000">
      <article
        data-aos="zoom-out-left"
        className="rounded-lg border text-start   border-b-teal-600 border-b-4  p-4 shadow-sm transition hover:shadow-lg sm:p-6"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>
        <Link to="#">
          <h3 className="mt-0.5 text-lg text-start font-bold text-gray-900">
            What are the different ways to manage a state in a React
            application??
          </h3>
        </Link>

        <p className="mt-2 text-sm text-start font-semibold leading-relaxed text-gray-500 line-clamp-3">
          1. React Component Props This is the most basic way to manage state
          for your components, you simply pass the state via props. <br />
          2. React Context React Context was added to React to help solve the
          problem of sharing state between multiple components, especially
          between ones that are not close in the component hierarchy. React
          Context is a great option because it is very straight forward to use
          and has native support, as it is part of React itself.
          <br />
          3. Redux state management
        </p>
      </article>
      <article
        data-aos="fade-down"
        data-aos-easing="linear"
        className="rounded-lg border text-start border-b-teal-600 border-b-4 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <Link to="#">
          <h3 className="mt-0.5 text-lg font-bold text-gray-900">
            How does prototypical inheritance work?
          </h3>
        </Link>

        <p className="mt-2 text-sm leading-relaxed font-semibold text-gray-500 line-clamp-3">
          In prototypical inheritance, inheritance works something like this:
          That is you first create an object. This object then functions as a
          prototype (a fully working model) for any objects you want to create
          later. So when you want to create a new object, you pass a
          reference/link to this prototype.
        </p>
      </article>
      <article
        data-aos="fade-up"
        className="rounded-lg border text-start border-b-teal-600 border-b-4  p-4 shadow-sm transition hover:shadow-lg sm:p-6"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <Link to="#">
          <h3 className="mt-0.5 text-lg font-bold text-gray-900">
            What is a unit test? Why should we write unit tests?
          </h3>
        </Link>

        <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-500 ">
          Unit testing is a software testing method where “units”—the individual
          components of software—are tested. Developers write unit tests for
          their code to make sure that the code works correctly. This helps to
          detect and protect against bugs in the future . Thats why we should
          use this.
        </p>
      </article>
      <article
        data-aos="fade-right"
        className="rounded-lg border text-start  border-b-teal-800 border-b-4  p-4 shadow-sm transition hover:shadow-lg sm:p-6"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <Link to="#">
          <h3 className="mt-0.5 text-lg font-bold text-gray-900">
            React vs. Angular vs. Vue?
          </h3>
        </Link>

        <p className="mt-2 text-sm leading-relaxed font-semibold text-gray-500 ">
          React is a UI library, Angular is a fully-fledged front-end framework,
          while Vue.js is a progressive framework. They can be used almost
          interchangeably to build front-end applications, but they’re not 100
          percent the same, so it makes sense to compare them and understand
          their differences.
        </p>
      </article>
    </div>
  );
};

export default Blog;
