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
    <div className="container-header quicksand-bold">
      <h1 className="date">{dateHTML}</h1>
      <p className="day">{dayHTML}</p>
    </div>
  );
}
