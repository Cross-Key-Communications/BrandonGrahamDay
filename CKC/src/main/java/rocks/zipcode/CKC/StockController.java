//package rocks.zipcode.CKC;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/stocks")
//public class StockController {
//
//    @Autowired
//    private StockService stockService;
//
//    @GetMapping("/{symbol}/chart")
//    public Map<String, Object> getChartData(@PathVariable String symbol) {
//        List<Double> prices = stockService.getClosingPrices(symbol);
//        Map<String, Object> result = new HashMap<>();
//        result.put("symbol", symbol);
//        result.put("prices", prices);
//        return result;
//    }
//}

