import { useState, useEffect } from 'react';

function DigitalClock() {

    const [time, setTime] = useState(
        new Date()
    );

    useEffect(() => {

        const timer = setInterval(() => {

            setTime(new Date());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <div className="text-center">

            <h2>Digital Clock</h2>

            <div className="display-3">

                {time.toLocaleTimeString()}

            </div>

            <p>
                {time.toLocaleDateString()}
            </p>

        </div>

    );

}

export default DigitalClock;