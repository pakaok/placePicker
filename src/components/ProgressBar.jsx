import { useState,useEffect } from "react";
export default function ProgressBar({ time }) {
  const [progressBar, setProgressBar] = useState(time);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgressBar((prevValue) => prevValue - 10);
    }, 10);

    return () => clearInterval(progressTimer);
  }, []);

  return <progress value={progressBar} max={time} />;
}
