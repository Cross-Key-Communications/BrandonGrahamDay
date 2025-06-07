package rocks.zipcode.CKC.Stock;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class StockService {

    private final RestTemplate restTemplate;
    private final String apiKey = "6AQN5983ASH3JJ0A"; // Your actual API key

    public StockService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Double> getLivePrices(String symbol) {
        String url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY" +
                "&symbol=" + symbol +
                "&interval=1min" +
                "&outputsize=compact" +
                "&apikey=" + apiKey;

        ResponseEntity<Map> response = restTemplate.getForEntity(url, Map.class);
        Map<String, Object> body = response.getBody();

        String key = "Time Series (1min)";
        if (body == null || !body.containsKey(key)) {
            System.out.println("No 1-minute time series found for: " + symbol);
            return Collections.emptyList();
        }

        Map<String, Object> timeSeries = (Map<String, Object>) body.get(key);

        return timeSeries.entrySet().stream()
                .sorted(Collections.reverseOrder(Map.Entry.comparingByKey())) // newest first
                .limit(10)
                .map(entry -> {
                    Map<String, String> minuteData = (Map<String, String>) entry.getValue();
                    String close = minuteData.get("4. close");
                    return Double.parseDouble(close);
                })
                .collect(Collectors.toList());
    }
}
