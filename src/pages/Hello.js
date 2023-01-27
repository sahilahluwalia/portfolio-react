import React from "react";
import Layout from "../components/Layout/Layout";
import SocialLinks from "../components/SocialLinks";
export const Hello = () => {
  const sociallinks=[
    {
        websiteName:"Email",
        websiteLink:"mailto:iamsahilahluwalia@gmail.com"
    },
    {
        websiteName:"LinkedIn",
        websiteLink:"https://www.linkedin.com/in/sahil-ahluwalia-630283187/"
    },
    {
        websiteName:"GitHub",
        websiteLink:"https://github.com/sahilahluwalia"
    },
    {
        websiteName:"Instagram",
        websiteLink:"https://www.instagram.com/iamsahilahluwalia/"
    },
    {
        websiteName:"Hashnode",
        websiteLink:"https://sahilahluwalia.hashnode.dev/"
    },
    {
        websiteName:"Twitter",
        websiteLink: "https://twitter.com/sahealji"
    }
]
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
              hear from you. Let's make the internet a little more magical together. Oh and I also love a good pun, so feel free to throw one my way!
              or join me in a round of Counter-Strike.
              Feel free to{" "}
              <span class="hover:text-brightgreen font-bold">
                <a href="mailto:iamsahilahluwalia@gmail.com">email me</a>
              </span>
              , or say hi below.
            </p>
          </div>
        <SocialLinks 
        links={sociallinks}
        />
        </div>
      </Layout>
    </>
  );
};
