// This one is closer to a real React interview question.
// Create:
// App
// ├── CounterDisplay
// └── CounterButtons
// Requirements:
// App stores:
// const [count, setCount] = useState(0);
// CounterDisplay shows:
// Count: 0
// using props.
// CounterButtons shows:
// <button>Increase</button>
// CounterButtons should receive setCount as a prop.

import { useState } from "react";

function LiftStates() {
    const [count, setCount] = useState(0);
    return (
        <>
            <CounterDisplay count={count} />
            <CounterButtons setCount={setCount} />
        </>
    )
}

function CounterDisplay(props) {
    return (
        <p>{props.count}</p>
    )
}

function CounterButtons(props) {
    return (
        <>
            <button onClick={() => { props.setCount(prev => prev + 1) }} > Increase</button >
            <button onClick={() => {
                props.setCount(
                    prev => {
                        if (prev > 0) {
                            return prev - 1;
                        }
                        return prev;
                    }

                )
            }} > Decrease</button >
        </>
    )
}

export default LiftStates;