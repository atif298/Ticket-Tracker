import Button from "../Button/Button";
import { useState } from "react";
import "./Counter.scss";

const Counter = () => {

    const [counter, setCounter] =   useState(0);

    const handleDecrement = () => {
        if (counter === 0) {
            return;
        } else {
            setCounter(counter - 1);
        }
    }

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const minusTicketButtonJSX = (
        <div onClick={handleDecrement}>
            <Button buttonText={"-"} isPlus={false} />
        </div>
    )
    
    const plusTicketButtonJSX = (
        <div onClick={handleIncrement}>
            <Button buttonText={"+"} isPlus={true} />
        </div>
    )

    return (
        <div className="counter">
            {plusTicketButtonJSX}
            <p>{counter}</p>
            {minusTicketButtonJSX}
        </div>
    )
}

export default Counter