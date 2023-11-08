import PricingCards from "@/components/PricingCards";
import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center w-full text-center py-16 px-4 sm:px-8">
      <h2 className=" text-indigo-500 text-xl font-semibold  mb-5">Pricing</h2>
      <p className=" text-5xl font-bold dark:text-white text-slate-900 mb-4">
        The right piece for you, whoever you are{" "}
      </p>
      <p className=" text-gray-500 text-2xl">
        Were 99% sure we have a plan to match 100% of your needs
      </p>
      <PricingCards redirect={true} />
    </div>
  );
};

export default Pricing;
