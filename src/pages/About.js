import React from "react";
import Layout from "../components/Layout/Layout";
import LinkToProfessionalSite from "../components/LinkToProfessionalSite";
import VerticalRightSection from "../components/Projects/VerticalRightSection";
import VerticalLeftSection from "../components/Projects/VerticalLeftSection";
import Copied from "../components/Copied";
import SmallHero from "../components/Home/SmallHero";
export const About = () => {
  const heroSection = {
    heading: "About Me",
    masterText:"Hello, I'm Sahil, a web developer who can make a computer do backflips (figuratively speaking, of course) I specialize in creating beautiful and intuitive web applications that deliver seamless user experiences. Let's make something amazing together! :D"
  }

  const abilitiesCollection = [{
    name: "Web Design",
  },
  {
    name: "Web Development",
  },
  {
    name: "Research",
  },
  {
    name: "Googling",
  }
  ]
  const socialLinks=[{
    websiteName: "Email",
    websiteLink: "mailto:iamsahilahluwalia@gmail.com",
},
{
    websiteName: "LinkedIn",
    websiteLink: "https://www.linkedin.com/in/sahil-ahluwalia-630283187/",

},
{
    websiteName: "GitHub",
    websiteLink: "https://github.com/sahilahluwalia",
}, {
    websiteName: "Instagram",
    websiteLink: "https://www.instagram.com/iamsahilahluwalia/",

}, {
    websiteName: "Hashnode",
    websiteLink: "https://sahilahluwalia.hashnode.dev/",
}, {
    websiteName: "Twitter",
    websiteLink: "https://twitter.com/sahealji",
}
]



  return (
    <>
      <Layout>
        <div class="bg-myblack text text-white sm:p-12  sm:px-24 px-10  p-10 ">
         
            <SmallHero 
            heading={heroSection.heading}
            masterText={heroSection.masterText} />
           
        
          <LinkToProfessionalSite
            text={"Check my code on"}
            websiteLink={"https://github.com/sahilahluwalia"}
            websiteName={"GitHub"}
          />


          <VerticalRightSection
            heading={"My Abilities"}
            collection={abilitiesCollection}
          />

          <VerticalLeftSection 
           heading={"I Don't Bite, Reach me on"}
           collection={socialLinks}
          />

      <Copied />         
        </div>
      </Layout>
    </>
  );
};
