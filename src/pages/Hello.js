import React from "react";
import Layout from "../components/Layout/Layout";
export const Hello = () => {
  return (
    <>
      <Layout>
        <div class="bg-myblack text text-white sm:p-12  sm:px-24 px-10  p-10 ">
          <div class="whatdoido">
            <h2 class="text-4xl sm:text-5xl  font-bold py-10 ">
              Namaste, hello, hola!
            </h2>

            <p class="text-2xl sm:text-4xl sm:leading-normal pb-20 lg:w-3/4">
              I believe this is the start of something good, and I'd love to
              hear from you. Tell me your favourite joke, ask me about web
              development or fitness, or join me in a round of Counter-Strike.
              Feel free to{" "}
              <span class="hover:text-brightgreen font-bold">
                <a href="mailto:iamsahilahluwalia@gmail.com">email me</a>
              </span>
              , or say hi below.
            </p>
          </div>

          <div class="contacts py-10">
            <div class="text-2xl grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 sm:w-3/4">
              <ul class="hover:text-brightgreen">
                <a href="mailto:iamsahilahluwalia@gmail.com">Email</a>
              </ul>
              <ul class="hover:text-brightgreen">
                <a
                  href="https://www.linkedin.com/in/sahil-ahluwalia-630283187/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </ul>
              <ul class="hover:text-brightgreen">
                <a
                  href="https://github.com/sahilahluwalia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </ul>
              <ul class="hover:text-brightgreen">
                <a
                  href="https://www.instagram.com/iamsahilahluwalia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </ul>
              <ul class="hover:text-brightgreen">
                <a
                  href="https://sahilahluwalia.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hashnode
                </a>
              </ul>
              <ul class="hover:text-brightgreen">
                <a
                  href="https://twitter.com/sahealji"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
