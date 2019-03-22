import React from 'react';

export const MyInput = props => {
    return(
        <div>
            <label>{props.label}</label>
            <input {...props.input} type={props.type} />
        </div>
    )
}
