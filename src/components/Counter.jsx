import React, { useState } from 'react'

import '../styles/Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className='counter'>
            <span className='count'>{count}</span>
            <div className='buttons'>
                <button className='counter-btn' onClick={increment}>Increment</button>
                <button className='counter-btn' onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter
