import { currenciesInfo } from "../../data/currenciesInfo";


import './historyChart.scss'

const HistoryChart = () => {

    return (
        <section className="history">
            <div className="history-select">
                <select type="select" className="history-select-curr" onChange={(e) => e.target.value}>
                {Object.keys(currenciesInfo).map((key) => (
                    <option 
                        key={key} 
                        className="history-select-curr-option"
                        onChange={(e) => e.target.value}
                        >
                        {key}
                    </option>
                ))}
                </select>
                <label htmlFor="" className="history-select-label">
                    from
                    <input className="history-select-date" type="date" min="2022-01-01" />
                </label>
                <label htmlFor="" className="history-select-label">
                    to
                    <input className="history-select-date" type="date" min="2022-01-01" />
                </label>

            </div>
            <div className="history-chart"></div>
        </section>

    )
}
export default HistoryChart;