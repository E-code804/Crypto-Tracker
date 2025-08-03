import { CoinData } from "@/app/types/CoinData";
import { handleErrorMessage } from "@/app/utils/errorMessage";
import { useCallback, useEffect, useState } from "react";

const useCoinData = () => {
  const [coins, setCoins] = useState<CoinData[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchTop5Coins = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/crypto/top5");

      if (!response.ok) {
        // To handle different HTTP status code
        throw new Error(handleErrorMessage(response.status));
      }

      const json = await response.json();
      setCoins(json);
    } catch (error) {
      setError(`Error fetching crypto data:, ${error}`);
      setCoins([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTop5Coins();
  }, [fetchTop5Coins]);

  return { coins, isLoading, error };
};

export default useCoinData;
