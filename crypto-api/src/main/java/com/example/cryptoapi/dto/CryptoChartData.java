package com.example.cryptoapi.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;
import java.util.List;

public class CryptoChartData {
    private List<List<Number>> prices;
    private List<List<BigDecimal>> market_caps;
    private List<List<BigDecimal>> total_volumes;

    public CryptoChartData() {}

    // getters and setters
    public List<List<Number>> getPrices() { return prices; }
    public void setPrices(List<List<Number>> prices) { this.prices = prices; }

    @JsonProperty("market_caps")
    public List<List<BigDecimal>> getMarketCaps() { return market_caps; }
    public void setMarketCaps(List<List<BigDecimal>> market_caps) { this.market_caps = market_caps; }

    @JsonProperty("total_volumes")
    public List<List<BigDecimal>> getTotalVolumes() { return total_volumes; }
    public void setTotalVolumes(List<List<BigDecimal>> total_volumes) { this.total_volumes = total_volumes; }

    @Override
    public String toString() {
        return "CryptoChartData{" +
                "prices=" + prices +
                ", marketCaps=" + market_caps +
                ", totalVolumes=" + total_volumes +
                '}';
    }
}
