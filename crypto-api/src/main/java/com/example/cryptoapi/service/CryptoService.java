// Service to fetch crypto data
package com.example.cryptoapi.service;

import com.example.cryptoapi.dto.CryptoChartData;
import com.example.cryptoapi.dto.CryptoCoin;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import java.util.List;

@Service
public class CryptoService {
    private final WebClient webClient;
    private static final String COINGECKO_API_URL = "https://api.coingecko.com/api/v3";

    public CryptoService() {
        this.webClient = WebClient.builder()
                .baseUrl(COINGECKO_API_URL)
                .build();
    }

    public Mono<CryptoChartData> getCoinChartData(String coin, String days) {
        String path = String.format("/coins/%s/market_chart", coin);

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path(path)
                        .queryParam("vs_currency", "usd")
                        .queryParam("days", days)
                        .build())
                .retrieve()
                .bodyToMono(CryptoChartData.class);
    }

    public Mono<List<CryptoCoin>> getTop5Cryptocurrencies() {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/coins/markets")
                        .queryParam("vs_currency", "usd")
                        .queryParam("order", "market_cap_desc")
                        .queryParam("per_page", "5")
                        .queryParam("page", "1")
                        .queryParam("sparkline", "false")
                        .build())
                .retrieve()
                .bodyToFlux(CryptoCoin.class)
                .collectList();
    }

    public Mono<CryptoCoin> getCryptocurrencyById(String id) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/coins/markets")
                        .queryParam("vs_currency", "usd")
                        .queryParam("ids", id)
                        .queryParam("sparkline", "false")
                        .build())
                .retrieve()
                .bodyToFlux(CryptoCoin.class)
                .next();
    }
}
