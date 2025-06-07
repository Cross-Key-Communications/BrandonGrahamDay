package rocks.zipcode.CKC.Stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

        import java.util.*;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockService stockService;

    @GetMapping("/{symbol}/live")
    public ResponseEntity<?> getLiveChartData(@PathVariable String symbol) {
        List<Double> prices = stockService.getLivePrices(symbol);

        if (prices.isEmpty()) {
            return ResponseEntity.status(404).body("No live data for symbol: " + symbol);
        }

        Map<String, Object> result = new HashMap<>();
        result.put("symbol", symbol);
        result.put("prices", prices);
        return ResponseEntity.ok(result);
    }
}
