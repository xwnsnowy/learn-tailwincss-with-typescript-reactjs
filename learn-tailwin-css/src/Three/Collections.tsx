const TAGS: string[] = ["Profile", "New York", "Relax", "Person", "Fashion"];

const Collections = () => {
  return (
    <div className="w-11/12 rounded-2xl bg-gray-100 p-16 shadow-lg">
      <h1 className="font-['Merriweather'] text-3xl font-bold text-[#0E0E38]">
        Popular Collections
      </h1>
      <div className="mt-6 space-x-2">
        {TAGS.map((tag: string) => (
          <a
            id={tag}
            className=" mb-2 inline-block cursor-pointer rounded-lg border border-red-200 bg-white px-4 py-2 transition duration-300 hover:bg-blue-400 hover:text-white"
          >
            {tag}
          </a>
        ))}
      </div>
      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-1 xl:grid-cols-3">
        <div className=" rounded-xl bg-white p-6">
          <img
            src="https://placewaifu.com/image/200"
            className="aspect-video h-auto w-full"
            alt=""
          />
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className=" rounded-xl bg-white">
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video h-auto w-full"
                alt=""
              />
            </div>
            <div className=" rounded-xl bg-white">
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video h-auto w-full"
                alt=""
              />
            </div>
            <div className=" rounded-xl bg-white">
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video h-auto w-full"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <span className="grow font-['Poppins'] text-2xl font-medium text-slate-800">
              People
            </span>
            <span className="text-medium flex items-center font-['Poppins'] text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </span>
          </div>
        </div>
        <div className=" rounded-xl bg-white p-6">
          <img
            src="https://placewaifu.com/image/200"
            className="aspect-video h-auto w-full"
            alt=""
          />
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className=" rounded-xl bg-white">
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video h-auto w-full"
                alt=""
              />
            </div>
            <div className=" rounded-xl bg-white">
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video h-auto w-full"
                alt=""
              />
            </div>
            <div className=" rounded-xl bg-white">
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video h-auto w-full"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <span className="grow font-['Poppins'] text-2xl font-medium text-slate-800">
              People
            </span>
            <span className="text-medium flex items-center font-['Poppins'] text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </span>
          </div>
        </div>
        <div className=" rounded-xl bg-white p-6">
          <img
            src="https://placewaifu.com/image/200"
            className="aspect-video h-auto w-full"
            alt=""
          />
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className=" rounded-xl bg-white">
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video h-auto w-full"
                alt=""
              />
            </div>
            <div className=" rounded-xl bg-white">
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video h-auto w-full"
                alt=""
              />
            </div>
            <div className=" rounded-xl bg-white">
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video h-auto w-full"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <span className="grow font-['Poppins'] text-2xl font-medium text-slate-800">
              People
            </span>
            <span className="text-medium flex items-center font-['Poppins'] text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
