import React from 'react'
import '../style/Button.css'

const Button = (props) => {
  return (
    <div className='button'>
        <button onClick={props.callApi}> Click to generate a joke.</button>
    </div>
  )
}

export default Button
