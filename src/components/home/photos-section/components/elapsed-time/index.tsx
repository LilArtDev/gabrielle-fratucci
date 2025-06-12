import { motion  } from "framer-motion";
import { useEffect, useState } from "react";

const START_DATE = new Date("2025-02-23T14:35:00");

const LABELS: Record<string, string> = {
  years: "Anos",
  months: "Meses",
  days: "Dias",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Secs",
};

function getTimeDiff(from: Date, to: Date) {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  let hours = to.getHours() - from.getHours();
  let minutes = to.getMinutes() - from.getMinutes();
  let seconds = to.getSeconds() - from.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    // Get days in previous month
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days, hours, minutes, seconds };
}

function useElapsedTime(startDate: Date) {
  const [elapsed, setElapsed] = useState(() =>
    getTimeDiff(startDate, new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(getTimeDiff(startDate, new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return elapsed;
}

export function ElapsedTimer() {
  const time = useElapsedTime(START_DATE);

  return (
    <div className="mt-10 mb-10 px-5 text-xl font-bold text-white grid grid-cols-3 gap-10 w-[80%] mx-auto">
      {["years", "months", "days", "hours", "minutes", "seconds"].map(
        (key: string, index: number) => (
          <motion.div
            key={key}
            animate={{ y: [0, -2], scale: [1, 1.01], rotate: [0, 5] }}
            transition={{
              duration: 10,
              type: "spring",
              stiffness: 100,
              repeat: Infinity,
              repeatType: "mirror",
              delay: index * 0.8,
            }}
            className="flex flex-col items-center w-[60px] bg-[#9e3d56] px-3 py-2  rounded-lg"
          >
            <span>{time[key as keyof typeof time]}</span>{" "}
            <span className="text-sm font-normal">{LABELS[key]}</span>
          </motion.div>
        )
      )}
    </div>
  );
}
