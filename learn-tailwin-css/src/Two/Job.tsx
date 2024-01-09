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
      className={`flex h-28 w-28 flex-col items-center justify-center rounded-lg border border-rose-100 ${bgColor}`}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default Job;
