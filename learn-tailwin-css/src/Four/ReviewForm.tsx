import { FormEvent, useState } from "react";
import Input from "./Input";
import Review from "./Review";

const ReviewForm = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormSubmitted(true);
  };

  return (
    <div className="w-1/3 rounded-2xl bg-white px-12 py-6 shadow-lg">
      {/* <div className="absolute left-[346px] top-[193px] h-[813px] w-[909px] rounded-[70px] bg-rose-200" /> */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h1 className="font-['Merriweather'] text-2xl font-black text-slate-900">
            Overall Rating
          </h1>
          <div>
            <Review />
          </div>
          <p>Click to rate</p>
        </div>
        <Input
          title="Review Title"
          placeholder="Example: Easy to use"
          type="text"
        />
        <p>Would you recommend this product to a friend?</p>
        <div className="flex gap-4">
          <div>
            <input
              className="mr-2 scale-125 accent-[#121633]"
              type="radio"
              name="radio"
              id="Yes"
              value="yes"
            />
            <label htmlFor="Yes" className="cursor-pointer">
              Yes
            </label>
          </div>
          <div>
            <input
              className="mr-2 scale-125 accent-[#121633] "
              type="radio"
              name="radio"
              id="No"
              value="No"
            />
            <label htmlFor="No" className="cursor-pointer">
              No
            </label>
          </div>
        </div>
        <Input
          title="Product View"
          placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
          type="textarea"
        />
        <div className="flex gap-2">
          <div className="grow">
            <Input title="Nick Name" placeholder="Example: bob27" type="text" />
          </div>
          <div className="grow">
            <Input
              title="Email address (will not be published)"
              placeholder="Example: your@email.com"
              type="text"
            />
          </div>
        </div>
        <div>
          <input
            className="mr-2 scale-125 accent-[#121633] "
            type="checkbox"
            name="checkbox"
            id="ck"
            value="ck"
          />
          <label htmlFor="ck" className="cursor-pointer">
            I accept the terms and conditions
          </label>
        </div>
        <div>
          <p>
            You will be able to receive emails in connection with this review
            (eg if others comment on your review). All emails contain the option
            to unsubscribe. We can use the text and star rating from your review
            in other marketing.
          </p>
        </div>
        <div>
          <button
            className="rounded-md bg-blue-950 p-4 text-base font-medium text-white"
            type="submit"
          >
            Submit product review
          </button>
        </div>
      </form>

      {isFormSubmitted && (
        <div className="mt-4 font-bold text-green-600">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
