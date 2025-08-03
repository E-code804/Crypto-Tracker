import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-400 rounded-full animate-spin animation-delay-150 mx-auto"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Loading Crypto Data</h2>
        <p className="text-gray-500 animate-pulse">Fetching the latest market information...</p>
      </div>
    </div>
  );
};

export default Loading;
