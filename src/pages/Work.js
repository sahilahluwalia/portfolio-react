import React from "react";
import Layout from "../components/Layout/Layout";
import LinkToProfessionalSite from "../components/LinkToProfessionalSite";
import LeftSection from "../components/Projects/LeftSection";
import RightSection from "../components/Projects/RightSection";
import SmallHero from "../components/Home/SmallHero";
export const Work = () => {
  const professionalSite = {
    websiteName: "GitHub",
    websiteLink: "https://github.com/sahilahluwalia",
    text: "Check my code on",
  };
  const heroSection = {
    heading: "What do I do?",
    masterText:
      "I am a programmer by trade, but in reality, I am a Jedi Knight of code, using the force of Typescript to create powerful and efficient web applications that run like a well-oiled machine. I spend my days dueling with bugs, debugging like a pro, and making computers do my bidding.",
  };

  const professionalCollection = [
    {
      name: "Workcrew",
      link: "https://workcrew.ai/",
    },
    {
      name: "Mark My Words",
      currentlyBuilding: true,
      // link: "https://markmywords.vercel.app/",
    },
  ];

  const reactCollection = [
    {
      name: "Image Monster",
      link: "https://sahil-frontend-dobby.vercel.app/",
    },
    {
      name: "freeCodeCamp Clone",
      link: "https://freecodecampfrontend.vercel.app/",
    },
    {
      name: "Estatery",
      link: "https://renunion-assignment.netlify.app/",
    },
    {
      name: "This Portfolio",
      link: "https://sahilahluwalia.in/",
    },
    {
      name: "Simple Todo",
      link: "https://verysimpletodo.netlify.app/",
    },
  ];
  const tailwindCollection = [
    {
      name: "Shopify India",
      link: "https://shopifyindia.netlify.app/",
    },
    {
      name: "Paytm",
      link: "https://paytm-homepage.netlify.app/",
    },
    {
      name: "Rode",
      link: "https://rode-homepage.netlify.app/",
    },
  ];
  const htmlCollection = [
    {
      name: "Designer",
      link: "https://product-design-landingpage-p15.netlify.app/",
    },
    {
      name: "Dance",
      link: "https://dance-homepage-p14.netlify.app/",
    },
    {
      name: "Business",
      link: "https://business-landingpage-p12.netlify.app/",
    },
    {
      name: "Hosting",
      link: "https://hosting-landingpage-p11.netlify.app/",
    },
    {
      name: "Developer",
      link: "https://developer-landingpage-p9.netlify.app/",
    },
    {
      name: "Headphone",
      link: "https://product-homepage-p7.netlify.app/",
    },
    {
      name: "Streetstyle",
      link: "https://street-style-p1.netlify.app/",
    },
  ];

  return (
    <>
      <Layout>
        <div class="bg-myblack text text-white sm:p-12  sm:px-24 px-10  p-10 ">
          <SmallHero
            heading={heroSection.heading}
            masterText={heroSection.masterText}
          />

          <LinkToProfessionalSite
            websiteName={professionalSite.websiteName}
            websiteLink={professionalSite.websiteLink}
            text={professionalSite.text}
          />
          <LeftSection
            headLine={"Contributed to codebases professionally"}
            collection={professionalCollection}
          />
          <RightSection
            headLine={"React Projects"}
            collection={reactCollection}
          />
          <LeftSection
            headLine={"Tailwind Replicas"}
            collection={tailwindCollection}
          />
          <RightSection
            headLine={"Vanilla HTML/CSS"}
            collection={htmlCollection}
          />
        </div>
      </Layout>
    </>
  );
};
