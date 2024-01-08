import React from "react";
import { ReactNode } from "react";

interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

const Job: React.FC<JobProps> = ({ title, icon, bgClass: bgColor }) => {
  return (
    <div
      className={`w-28 h-28 flex flex-col justify-center border border-rose-100 rounded-lg items-center ${bgColor}`}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default Job;
