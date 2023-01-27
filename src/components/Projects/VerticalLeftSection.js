import React from 'react'

const VerticalLeftSection = ({ heading,collection }) => {
    
    return (
        <>
            <h2 class="text-4xl sm:text-5xl  font-bold py-10">
                {heading}
            </h2>
            <div class="text-2xl grid grid-cols-1 ">
                {
                    collection?.map((item) => {
                        return (
                            <ul class="hover:text-brightgreen cursor-pointer">
                                <a 
                                href={item.websiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    {item.websiteName}
                                </a>

                            </ul>

                        )
                })}
                
            </div>
        </>
    )
}

export default VerticalLeftSection