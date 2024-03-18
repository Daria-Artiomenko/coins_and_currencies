import icon from '../../assets/icons/Bovespa.svg';
import './currencyList.scss';
import getResponse from '../../services/getResponse';

const CurrencyList = () => {



    return (
        <div className="currency-card">
            <img src={icon} alt="Bovespa"/>
            <div>
                <h4 className="currency-card-name">Bovespa Index</h4>
                <div className="currency-card-value">0.15%</div>
            </div>

        </div>
    )
}

export default CurrencyList;