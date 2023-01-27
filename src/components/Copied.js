import React from 'react'

const Copied = () => {
    
  return (
    
    <div class="tailwind text-right">
    <div class="flex">
      <div class="left w-1/2"></div>
      <div class="right w-1/2 py-10">
        <p class="text-xs">
          This website was developed by hand and computer in Bangalore
          by Sahil Ahluwalia. Inspired by{" "}
          <strong class="hover:text-brightgreen cursor-pointer">
            <a
              href="https://zcole.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zach Cole
            </a>
          </strong>
          , the OG. Thanks for visiting.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Copied