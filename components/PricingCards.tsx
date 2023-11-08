const tiers = [
  {
    name: "starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Get chatting right away with anyone, anywhere!",
    features: [
      "20 Message chat limit in chats",
      "2 participant limit in chat",
      "3 chat rooms limit",
      "support 2 languages",
      "48-hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "si-OnlesLNQYbMVzV",
    href: "#",
    priceMonthly: "5.99",
    description: "Unlock the full potential with Pro!",
    features: [
      "Unlimited messages in chats",
      "Unlimited participants in chat",
      "Unlimited chat rooms",
      "support up to 10 languages",
      "Multimedia suport in chats (coming soon)",
      "1-hour ,dedicated support response time",
      "Early access to New Features",
    ],
  },
];

import Link from "next/link";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import CheckOutButton from "./CheckOutButton";

const PricingCards = ({ redirect }: { redirect: boolean }) => {
  return (
    <div>
      <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 lg:max-w-4xl max-w-md gap-8 mt-10 text-left ">
        {tiers.map((tier) => {
          return (
            <div
              key={tier.id}
              className=" py-14 pb-8 px-10 flex flex-col justify-between gap-10 bg-white text-slate-900 rounded-3xl shadow-2xl bprder-[0.5px]"
            >
              <div>
                <h2 className=" text-indigo-600 font-semibold text-xl mb-4">
                  {tier.name}
                </h2>
                <p className="price text-slate-800 text-5xl font-bold mb-6">
                  {tier.priceMonthly === null
                    ? "Free"
                    : `$${tier.priceMonthly}`}
                  {tier.priceMonthly !== null && (
                    <span className=" text-xl text-gray-500 font-normal ml-2">
                      /month
                    </span>
                  )}
                </p>
                <p className="description text-gray-800 mb-8">
                  {tier.description}
                </p>
                <ul className=" space-y-2 mb-8">
                  {tier.features.map((feature) => {
                    return (
                      <li
                        key={feature}
                        className=" flex flex-row items-center gap-2"
                      >
                        <AiOutlineCheck className="text-blue-600 brightness-150  text-lg" />
                        <p className=" text-gray-500">{feature}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="buy-btn">
                {redirect ? (
                  <Link href={"/register"}>
                    <button className="w-full bg-indigo-600 text-white py-2 font-semibold  hover:opacity-80 rounded-lg ">
                      Get Started today
                    </button>
                  </Link>
                ) : (
                  tier.id && <CheckOutButton />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCards;
