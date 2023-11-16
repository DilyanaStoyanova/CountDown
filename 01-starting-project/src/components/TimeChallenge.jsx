import { useState } from "react";

export default function TimeChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);

    function handleStart() {
        setTimeout(() => {
            setTimeExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timeExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                { timerStarted ? 'Time is running...' : 'Timer is inactive'}
            </p>
        </section>
    );
}