import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <div class="bg-myblack nav-items sm:p-16 sm:px-24 p-10 gap-10 flex justify-center md:justify-between text-xl md:text-3xl cursor-pointer font-medium text-white flex-wrap ">
        <div class="name hover:text-brightgreen ">
          <Link to="/">
            <ul>Sahil Ahluwalia</ul>
          </Link>
        </div>
        <div class="links flex gap-10 ">
          <Link to="/work">
            <ul class="hover:text-brightgreen">Work</ul>
          </Link>
          <Link to="/about">
            <ul class="hover:text-brightgreen">About</ul>
          </Link>
          <Link to="/hello">
            <ul class="hover:text-brightgreen">Hello</ul>
          </Link>
        </div>
      </div>
    </nav>
  );
};
