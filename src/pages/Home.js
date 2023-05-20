import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero";
import LinkToProfessionalSite from "../components/LinkToProfessionalSite";
export const Home = () => {
  const professionalSite = {
    websiteName: "Linkedin",
    websiteLink: "https://www.linkedin.com/in/sahil-ahluwalia-630283187/",
    text: "Connect with me on",
  };
  const heroSection = {
    heading: "About Me",
    masterText:
      "I am the Full Stack Developer  who turns code into magic, specializing in complex Typescript web applications that will leave your users spellbound. Let's build something amazing together and make the internet a little more magical!",
  };
  return (
    <>
      <Layout>
        <div class="bg-myblack text text-white sm:p-12 sm:px-24 px-10  p-10 ">
          <Hero masterText={heroSection.masterText} />
          <LinkToProfessionalSite
            websiteName={professionalSite.websiteName}
            websiteLink={professionalSite.websiteLink}
            text={professionalSite.text}
          />
        </div>
      </Layout>
    </>
  );
};
