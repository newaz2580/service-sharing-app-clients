import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const ErrorPage = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/Error.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation JSON:", err));
  }, []);

  if (!animationData) {
    return <div>Loading animation...</div>;
  }

  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <Lottie animationData={animationData} />
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But don't worry, you can find plenty of other things on our homepage.
          </p>
          <a
            href="/"
            className="px-8 btn py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
