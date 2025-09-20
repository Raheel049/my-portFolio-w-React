import React from 'react'

const ButtonCmp = ({onClick, title,className}) => {
  return (
    <>
        <div>
        <button onClick={onClick} className={className}>{title || "Button"}</button>
        </div>
    </>
  )
}

export default ButtonCmp;