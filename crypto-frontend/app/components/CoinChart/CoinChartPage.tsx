"use client";
import { default as ErrorComponent } from "@/app/components/Error";
import Loading from "@/app/components/Loading";
import { handleErrorMessage } from "@/app/utils/errorMessage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// interface CryptoChartData {
//   prices: [number, number][]; // Array of tuples: [timestamp, price]
//   market_caps: [number, number][]; // Array of tuples: [timestamp, market_cap]
//   total_volumes: [number, number][]; // Array of tuples: [timestamp, volume]
// }

type ChartDataPoint = [timestamp: number, value: number];

const CoinChartPage = () => {
  const params = useParams();
  const coinId = params.coin_id;
  const [prices, setPrices] = useState<ChartDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCoinChartData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(`http://localhost:8080/api/crypto/coins/${coinId}/chart?days=1`);

        if (!response.ok) {
          // To handle different HTTP status code
          throw new Error(handleErrorMessage(response.status));
        }

        const json = await response.json();
        setPrices(json.prices);
      } catch (error) {
        setError(`Error fetching crypto data:, ${error}`);
        setPrices([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoinChartData();
  }, [coinId]);

  const getPricesChartData = () => {
    return prices.map(([timestamp, price]) => ({
      time: new Date(timestamp).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // 24-hour format
      }),
      fullTime: new Date(timestamp), // Keep for tooltip
      price: price,
    }));
  };

  if (isLoading) return <Loading />;
  if (error) return <ErrorComponent error={error} />;

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={getPricesChartData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            interval="preserveStartEnd" // Show only start and end labels
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(value, payload) => {
              if (payload && payload[0]) {
                return payload[0].payload.fullTime.toLocaleString();
              }
              return value;
            }}
            formatter={(value) => [`$${value.toLocaleString()}`, "Price"]}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false} // Remove dots for cleaner look
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinChartPage;
