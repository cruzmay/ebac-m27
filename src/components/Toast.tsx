import React from 'react'

interface ToastProps {
    message: boolean
}

export const Toast = ({message}: ToastProps) => {
const textMessage = "a new user has been added"
  return (
    <div className={`toast ${ message && "fade-in" }`}>
        <p>{textMessage}</p>
    </div>
  )
}
