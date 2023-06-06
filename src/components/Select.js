import React from 'react'

const Select = (props) => {
    return (
        <select {...props.prefilledData}  >
            {props.children}
        </select>
    )
}
export default Select