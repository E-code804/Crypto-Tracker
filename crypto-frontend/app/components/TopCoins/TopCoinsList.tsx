"use client";
import Error from "@/app/components/Error";
import Loading from "@/app/components/Loading";
import useCoinData from "@/app/hooks/useCoinData";
import TopCoinsCard from "./TopCoinsCard";

// TODO: See if i can pull in live data (every 5 sec or so, etc.)
const TopCoinsList = () => {
  const { coins, isLoading, error } = useCoinData();

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Top Cryptocurrencies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the leading digital assets by market capitalization and track their real-time performance
          </p>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500 font-medium">Live Data</span>
          </div>
        </div>
      </div>

      {/* Coins Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coins &&
              coins.map((coin, index) => (
                <div
                  key={coin.id}
                  className="transform transition-all duration-300 hover:z-10"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  <TopCoinsCard coin={coin} />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default TopCoinsList;
