import axios from 'axios';
import buildChart from '../utils/buildChart';

let config = {
  headers: {
    'Accept': 'application/json',
    'X-CoinAPI-Key': '884BFF61-77BF-4F21-9711-94D1FA346600'
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





