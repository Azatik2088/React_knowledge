import React, { useEffect, useState } from "react";



const MyComponents = (props) => {
    const [count, setCount] = useState(0);
    // const a = arr[0];
    // const b = arr[1];

    useEffect(() => {
        document.title = `Значение ${count}`;
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Прибавить счетчик
            </button>
            <button onClick={() => setCount(count - 1)}>
                Убавить счетчик
            </button>
        </div>
    );
}

export default MyComponents;