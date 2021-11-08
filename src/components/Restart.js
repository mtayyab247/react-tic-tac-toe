import React, {useState, useEffect} from 'react';

const Restart = ({selectionCount, handleFinish}) => {

    const[restartBtnVisibility, setRrestartBtnVisibility] = useState("hide");
    useEffect(() => {
        if(selectionCount > 1) {
            setRrestartBtnVisibility("show");
        }
    }, [selectionCount]);

    const handleRestartBtn = () => {
        handleFinish();
        setRrestartBtnVisibility("hide");
    };

    return(
        <div className="restart-wrapper">
            <button onClick={handleRestartBtn} className={restartBtnVisibility + " restart"}>Restart</button>
        </div>
    );
};

export default Restart;