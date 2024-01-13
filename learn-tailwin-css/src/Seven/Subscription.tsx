import { ReactNode } from "react";

interface Choice {
  logo: ReactNode;
  title: string;
  subtitle: string;
  shadowClass: string;
  price: number;
}

const choices: Choice[] = [
  {
    title: "Ice Mobile 10GB",
    subtitle: "Up to 100Mbit/s",
    price: 299,
    shadowClass: "shadow-[-1.5rem_-1.5rem_0px_0px_#FFFBEC]",
    logo: (
      <svg
        id="logo-89"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="ccustom"
          d="M39.9449 21.4998H32.8003C26.5594 21.4998 21.5003 26.559 21.5003 32.7998V39.9444C31.3502 39.214 39.2145 31.3497 39.9449 21.4998Z"
          fill="#775732"
        ></path>
        <path
          className="ccustom"
          d="M18.5003 39.9444V32.7998C18.5003 26.559 13.4411 21.4998 7.20026 21.4998H0.0556641C0.785998 31.3497 8.65036 39.214 18.5003 39.9444Z"
          fill="#775732"
        ></path>
        <path
          className="ccustom"
          d="M39.9449 18.4998C39.2145 8.64987 31.3502 0.78551 21.5003 0.0551758V7.19977C21.5003 13.4406 26.5594 18.4998 32.8003 18.4998H39.9449Z"
          fill="#775732"
        ></path>
        <path
          className="ccustom"
          d="M18.5003 0.0551758C8.65036 0.78551 0.785998 8.64987 0.0556641 18.4998H7.20026C13.4411 18.4998 18.5003 13.4406 18.5003 7.19977V0.0551758Z"
          fill="#775732"
        ></path>
        <path
          className="ccustom"
          d="M13.583 19.9998C16.3555 18.6145 18.615 16.355 20.0002 13.5825C21.3855 16.355 23.6449 18.6145 26.4175 19.9998C23.6449 21.385 21.3855 23.6445 20.0002 26.417C18.615 23.6445 16.3555 21.385 13.583 19.9998Z"
          fill="#CA9352"
        ></path>
      </svg>
    ),
  },
  {
    title: "Telia Mobil 15GB",
    subtitle: "Unlimited calls, SMS and MMS",
    price: 953,
    shadowClass: "shadow-[-1.5rem_-1.5rem_0px_0px_#F9ECFF]",
    logo: (
      <svg
        id="logo-88"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="ccustom"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255L22.2222 32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067L22.2222 9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z"
          fill="#FF630B"
        ></path>
      </svg>
    ),
  },
  {
    title: "Telenor Next Fast",
    subtitle: "Up to 100Mbit/s",
    price: 1028,
    shadowClass: "shadow-[-1.5rem_-1.5rem_0px_0px_#aeaeae]",
    logo: (
      <svg
        id="logo-89"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="ccustom"
          d="M39.9449 21.4998H32.8003C26.5594 21.4998 21.5003 26.559 21.5003 32.7998V39.9444C31.3502 39.214 39.2145 31.3497 39.9449 21.4998Z"
          fill="#775732"
        ></path>
        <path
          className="ccustom"
          d="M18.5003 39.9444V32.7998C18.5003 26.559 13.4411 21.4998 7.20026 21.4998H0.0556641C0.785998 31.3497 8.65036 39.214 18.5003 39.9444Z"
          fill="#775732"
        ></path>
        <path
          className="ccustom"
          d="M39.9449 18.4998C39.2145 8.64987 31.3502 0.78551 21.5003 0.0551758V7.19977C21.5003 13.4406 26.5594 18.4998 32.8003 18.4998H39.9449Z"
          fill="#775732"
        ></path>
        <path
          className="ccustom"
          d="M18.5003 0.0551758C8.65036 0.78551 0.785998 8.64987 0.0556641 18.4998H7.20026C13.4411 18.4998 18.5003 13.4406 18.5003 7.19977V0.0551758Z"
          fill="#775732"
        ></path>
        <path
          className="ccustom"
          d="M13.583 19.9998C16.3555 18.6145 18.615 16.355 20.0002 13.5825C21.3855 16.355 23.6449 18.6145 26.4175 19.9998C23.6449 21.385 21.3855 23.6445 20.0002 26.417C18.615 23.6445 16.3555 21.385 13.583 19.9998Z"
          fill="#CA9352"
        ></path>
      </svg>
    ),
  },
];

const Subscription = () => {
  return (
    <div className="border-1 max-w-[96rem] space-y-14 rounded-3xl border-slate-500	bg-slate-100 p-16 shadow-xl">
      <div className="text-center">
        <h1 className="mx-auto max-w-[36rem] text-balance font-['Merriweather'] text-3xl font-black text-slate-900">
          Get the most out of your mobile with the right subscription
        </h1>
        <p className="mx-auto mt-4 max-w-[38rem] font-['Merriweather']">
          All devices come with free delivery or pickup as standard. See
          information on available shopping options for your location.
        </p>
      </div>
      <div className="mx-auto grid max-w-[58rem] grid-cols-3 gap-10 rounded-xl  max-md:min-w-[38rem] max-md:grid-cols-1">
        {choices.map((choice) => (
          <div
            className={`space-y-4 rounded-lg border-[1px] border-slate-100 bg-white px-6 py-10 ${choice.shadowClass}`}
          >
            {choice.logo}
            <div>
              <h1 className="font-['Poppins'] text-lg font-semibold">
                {choice.title}
              </h1>
              <p>{choice.subtitle}</p>
            </div>
            <div className="flex">
              <h1 className="font-['Poppins'] text-lg font-bold">
                {choice.price}
              </h1>
              <p>/month</p>
            </div>
            <div className="text-center">
              <button
                title="add-subscriptions"
                className="rounded-full border-[1px] border-gray-300 bg-gray-100 px-3 py-2 text-black shadow-[0px_4px_0px_0px_#E7E7FB;]"
              >
                Add subscription
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          title="see-all-subscriptions"
          className="rounded-full border-2 bg-[#171435] px-6 py-4 text-white"
        >
          See all subscriptions
        </button>
      </div>
    </div>
  );
};

export default Subscription;
