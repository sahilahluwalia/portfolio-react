import React from 'react'

const LinkToProfessionalSite = ({websiteName,websiteLink,text}) => {
  return (
    
        <p class="text-4xl py-16">
            {text} {" "}
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              class="font-extrabold hover:text-brightgreen"
            >
              {websiteName}
            </a>
          </p>
    
  )
}

export default LinkToProfessionalSite