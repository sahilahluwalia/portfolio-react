import React from 'react'
import BlueHighlight from './BlueHighlight'
const Hero = () => {
    return (
        <>
            <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium lg:leading-normal cursor-pointer">
                {/* I am the <BlueHighlight text={"Web Developer"}/> that turns code into magic, specializing in creating complex JavaScript web applications that will leave your users spellbound. When I'm not coding, you can find me trying to finish novels at a glacial pace, but don't worry, I move faster with my code. I'm a versatile developer who can work on both front-end and back-end with a strong background in many technologies. Let's create something amazing together! */}
                I am the <BlueHighlight text={"Full Stack Developer"} />  who turns code into magic, specializing in complex <BlueHighlight text={"JavaScript"} /> web applications that will leave your users spellbound. <br />
                Other times, you can find me trying to finish novels extremely slowly.
            </p>
        </>
    )
}

export default Hero