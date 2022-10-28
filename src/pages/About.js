import React from "react";
import Layout from "../components/Layout/Layout";
export const About = () => {
  return (
    <>
      <Layout>
        <div class="bg-myblack text text-white sm:p-12  sm:px-24 px-10  p-10 ">
          <div class="whatdoido">
            <h2 class="text-4xl sm:text-5xl  font-bold py-10">About Me</h2>

            <p class="text-2xl sm:text-4xl sm:leading-normal pb-20 lg:w-3/4">
              Hey there!, it's great to see you today. I'm Sahil - Web Developer
              experienced in Designing and Developing Web Applications and
              Static Websites. I am a Tech enthusiast. I use Linux as my daily
              driver. I'm currently learning Full Stack Web Applications using
              JavaScript. I'm also an amateur Walker, Fitness enthusiast, Hydro
              homie and a Dog lover.
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

          <div class="tailwind text-right">
            <h2 class="text-4xl sm:text-5xl  font-bold py-10 ">My Abilities</h2>
            <div class="flex">
              <div class="left w-1/2"></div>
              <div class="right w-1/2">
                <div class="text-2xl grid grid-cols-1 ">
                  <ul class="hover:text-brightgreen cursor-pointer">
                    Web Design
                  </ul>
                  <ul class="hover:text-brightgreen cursor-pointer">
                    Web Development
                  </ul>
                  <ul class="hover:text-brightgreen cursor-pointer">
                    Research
                  </ul>
                  <ul class="hover:text-brightgreen cursor-pointer">
                    Googling
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="htmlcss">
            <h2 class="text-4xl sm:text-5xl  font-bold py-10">
              I Don't Bite, Reach me on
            </h2>
            <div class="text-2xl grid grid-cols-1 ">
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

          <div class="tailwind text-right">
            <div class="flex">
              <div class="left w-1/2"></div>
              <div class="right w-1/2 py-10">
                <p class="text-xs">
                  This website was developed by hand and computer in Bangalore
                  by Sahil Ahluwalia. Inspired by{" "}
                  <strong class="hover:text-brightgreen cursor-pointer">
                    <a
                      href="https://zcole.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zach Cole
                    </a>
                  </strong>
                  , the OG. Thanks for visiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
