import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  const footerLinks = [
    {
      title: "Why Don't You see my some",
      link: '/work',
      linkText: 'WORK',
    },
    {
      title: "Want to learn more",
      link: '/about',
      linkText: "ABOUT ME",
    },
    {
      title: "How about we say",
      link: '/hello',
      linkText: "HELLO",
    }

  ]
  return (
    <footer>
      <div class=" bg-myblack footer-items flex flex-wrap text-white sm:p-16 sm:px-24 p-10 gap-10 justify-between">

        {footerLinks?.map((link) => {
          return (
            <div class="footer-item">
              <p class="sm:text-2xl text-xl py-2">{link.title}</p>
              <Link
                to={link.link}
                class="sm:text-6xl text-4xl  font-extrabold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-500 to-fuchsia-500"
              >
                {link.linkText}
              </Link>
            </div>
          )
        })}
      </div>
    </footer>
  )
}