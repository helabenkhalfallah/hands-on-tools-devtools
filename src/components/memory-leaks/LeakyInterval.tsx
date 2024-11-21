import React, { useEffect, useState } from 'react';

const LeakyInterval: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        // eslint-disable-next-line
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const intervalId = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        // No cleanup function: the interval continues even if the component unmounts

        // FIX: Add a cleanup function to clear the interval
        /*
            return () => {
                clearInterval(intervalId); // Cleanup
            };
         */
    }, []);

    return <div>Count: {count}</div>;
};

export default LeakyInterval;
