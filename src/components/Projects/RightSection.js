import React from 'react'

const RightSection = ({ headLine, collection }) => {

    return (
        <>
            <div class="tailwind text-right">
                <h2 class="text-4xl sm:text-5xl cursor-auto font-bold py-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-500">
                    {headLine}
                </h2>
                <div class="flex">
                    <div class="left w-1/2"></div>
                    <div class="right w-1/2">
                        <div class="text-2xl grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
                            {
                                collection?.map((item) => {
                                    return (
                                        <ul class="hover:text-brightgreen">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {item.name}
                                            </a>{" "}
                                        </ul>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default RightSection