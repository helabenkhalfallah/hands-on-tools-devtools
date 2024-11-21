import React, { useEffect, useState } from 'react';

const LeakyListener: React.FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // No cleanup function: the event listener stays active after unmount

        // FIX: Add cleanup function
        /*
            return () => {
                window.removeEventListener("resize", handleResize); // Cleanup
            };
         */
    }, []);

    return <div>Window Width: {width}px</div>;
};

export default LeakyListener;
