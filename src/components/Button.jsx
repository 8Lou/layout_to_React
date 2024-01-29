import React from 'react';

const Button = (props) => {
    return (
        <button className={props.className} style={{
            backgroundColor: '#151515', padding: '20px', color: 'white', maxWidth: '260px', width: '100%', fontSize: '25px',
            fontWeight: '500'
        }}>
            {props.children}
        </button>
    );
}

export default Button;