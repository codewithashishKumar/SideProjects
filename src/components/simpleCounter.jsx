import { useState } from "react";
import '../styles/simpleCounter.css'

function SimpleCounter() {
    const [value, setValue] = useState(1)

    return (
        <section className="counterApp">
            <p>current value {value}</p>
            <div>
                <button className="redBTN" onClick={() => {
                    if (value > 0) {
                        setValue(value - 1)
                    }
                }}>Decrease</button>
                <button className="greenBTN" onClick={() => setValue(value + 1)}>Increase</button>
            </div>
        </section>
    )
}

export default SimpleCounter;