import React from 'react'

const SocialLinks = ({ links }) => {

  return (
    <>
      <div class="contacts py-10">
        <div class="text-2xl grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 sm:w-3/4">
          {
            links?.map((link) => {
              return (
                <ul class="hover:text-brightgreen">
                  <a
                    href={link.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.websiteName}
                  </a>
                </ul>

              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default SocialLinks