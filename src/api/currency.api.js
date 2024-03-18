// http://api.currencyapi.com/v3/latest?apikey=cur_live_BD69nu3jr9ltjEajz3LcRd7fJlqF34COSIxvtGYH&currencies=EUR%2CUSD%2CCAD
// cur_live_BD69nu3jr9ltjEajz3LcRd7fJlqF34COSIxvtGYH
// https://api.currencyapi.com/v3/currencies?apikey=cur_live_BD69nu3jr9ltjEajz3LcRd7fJlqF34COSIxvtGYH&currencies=USD%2CARS%2CCAD%2CJPY%2CAUD%2CCNY%2CEUR%2CBTC%2CGBP
// import axios from "axios";

// export const baseUrl = "https://api.currencyapi.com/v3";
// export const apiKey = "cur_live_BD69nu3jr9ltjEajz3LcRd7fJlqF34COSIxvtGYH";

// export async function getCurrencies() {
  
//     return axios({
//       method: "get",
//       maxBodyLength: Infinity,
//       url: `${baseUrl}/currencies`,
//       params: {
//         apiKey: apiKey,
//         currencies: "USD,ARS,CAD,JPY,AUD,CNY,EUR,BTC,GBP",
//       },
//     }).then((res) => {
//       return res;
//     });
//   }
