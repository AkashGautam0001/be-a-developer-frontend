import React, { useEffect, useState } from "react";

const Countdown = ({ scheduledAt }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!scheduledAt) return;

    const targetDate = new Date(scheduledAt);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [scheduledAt]);

   // 📅 Format scheduled date nicely
  const formattedDate = scheduledAt
    ? new Date(scheduledAt).toLocaleString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <>
    <div className="mb-4 text-center">
      {/* Scheduled Date */}
      {scheduledAt && (
        <p className="text-white/80 text-sm mb-5">
          Webinar scheduled on{" "}
          <span className="font-semibold text-yellow-200">
            {formattedDate}
          </span>
        </p>
      )}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="text-center bg-white/15 border border-white/30 rounded-xl p-3 backdrop-blur-sm"
        >
          <span className="block text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="text-xs text-white/80 uppercase tracking-widest">
            {unit}
          </span>
        </div>
      ))}
    </div>
   </div>
    </> 
  );
};

export default Countdown;
