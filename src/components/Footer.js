import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <div class=" bg-myblack footer-items flex flex-wrap text-white sm:p-16 sm:px-24 p-10 gap-10 justify-between">
        <div class="work">
          <p class="sm:text-2xl text-xl py-2">Why Don't You see my some</p>
          <Link
            to="/work"
            class="sm:text-6xl text-4xl  font-extrabold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-500 to-fuchsia-500"
          >
            WORK
          </Link>
        </div>
        <div class="aboutme">
          <p class="sm:text-2xl text-xl py-2">Want to learn more</p>
          <Link
            to="/about"
            class=" sm:text-6xl text-4xl font-extrabold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-500 to-fuchsia-500"
          >
            ABOUT ME
          </Link>
        </div>
        <div class="hello">
          <p class="sm:text-2xl text-xl py-2">How about we say</p>
          <Link
            to="/hello"
            class="sm:text-6xl text-4xl  font-extrabold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-500 to-fuchsia-500"
          >
            HELLO
          </Link>
        </div>
      </div>
    </footer>
  );
};
