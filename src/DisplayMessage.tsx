import React from 'react'

interface DisplayMessageProps {
  message: string;
}
const DisplayMessage: React.FC<DisplayMessageProps> = ({ message }) => {
  return (
    <div>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  )
}

export default DisplayMessage
