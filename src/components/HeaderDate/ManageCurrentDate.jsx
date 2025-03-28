import { useState, useEffect } from "react";

export default function ManageCurrentDate() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function currentDate() {
    let currentDate = new Date(),
      hour = currentDate.getHours(),
      minutes = currentDate.getMinutes(),
      seconds = currentDate.getSeconds(),
      day = currentDate.toLocaleDateString("en-US", { weekday: "long" });

    return {
      dateHTML: `${hour} : ${
        minutes < 10 ? (minutes = `0${minutes}`) : minutes
      } : ${seconds < 10 ? (seconds = `0${seconds}`) : seconds}`,
      dayHTML: day,
    };
  }

  const { dateHTML, dayHTML } = currentDate();

  return (
    <div className="w-full md:h-3/10 flex flex-col md:justify-around items-center quicksand-bold h-1/4 justify-evenly">
      <h1 className="tracking-[3px] md:text-[5vmin] text-[35px] font-bold">
        {dateHTML}
      </h1>
      <p className="md:text-[5vmin] text-[20px] font-medium">{dayHTML}</p>
    </div>
  );
}
