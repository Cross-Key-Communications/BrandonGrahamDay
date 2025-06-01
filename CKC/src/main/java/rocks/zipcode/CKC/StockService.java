//package rocks.zipcode.CKC;
//
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestTemplate;
//
//import java.util.Collections;
//import java.util.List;
//import java.util.Map;
//import java.util.stream.Collectors;
//
//@Service
//public class StockService {
//    private final RestTemplate restTemplate;
//    private final String apiKey = "6AQN5983ASH3JJ0A";
//
//    public StockService(RestTemplate restTemplate) {
//        this.restTemplate = restTemplate;
//    }
//    public List<Double> getClosingPrices(String symbol) {
//        String url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY" +
//                "&symbol=" + symbol +
//                "&outputsize=compact" +
//                "&apikey=" + apiKey;
//
//        ResponseEntity<Map> response = restTemplate.getForEntity(url, Map.class);
//        Map<String, Object> body = response.getBody();
//
//        if (body == null || !body.containsKey("Time Series (Daily)")) {
//            System.out.println("No time series found for: " + symbol);
//            return Collections.emptyList();
//        }
//
//        Map<String, Object> timeSeries = (Map<String, Object>) body.get("Time Series (Daily)");
//
//        return timeSeries.entrySet().stream()
//                .sorted(Collections.reverseOrder(Map.Entry.comparingByKey()))
//                .limit(7)
//                .map(entry -> {
//                    Map<String, String> dailyData = (Map<String, String>) entry.getValue();
//                    String close = dailyData.get("4. close");
//                    return Double.parseDouble(close);
//                })
//                .collect(Collectors.toList());
//    }
//
//}
