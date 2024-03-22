import { currenciesInfo } from "../../data/currenciesInfo";
import './selectCurrency.scss';

const SelectCurrency = () => {
    return (
        <select type="select" className="select-currency">
            {Object.keys(currenciesInfo).map((key) => (
            <option key={key} className="select-currency-option">{key}</option>
        ))}
        </select>
    )
}
export default SelectCurrency;