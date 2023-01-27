import React from 'react'

const SmallHero = ({ masterText, heading }) => {
    return (

        <div class="whatdoido">
            <h2 class="text-4xl sm:text-5xl  font-bold py-10 ">
                {heading}
            </h2>

            <p class="text-2xl sm:text-4xl sm:leading-normal pb-20">
                {masterText}
            </p>
        </div>
    )
}

export default SmallHero