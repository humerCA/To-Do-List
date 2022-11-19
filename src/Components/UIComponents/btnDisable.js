import React from 'react'

const btnDisable = () => {
    if(!props.active) 
    return <button className='disabled'></button>;
    return <button className='custom-button'>{props.link}</button>;
};


export default btnDisable