import React from 'react'

const Input = (props) => {
  return (
    <div className="input">
        <label htmlFor={props.id}>{props.label}</label>
        <input 
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            checked={props.checked}
            className={props.className}
        />
    </div>
  )
}

export default Input;