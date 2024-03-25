import { currenciesInfo } from "../../data/currenciesInfo";
import PropTypes from 'prop-types';
import './selectCurrency.scss';

const SelectCurrency = ({select, setSelect}) => {
    return (
        <select type="select" className="select-currency" value={select} onChange={(e) => setSelect(e.target.value)}>
            {Object.keys(currenciesInfo).map((key) => (
            <option 
                key={key} 
                className="select-currency-option"
                selected={(select === key) ? true : false}
                onChange={(e) => setSelect(e.target.value)}
                >
                {key}
            </option>
        ))}
        </select>
    )
}

SelectCurrency.propTypes = {
	setSelect: PropTypes.func,
    select: PropTypes.string,
}
export default SelectCurrency;