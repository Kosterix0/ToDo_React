export default function ManageCurrentDate() {
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
      dayHTML: `${day}`,
    };
  }

  return (
    <div className="container-header quicksand-bold">
      <h1 className="date">{currentDate().dateHTML}</h1>
      <p className="day">{currentDate().dayHTML}</p>
    </div>
  );
}
