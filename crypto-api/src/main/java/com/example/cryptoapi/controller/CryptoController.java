// Controller to expose REST endpoints
package com.example.cryptoapi.controller;

import com.example.cryptoapi.dto.CryptoChartData;
import com.example.cryptoapi.dto.CryptoCoin;
import com.example.cryptoapi.service.CryptoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;
import java.util.List;

@RestController
@RequestMapping("/api/crypto")
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"}) // Add this line
public class CryptoController {
    @Autowired
    private CryptoService cryptoService;

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }

    @GetMapping("/coins/{coin}/chart")
    public Mono<CryptoChartData> getCryptoChartData(
            @PathVariable String coin, @RequestParam(defaultValue = "1") String days
    ) {
        return cryptoService.getCoinChartData(coin, days);
    }

    @GetMapping("/top5")
    public Mono<List<CryptoCoin>> getTop5Cryptocurrencies() {
        return cryptoService.getTop5Cryptocurrencies();
    }

    @GetMapping("/{id}")
    public Mono<CryptoCoin> getCryptocurrency(@PathVariable String id) {
        return cryptoService.getCryptocurrencyById(id);
    }

    @GetMapping("/top5/sync")
    public List<CryptoCoin> getTop5CryptocurrenciesSync() {
        return cryptoService.getTop5Cryptocurrencies().block();
    }
}
