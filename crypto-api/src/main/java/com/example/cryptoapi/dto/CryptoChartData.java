package com.example.cryptoapi.dto;

import java.util.List;

public class CryptoChartData {
    private List<List<Number>> prices;
    private List<List<Number>> marketCaps;
    private List<List<Number>> totalVolumes;

    public CryptoChartData() {
    }

    public List<List<Number>> getPrices() {
        return prices;
    }

    public void setPrices(List<List<Number>> prices) {
        this.prices = prices;
    }

    public List<List<Number>> getMarketCaps() {
        return marketCaps;
    }

    public void setMarketCaps(List<List<Number>> marketCaps) {
        this.marketCaps = marketCaps;
    }

    public List<List<Number>> getTotalVolumes() {
        return totalVolumes;
    }

    public void setTotalVolumes(List<List<Number>> totalVolumes) {
        this.totalVolumes = totalVolumes;
    }

    @Override
    public String toString() {
        return "CryptoChartData{" +
                "prices=" + prices +
                ", marketCaps=" + marketCaps +
                ", totalVolumes=" + totalVolumes +
                '}';
    }
}
