import React from "react";
import Layout from "../components/Layout/Layout";
export const Home = () => {
  return (
    <>
      <Layout>
        <div class="bg-myblack text text-white sm:p-12  sm:px-24 px-10  p-10 ">
          <p class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium lg:leading-normal cursor-pointer">
            I am a{" "}
            <span class="font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              {" "}
              Web Developer{" "}
            </span>{" "}
            that specialises in the{" "}
            <span class="font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              Design
            </span>{" "}
            and{" "}
            <span class="font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              {" "}
              Development{" "}
            </span>{" "}
            of Complex JavaScript Web Applications. Other times, you can find me
            trying to finish novels extremely slowly.
          </p>
          <p class="text-4xl py-16">
            Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/sahil-ahluwalia-630283187/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-extrabold hover:text-brightgreen"
            >
              LinkedIn
            </a>{" "}
          </p>
        </div>
      </Layout>
    </>
  );
};
