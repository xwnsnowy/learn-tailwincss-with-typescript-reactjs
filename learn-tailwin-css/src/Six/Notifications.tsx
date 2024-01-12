import { useState } from "react";

const Notifications = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="min-w-[40rem]">
      <div className="text-right">
        <button
          className="rounded-full bg-black p-4 text-white"
          title="notifications"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
            />
          </svg>
        </button>
      </div>

      <div
        className={`mt-6 w-full rounded-2xl bg-white p-10 text-left opacity-0 shadow-sm transition-all duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="font-['Poppins'] text-xl font-semibold text-slate-900">
          You have 1 new message
        </h1>
        <div className="mt-4 flex gap-6 ">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-pink-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-['Poppins'] font-bold">Feb 22</h2>
            <p className="font-['Poppins'] text-lg font-normal">
              If you like what we do, please tell your friends and share.
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-2">
          <button
            className="flex rounded-full border-2 border-cyan-600 px-3 py-2 text-blue-900"
            title="twitter"
          >
            <svg
              className="h-[24px] w-[24px] pr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
              />
            </svg>
            Twitter
          </button>
          <button
            className="flex rounded-full border-2 border-cyan-600 px-3 py-2 text-blue-900"
            title="facebook"
          >
            <svg
              className="h-[24px] w-[24px] pr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
