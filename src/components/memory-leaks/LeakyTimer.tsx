import React, { useEffect, useState } from 'react';

const LeakyTimer: React.FC = () => {
    const [message, setMessage] = useState<string>('Waiting...');

    useEffect(() => {
        // eslint-disable-next-line
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const timeoutId = setTimeout(() => {
            setMessage('Timeout Finished!');
        }, 5000);

        // No cleanup function: the timeout stays in memory if the component unmounts

        // FIX: Add a cleanup function to clear the timeout
        /*
            return () => {
                clearTimeout(timeoutId); // Cleanup
            };
         */
    }, []);

    return <div>{message}</div>;
};

export default LeakyTimer;
