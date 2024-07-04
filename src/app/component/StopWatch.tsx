import React, { useState } from "react";

const StopWatch = () => {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
    const [status, setStatus] = useState<NodeJS.Timeout | undefined>();
    let updHr = time.hr;
    let updMin = time.min;
    let updSec = time.sec;

    const start = () => {
        myfun();
        setStatus(setInterval(myfun, 1000));
    };
    //   const stop = () => {
    //     myfun();
    //     clearInterval(status);
    //   };

    const myfun = () => {
        if (updSec === 60) {
            updSec = 0;
            updMin++;
        }
        if (updMin === 60) {
            updMin = 0;
            updHr++;
        }
        updSec++;
        return setTime({ hr: updHr, min: updMin, sec: updSec });
    };

    return (
        <div>
            <div className="lg:w-[800px] rounded-[40px] bg1 mx-auto p-10 m-10">
                <h1 className="text-3xl font-semibold">StopWatch</h1>
                <div>
                    <h1>{`${time.hr} hour : ${time.min} min : ${time.sec} sec`}</h1>
                </div>
                {/* <p className="pt-10 text-lg font-medium">Current time is : {time}</p> */}

                <div className="flex gap-6 py-4">
                    <button
                        type="button"
                        className="bg-zinc-800 hover:bg-zinc-700/40 px-4 py-2 rounded-md font-semibold"
                        onClick={start}
                    >
                        {" "}
                        Start
                    </button>
                    <button
                        type="button"
                        className="bg-zinc-800 hover:bg-zinc-700/40 px-4 py-2 rounded-md font-semibold"
                        onClick={stop}
                    >
                        {" "}
                        Stop
                    </button>
                    <button type="button" className="bg-zinc-800 hover:bg-zinc-700/40 px-4 py-2 rounded-md font-semibold">
                        {" "}
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;