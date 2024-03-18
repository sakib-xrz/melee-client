"use client";

import { calculateTimeRemaining } from "@/common/UtilKit";
import { useState, useEffect } from "react";

function CountdownTimer({ targetDate }) {
  const [countDown, setCountDown] = useState(
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="countdown-timer bg-red-700 text-black w-fit mx-auto p-3 rounded-2xl">
      <span className="text-lg xs:text-xl sm:text-3xl block text-center font-bold tracking-widest">
        {" "}
        NEXT DROP IN:{" "}
      </span>

      <span className="text-2xl xs:text-3xl sm:text-5xl font-black">
        {countDown.days}D :{" "}
      </span>
      <span className="text-2xl xs:text-3xl sm:text-5xl font-black">
        {countDown.hours}H :{" "}
      </span>
      <span className="text-2xl xs:text-3xl sm:text-5xl font-black">
        {countDown.minutes}M :{" "}
      </span>
      <span className="text-2xl xs:text-3xl sm:text-5xl font-black">
        {countDown.seconds}S
      </span>
    </div>
  );
}

export default CountdownTimer;
