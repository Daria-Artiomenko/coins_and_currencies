import { HttpResponse, http } from "msw";
import { apiBase, apiKey, currencies } from "../../services/getResponse";

export default http.get(`${apiBase}/latest?apikey=&${apiKey}currencies=${currencies}`, () => {

  return HttpResponse.json({
    "meta": {
        "last_updated_at": "2024-03-17T23:59:59Z"
      },
      "data": {
        "ARS": {
          "code": "ARS",
          "value": 850.6284610251
        },
        "AUD": {
          "code": "AUD",
          "value": 1.5246902285
        },
        "BTC": {
          "code": "BTC",
          "value": 0.0000145939
        },
        "CAD": {
          "code": "CAD",
          "value": 1.3546502113
        },
        "CNY": {
          "code": "CNY",
          "value": 7.1965609609
        },
        "EUR": {
          "code": "EUR",
          "value": 0.9187001622
        },
        "GBP": {
          "code": "GBP",
          "value": 0.7854201019
        },
        "JPY": {
          "code": "JPY",
          "value": 148.9349908462
        },
        "USD": {
          "code": "USD",
          "value": 1
        }
      }
  });
});