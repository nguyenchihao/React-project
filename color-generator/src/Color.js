import React from 'react'
import rgbToHex from './convert'
const Color = (props) => {
  const { index, weight, rgb } = props
  const bgc = rgb.join(',')
  const hexColor = rgbToHex(...rgb)
  return (
    <div
      className="color"
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className="weight">
        {weight}%
      </p>
      <p className="hexColor">
        {hexColor}
      </p>
    </div >
  )
}

export default Color
