import React from "react";

const Background = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* ১ম রঙিন গোলক (পার্পল) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-[90px] opacity-40 animate-blob" />

      {/* ২য় রঙিন গোলক (সায়ান/ব্লু) - ৩ সেকেন্ড ডিলেতে চলবে */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-35 animate-blob animation-delay-3000" />

      {/* ৩য় রঙিন গোলক (গোলাপী) - ৫ সেকেন্ড ডিলেতে চলবে */}
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-screen filter blur-[110px] opacity-30 animate-blob animation-delay-5000" />
    </div>
  );
};

export default Background;
