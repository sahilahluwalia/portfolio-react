import React from 'react'

const BlueHighlight = ({ text }) => {
  return (
    <>
      <span class="font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-blue-500">
        {text}
      </span>
    </>
  )
}

export default BlueHighlight