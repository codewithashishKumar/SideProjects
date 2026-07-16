import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const divStyles = {
        textAlign: 'center',
        padding: '20px',
        marginTop: '20px',
        flexDirection: "column",
        display: 'flex',
    }
    const Incr = () => {
        setCount(count + 1);
        setCount(count + 1);
    }
    const funCount = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    return (
        <div style={divStyles}>
            <p>hello</p>
            <p>Counter: {count}</p>
            <button onClick={Incr}>Increament (using values)</button>
            <button onClick={funCount}>Increament (using function)</button>
        </div>
    )
}



export default Counter;