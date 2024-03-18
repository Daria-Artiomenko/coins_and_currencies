import axios from 'axios';

const getResponse = () => {
    const apiBase = 'https://api.currencyapi.com/v3';
    const apiKey = 'cur_live_BD69nu3jr9ltjEajz3LcRd7fJlqF34COSIxvtGYH';

    return (
        axios({
            method: "get",
            maxBodyLength: Infinity,
            url: `${apiBase}/currencies`,
            params: {
              apikey: apiKey,
              currencies: 'USD,ARS,CAD,JPY,AUD,CNY,EUR,BTC,GBP',
            },
          }).then((res) => {
            console.log(res);
            return res;
          })
    )
}
export default getResponse;
