import React from 'react'

const VerticalRightSection = ({heading,collection}) => {
   
  return (
    <div class="tailwind text-right">
            <h2 class="text-4xl sm:text-5xl  font-bold py-10 ">{heading}</h2>
            <div class="flex">
              <div class="left w-1/2"></div>
              <div class="right w-1/2">
                <div class="text-2xl grid grid-cols-1 ">
                    {
                        collection?.map((item) => {
                            return (
                                <ul class="hover:text-brightgreen cursor-pointer">
                                    {item.name}
                                </ul>
                            )})
                          
                    }
                  
                </div>
              </div>
            </div>
          </div>
  )
}

export default VerticalRightSection