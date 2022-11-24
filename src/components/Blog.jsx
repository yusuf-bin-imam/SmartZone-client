import React from "react";

const Blog = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div
              data-aos="zoom-out"
              data-aos-duration="3000"
              className="w-full mx-auto"
            >
              <h2 className="text-3xl font-serif text-blue-900 font-bold">
                What are the different ways to manage a state in a React
                application??
              </h2>
              <p className="font-bold space-y-5 mt-3 ">
                1. React Component Props This is the most basic way to manage
                state for your components, you simply pass the state via props.{" "}
                <br />
                2. React Context React Context was added to React to help solve
                the problem of sharing state between multiple components,
                especially between ones that are not close in the component
                hierarchy. React Context is a great option because it is very
                straight forward to use and has native support, as it is part of
                React itself.
                <br />
                3. Redux state management
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="border-t-2 mt-10 w-full mx-auto"
            >
              <h2 className="text-3xl font-serif text-blue-900 font-bold">
                How does prototypical inheritance work?
              </h2>
              <p className="font-bold mt-3 ">
                In prototypical inheritance, inheritance works something like
                this: That is you first create an object. This object then
                functions as a prototype (a fully working model) for any objects
                you want to create later. So when you want to create a new
                object, you pass a reference/link to this prototype.
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="w-full border-t-2 mt-10 mx-auto"
            >
              <h2 className="text-3xl font-serif text-blue-900 font-bold">
                What is a unit test? Why should we write unit tests?
              </h2>
              <p className="font-bold mt-3 ">
                Unit testing is a software testing method where “units”—the
                individual components of software—are tested. Developers write
                unit tests for their code to make sure that the code works
                correctly. This helps to detect and protect against bugs in the
                future . Thats why we should use this.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="w-full border-t-2 mt-10 mx-auto"
            >
              <h2 className="text-3xl font-serif text-blue-900 font-bold">
                React vs. Angular vs. Vue?
              </h2>
              <p className="font-bold mt-3 ">
                React is a UI library, Angular is a fully-fledged front-end
                framework, while Vue.js is a progressive framework. They can be
                used almost interchangeably to build front-end applications, but
                they’re not 100 percent the same, so it makes sense to compare
                them and understand their differences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
