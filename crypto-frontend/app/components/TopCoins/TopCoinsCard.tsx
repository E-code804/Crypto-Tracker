import { CoinData } from "@/app/types/CoinData";
import { formatMarketCap, formatPrice, formatVolume } from "@/app/utils/formatters";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  coin: CoinData;
};

const TopCoinsCard: React.FC<Props> = ({ coin }) => {
  const {
    id,
    name,
    symbol,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    price_change_percentage_24h,
    total_volume,
  } = coin;

  const isPositive = price_change_percentage_24h >= 0;
  const priceChangeColor = isPositive ? "text-green-500" : "text-red-500";
  const priceChangeBg = isPositive ? "bg-green-50" : "bg-red-50";
  const priceChangeIcon = isPositive ? "↗" : "↘";

  return (
    <div className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Rank badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
          #{market_cap_rank}
        </div>
      </div>

      {/* Card content */}
      <div className="relative p-6">
        {/* Header with coin info */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <Image
              src={image}
              alt={`${name} logo`}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300"
              onError={(e) => {
                e.currentTarget.src = "/placeholder-coin.png";
              }}
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="flex-1">
            <Link href={`/coins/${coin.id}`} className="block">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 hover:text-blue-700 hover:underline transition-all duration-300 cursor-pointer">
                {name}
              </h3>
            </Link>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{symbol}</p>
          </div>
        </div>

        {/* Price section */}
        <div className="mb-6">
          <div className="flex items-baseline space-x-2 mb-2">
            <span className="text-3xl font-bold text-gray-900">{formatPrice(current_price)}</span>
          </div>

          <div
            className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full ${priceChangeBg} ${priceChangeColor} text-sm font-semibold`}
          >
            <span className="text-lg">{priceChangeIcon}</span>
            <span>{Math.abs(price_change_percentage_24h).toFixed(2)}%</span>
            <span className="text-xs opacity-75">24h</span>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-blue-50 transition-colors duration-300">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Market Cap</div>
            <div className="text-lg font-bold text-gray-900">{formatMarketCap(market_cap)}</div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-purple-50 transition-colors duration-300">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Volume 24h</div>
            <div className="text-lg font-bold text-gray-900">{formatVolume(total_volume)}</div>
          </div>
        </div>

        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
      <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
    </div>
  );
};

export default TopCoinsCard;
