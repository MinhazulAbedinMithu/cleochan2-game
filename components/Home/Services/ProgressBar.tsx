"use client";
import React, { useEffect, useState } from "react";
import "./service.css";

const ProgressBar = ({ fillColor, progress }: any) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    // Simulate progress increase over time
    const interval = setInterval(() => {
      setCurrentProgress((prevProgress) =>
        prevProgress < progress ? prevProgress + 10 : progress
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);
  return (
    <div className="w-[160px] h-[137px] relative progress-bar">
      <div
        className={`w-[100px] h-[100px] bg-red-500 absolute top-[50%] `}
      ></div>
    </div>
  );
};

export default ProgressBar;
