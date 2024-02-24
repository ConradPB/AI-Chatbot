import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function TypingAnim() {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed once, initially
      'Chat with your own AI 🤖',
      1000,
      'Build with OpenAI 💻',
      2000,
      'Customize your own ChatGPT ',
      1500,
      'Information at your fingertips ℹ',
      1000,
    ]}
    speed={50}
    style={{ 
        fontSize: '50px', 
        color: 'white', 
        display: 'inline-block', 
        textShadow: '1px, 1px, 20px, #000' 
     }}
    repeat={Infinity}
  />
  )
}

export default TypingAnim
