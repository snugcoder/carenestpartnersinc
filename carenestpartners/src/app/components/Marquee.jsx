import React from 'react';

export const Marquee = () => {
  const benefits = [
    "Part Time, Full Time, & Per Diem Work",
    "Jobs for RNs, LPNs, CNAs & more",
    "Join a community of reliable workers",
    "Flexible scheduling that works for you",
    "Competitive pay rates",
    "24/7 support team"
  ];

  return (
    <div className="marquee-wrapper bg-gradient-to-r from-[#16437E] to-[#D8E594] py-4 overflow-hidden relative">
      <div className="marquee flex animate-marquee whitespace-nowrap">
        {[...benefits, ...benefits].map((benefit, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-max px-8"
          >
            <span className="text-white font-medium text-sm lg:text-base whitespace-nowrap">
              {benefit}
            </span>
            {index < benefits.length * 2 - 1 && (
              <div className="w-2 h-2 bg-white rounded-full mx-8 opacity-60" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
