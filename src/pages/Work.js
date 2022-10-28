import React from "react";
import Layout from "../components/Layout/Layout";
export const Work = () => {
  return (
    <>
      <Layout>
        <div class="bg-myblack text text-white sm:p-12  sm:px-24 px-10  p-10 ">
          <div class="whatdoido">
            <h2 class="text-4xl sm:text-5xl  font-bold py-10 ">
              What do I do?
            </h2>

            <p class="text-2xl sm:text-4xl sm:leading-normal pb-20">
              I Design, Develop Web Applications with JS and make Static
              Websites using HTML/CSS. I use Linux as my daily driver. Currently
              learning Full Stack Applications using JavaScript.
            </p>
          </div>

          <p class="text-4xl py-16">
            Check my code on{" "}
            <a
              href="https://github.com/sahilahluwalia"
              target="_blank"
              rel="noopener noreferrer"
              class="font-extrabold hover:text-brightgreen"
            >
              GitHub
            </a>{" "}
          </p>

          <div class="react">
            <h2 class="text-4xl sm:text-5xl  font-bold py-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              Recent React Works
            </h2>
            <div class="text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-1/2 ">
              <ul class="hover:text-brightgreen">
                <a
                  href="https://renunion-assignment.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Estatery
                </a>
              </ul>
              <ul class="hover:text-brightgreen">
                <a
                  href="https://iamsahilahluwalia.in/work"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </ul>
              <ul class="hover:text-brightgreen">
                <a
                  href="https://verysimpletodo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Todo
                </a>
              </ul>
            </div>

            <div class="tailwind text-right">
              <h2 class="text-4xl sm:text-5xl  font-bold py-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-500">
                Recent Tailwind Replicas
              </h2>
              <div class="flex">
                <div class="left w-1/2"></div>
                <div class="right w-1/2">
                  <div class="text-2xl grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
                    <ul class="hover:text-brightgreen">
                      <a
                        href="https://shopifyindia.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Shopify India
                      </a>{" "}
                    </ul>
                    <ul class="hover:text-brightgreen">
                      <a
                        href="https://paytm-homepage.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Paytm
                      </a>
                    </ul>
                    <ul class="hover:text-brightgreen">
                      <a
                        href="https://rode-homepage.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Rode India
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="htmlcss">
              <h2 class="text-4xl sm:text-5xl  font-bold py-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                Recent HTML/CSS Works
              </h2>
              <div class="text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-1/2 ">
                <ul class="hover:text-brightgreen">
                  <a
                    href="https://product-design-landingpage-p15.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Designer
                  </a>
                </ul>
                <ul class="hover:text-brightgreen">
                  <a
                    href="https://dance-homepage-p14.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dance
                  </a>
                </ul>
                <ul class="hover:text-brightgreen">
                  <a
                    href="https://business-landingpage-p12.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Business
                  </a>
                </ul>
                <ul class="hover:text-brightgreen">
                  <a
                    href="https://hosting-landingpage-p11.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hosting
                  </a>
                </ul>
                <ul class="hover:text-brightgreen">
                  <a
                    href="https://developer-landingpage-p9.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Developer
                  </a>
                </ul>
                <ul class="hover:text-brightgreen">
                  <a
                    href="https://product-homepage-p7.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Headphone
                  </a>
                </ul>
                <ul class="hover:text-brightgreen">
                  <a
                    href="https://street-style-p1.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Street Style
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
