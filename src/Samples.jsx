import React from 'react'

const Samples = () => {
    const name = 'Matth';
    const x = 10, y = 10;
    const arr = ['val1', 'val2', 'val3'];
    const loggedIn = true;
    const hasVal = true;
    const varStyle = {
        color: 'blue',
        fontSize: '1.1em'
    };
    return (
        <div className='text-2xl'>
            App: Hello {name}
            <p>
                Test {x}+{y}={x+y}
            </p>
            <ul>
                {arr.map((val, index) => (
                    <li key={index}>{val}</li>
                ))}
            </ul>
            {/* Conditional */}
            {loggedIn ? <h1>Member</h1> : <h1>Guest</h1>}
            {hasVal && <h2>Has Value</h2>}
            <p style={{
                color: 'red',
                fontWeight: 'bold'
            }}>
                Style inline
            </p>
            <p style={varStyle}>
                Style variable
            </p>
        </div>
    )
}

export default Samples
