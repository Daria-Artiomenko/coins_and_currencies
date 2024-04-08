import axios from 'axios';
import buildChart from '../utils/buildChart';

// let url = 'https://rest.coinapi.io/v1/exchangerate/EUR/USD/history?period_id=1DAY&time_start=2024-03-27T00:00:00&time_end=2024-03-31T00:00:00';
let config = {
  headers: {
    'Accept': 'application/json',
    'X-CoinAPI-Key': ''
  }
}

 const getPeriodData = async (currBase, currQuote, periodStart, periodEnd) => {

    return await (
        axios.get(`https://rest.coinapi.io/v1/exchangerate/${currBase}/${currQuote}/history?period_id=1DAY&time_start=${periodStart}T00:00:00&time_end=${periodEnd}T00:00:00`, config)
            .then(function (res) {
                let datas = {
                    'rate_open': res.data.map(day => { return day.rate_low; }),
                    'dates': res.data.map(day => {
                        let date = day.time_period_start.split('T')[0];
                        return date;
                    })
                };

            buildChart(datas)
            })

            .catch(function (e) {
                console.log(e);
            })
    );

}
export default getPeriodData;





