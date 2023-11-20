import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    
    const [timerStarted, setTimerStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);

    

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimeExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer is inactive'}
                </p>
            </section>
        </>
    );
}