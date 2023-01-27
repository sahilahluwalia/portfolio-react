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
    text: "Check my code on"
  }
  const heroSection = {
    heading: "What do I do?",
    masterText: "I am a programmer by trade, but in reality, I am a Jedi Knight of code, using the force of JavaScript and Python to create powerful and efficient web applications that run like a well-oiled machine. I spend my days dueling with bugs, debugging like a pro, and making computers do my bidding."
  }
  const reactCollection = [
    {
      name: "Image Monster",
      link: "https://sahil-frontend-dobby.vercel.app/"
    }
    ,
    {
      name: "freeCodeCamp",
      link: "https://freecodecampfrontend.vercel.app/"
    },
    {
      name: "Estatery",
      link: "https://renunion-assignment.netlify.app/"
    },
    {
      name: "Portfolio",
      link: "https://iamsahilahluwalia.in/"
    },
    {
      name: "Todo",
      link: "https://verysimpletodo.netlify.app/"
    }
  ]
  const tailwindCollection = [
    {
      name: "Shopify India",
      link: "https://shopifyindia.netlify.app/"
    },
    {
      name: "Paytm",
      link: "https://paytm-homepage.netlify.app/"
    },
    {
      name: "Rode",
      link: "https://rode-homepage.netlify.app/"
    }
  ]
  const htmlCollection = [
    {
      name: "Designer",
      link: "https://product-design-landingpage-p15.netlify.app/"
    },
    {
      name: "Dance",
      link: "https://dance-homepage-p14.netlify.app/"
    },
    {
      name: "Business",
      link: "https://business-landingpage-p12.netlify.app/"
    },
    {
      name: "Hosting",
      link: "https://hosting-landingpage-p11.netlify.app/"
    },
    {
      name: "Developer",
      link: "https://developer-landingpage-p9.netlify.app/"
    },
    {
      name: "Headphone",
      link: "https://product-homepage-p7.netlify.app/"
    },
    {
      name: 'Streetstyle',
      link: "https://street-style-p1.netlify.app/"
    }

  ]


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
            headLine={"Recent React Works"}
            collection={reactCollection}
          />
          < RightSection
            headLine={"Recent Tailwind Replicas"}
            collection={tailwindCollection}
          />
          <LeftSection
            headLine={"Recent HTML/CSS Works"}
            collection={htmlCollection}
          />
        </div>
      </Layout>
    </>
  );
};
