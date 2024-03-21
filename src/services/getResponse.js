import axios from 'axios';
export const apiBase = 'https://api.currencyapi.com/v3';
export const apiKey = 'cur_live_BD69nu3jr9ltjEajz3LcRd7fJlqF34COSIxvtGYH';
export const currencies = 'USD,ARS,CAD,JPY,AUD,CNY,EUR,BTC,GBP';

export const getCurrencies = () => {
    return (
        axios({
            method: "get",
            maxBodyLength: Infinity,
            url: `${apiBase}/currencies`,
            params: {
              apikey: apiKey,
              currencies: currencies,
            },
          }).then((res) => {
            // console.log(res);
            return res;
          })
    )
}
export async function getExchange() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return axios({
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiBase}/latest`,
      params: {
        apikey: apiKey,
        currencies: currencies,
      },
    }).then((res) => {
    //   console.log(res);
      return res;
    });
}

