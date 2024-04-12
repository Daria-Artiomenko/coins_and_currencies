import { currenciesInfo } from "../../data/currenciesInfo";
import getPeriodData from "../../services/getPeriodData";
import { useState, useEffect} from "react";

import './historyChart.scss'


const HistoryChart = () => {
    const [selectCurrFrom, setSelectCurrFrom] = useState('EUR');
    const [selectCurrTo, setSelectCurrTo] = useState('USD');
    const [rangeStart, setRangeStart] = useState('2024-03-20');
    const [rangeEnd, setRangeEnd] = useState('2024-03-27');

    useEffect(() => {
        getPeriodData(selectCurrFrom, selectCurrTo, rangeStart, rangeEnd)
    }, [selectCurrFrom, selectCurrTo, rangeStart, rangeEnd])

    return (
        <section className="history">
            <div className="history-select">
                <div className="history-select-currency">
                    <label htmlFor="" className="history-select-label">
                        From
                        <select type="select" className="history-select-curr" value={selectCurrFrom} onChange={(e) => setSelectCurrFrom(e.target.value)}>
                        {Object.keys(currenciesInfo).map((key) => (
                            <option 
                                key={key} 
                                className="history-select-curr-option"
                                onChange={(e) => setSelectCurrFrom(e.target.value)}
                                >
                                {key}
                            </option>
                        ))}
                        </select>
                    </label>
                    <label htmlFor="" className="history-select-label">
                        To
                        <select type="select" className="history-select-curr" value={selectCurrTo} onChange={(e) => setSelectCurrTo(e.target.value)}>
                        {Object.keys(currenciesInfo).map((key) => (
                            <option 
                                key={key} 
                                className="history-select-curr-option"
                                onChange={(e) => setSelectCurrTo(e.target.value)}
                                >
                                {key}
                            </option>
                        ))}
                        </select>
                    </label>
                </div>
                
            
                <div className="history-select-period">
                    <label htmlFor="" className="history-select-label">
                        From
                        <input className="history-select-date" 
                            value={rangeStart} 
                            type="date" 
                            min="2022-01-01" 
                            onChange={(e) => setRangeStart(e.target.value)}/>
                    </label>
                    <label htmlFor="" className="history-select-label">
                        To
                        <input className="history-select-date" 
                            value={rangeEnd}
                            type="date"
                            min="2022-01-01"
                            onChange={(e) => setRangeEnd(e.target.value)}/>
                    </label>
                </div>
            </div>
            <div id="history-chart">
                <canvas id="myChart">

                </canvas>
            </div>
        </section>

    )
}
export default HistoryChart;