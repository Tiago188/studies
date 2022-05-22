import React, { useState } from "react";

export default function Counter(): JSX.Element {
    const [countValue, setCountValue] = useState(0);

    function incrementCounter(): void {
        setCountValue(countValue + 1);
    }

    return (
        <div>
            <span>{countValue}</span>
            <button onClick={incrementCounter}>Add</button>
        </div>
    );
}