package com.example.cryptoapi.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.math.BigDecimal;

public class CryptoCoin {
    private String id;
    private String symbol;
    private String name;
    private String image;

    @JsonProperty("current_price")
    private BigDecimal currentPrice;

    @JsonProperty("market_cap")
    private Long marketCap;

    @JsonProperty("market_cap_rank")
    private Integer marketCapRank;

    @JsonProperty("price_change_percentage_24h")
    private BigDecimal priceChangePercentage24h;

    @JsonProperty("total_volume")
    private Long totalVolume;

    // Constructors
    public CryptoCoin() {}

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getSymbol() { return symbol; }
    public void setSymbol(String symbol) { this.symbol = symbol; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public BigDecimal getCurrentPrice() { return currentPrice; }
    public void setCurrentPrice(BigDecimal currentPrice) { this.currentPrice = currentPrice; }

    public Long getMarketCap() { return marketCap; }
    public void setMarketCap(Long marketCap) { this.marketCap = marketCap; }

    public Integer getMarketCapRank() { return marketCapRank; }
    public void setMarketCapRank(Integer marketCapRank) { this.marketCapRank = marketCapRank; }

    public BigDecimal getPriceChangePercentage24h() { return priceChangePercentage24h; }
    public void setPriceChangePercentage24h(BigDecimal priceChangePercentage24h) {
        this.priceChangePercentage24h = priceChangePercentage24h;
    }

    public Long getTotalVolume() { return totalVolume; }
    public void setTotalVolume(Long totalVolume) { this.totalVolume = totalVolume; }

    @Override
    public String toString() {
        return "CryptoCoin{" +
                "id='" + id + '\'' +
                ", symbol='" + symbol + '\'' +
                ", name='" + name + '\'' +
                ", currentPrice=" + currentPrice +
                ", marketCapRank=" + marketCapRank +
                ", priceChangePercentage24h=" + priceChangePercentage24h +
                '}';
    }
}
