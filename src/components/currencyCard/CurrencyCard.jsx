import PropTypes from 'prop-types';
import './currencyCard.scss';


const CurrencyCard = (props) => {
    const {currency, exchangeValue, currencySymbol, thumbPath, onClick} = props;
    const exchangeRateValue = (currency === 'Bitcoin') ? exchangeValue : +(exchangeValue.toFixed(2));


    return(
        <button className="currency-card" onClick={onClick}>
            <img src={thumbPath} alt="currency card"/>
            <div>
                <h4 className="currency-card-name">{currency}</h4>
                <div className="currency-card-value">{exchangeRateValue} 
                    <span className='currency-card-symbol'>{currencySymbol}</span>
                </div>
            </div>
        </button> 
    )
}
CurrencyCard.propTypes = {
    onClick: PropTypes.func,
    thumbPath: PropTypes.string,
    currency: PropTypes.string,
    exchangeValue: PropTypes.number,
    currencySymbol: PropTypes.string
}

export default CurrencyCard;