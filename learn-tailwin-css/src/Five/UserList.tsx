import { useState } from "react";

interface User {
  name: string;
  place: string;
  avatar: string;
  tags: string[];
}

const users: User[] = [
  {
    name: "Lelah Nichols",
    place: "Troy, MI",
    avatar: "https://example.com/avatar/oliviadavis.png",
    tags: ["clothes", "sterm"],
  },
  {
    name: "Jesus Weiss",
    place: "Fort Worth, TX",
    avatar: "https://example.com/avatar/oliviadavis.png",
    tags: ["headset", "gadget", "speed", "winter"],
  },
  {
    name: "Annie Rice",
    place: "Austin, TX",
    avatar: "https://example.com/avatar/oliviadavis.png",
    tags: ["road", "mountain", "trip", "earth", "nature"],
  },
  {
    name: "Robert Brower",
    place: "Cincinnati, OH",
    avatar: "https://example.com/avatar/oliviadavis.png",
    tags: ["Maintenance", "gears", "frames", "repair"],
  },
  {
    name: "Amy Campbell",
    place: "Warrior, AL",
    avatar: "https://example.com/avatar/oliviadavis.png",
    tags: ["music", "disks"],
  },
  {
    name: "Anthony S. Morin",
    place: "Lyndhurst, NJ",
    avatar: "https://example.com/avatar/oliviadavis.png",
    tags: ["vintage", "electric"],
  },
];

const UserList = () => {
  const [query, setQuery] = useState("");
  
  const TAGS: string[] = [
    "Reputation",
    "New users",
    "Voters",
    "Editors",
    "Moderators",
  ];

  const filterUsers: User[] =
    query.length > 0
      ? users.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase()),
        )
      : users;

  return (
    <div className="min-w-[40rem] rounded-md bg-white p-16 shadow-md max-md:p-12">
      <div className="">
        <h1 className="text-3xl font-bold">Users</h1>
        <div className="mt-6 flex justify-between max-lg:flex-row max-md:flex-col">
          <div className="relative flex w-[20rem] rounded-md border-2 border-gray-300">
            <input
              className="w-full py-4 pl-11 pr-1"
              type="text"
              name=""
              id=""
              onChange={(e) => setQuery(e.target.value)}
              title="search"
              placeholder="Search for a part time job"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="flex items-center space-x-4 max-md:mt-4">
            {TAGS.map((tag) => (
              <a
                href=""
                className="inline-block cursor-pointer text-nowrap rounded-lg bg-white px-4 py-3 hover:bg-indigo-400 hover:text-white"
                id={tag}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {filterUsers.map((user, index) => (
          <div
            className="flex cursor-pointer gap-x-4 rounded-2xl border-[1px] border-white  p-8 hover:border-indigo-500 hover:shadow-lg"
            key={index}
          >
            <img
              src={`https://source.unsplash.com/random/${user.name}`}
              className="h-24 w-24 rounded-full"
              alt=""
            />
            <div>
              <h2 className="font-['Poppins'] font-bold">{user.name}</h2>
              <p>{user.place}</p>
              <div className="mt-4 space-x-2">
                {user.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full border-[1px] border-slate-400 px-1 font-['Poppins'] text-xs text-indigo-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
