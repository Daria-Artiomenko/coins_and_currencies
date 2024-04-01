import { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';


import SelectCurrency from "../selectCurrency/SelectCurrency";
import './modalConvertCurrency.scss';


const ModalConvertCurrency = ({onClose, currencySelect, exchangeRates}) => {

    const [selectInputFrom, setSelectInputFrom] = useState("USD");
    const [selectInputTo, setSelectInputTo] = useState(currencySelect);
    const [inputValueFrom, setInputValueFrom] = useState(1);
    const [inputValueTo, setInputValueTo] = useState(+(exchangeRates[selectInputTo].value.toFixed(4)))
    
    const calcExchange = useCallback((inputValueFrom) => {
        if (selectInputTo === "BTC") {
            setInputValueTo(((inputValueFrom / exchangeRates[selectInputFrom].value * exchangeRates[selectInputTo].value).toFixed(8)))
        } else {
            setInputValueTo(+((inputValueFrom / exchangeRates[selectInputFrom].value * exchangeRates[selectInputTo].value).toFixed(4)))
        }
        
    }, [selectInputFrom, selectInputTo, exchangeRates])

    useEffect(() => {
        calcExchange(inputValueFrom);
      }, [inputValueFrom, selectInputFrom, selectInputTo, calcExchange]);
    
    return (
        <div className="modal-convert" onClick={onClose}>
            <div className="modal-convert-dialog" onClick={e => e.stopPropagation()}>
                <div className='modal-convert-content'>
                    <h3 className='modal-convert-title'>Convert Currency</h3>
                    <div className='modal-convert-line'></div>
                    <div className='modal-convert-close' onClick={onClose}>&times;</div>
                    <div className="modal-convert-form">
                        <label htmlFor="" className="modal-convert-label">
                            From:
                            <SelectCurrency select={selectInputFrom} setSelect={setSelectInputFrom}/>
                        </label>
                        <input 
                            type="number" 
                            className="modal-convert-input" 
                            value={inputValueFrom}
                            onChange={e => setInputValueFrom(e.target.value)}/>
                        <label htmlFor="" className="modal-convert-label">
                            To:
                            <SelectCurrency select={selectInputTo} setSelect={setSelectInputTo}/>
                        </label>
                        <input type="number"
                            className="modal-convert-input"
                            value={inputValueTo}
                            onChange={calcExchange}
                            readOnly={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
ModalConvertCurrency.propTypes = {
    exchangeRates: PropTypes.object,
	onClose: PropTypes.func,
    currencySelect: PropTypes.string,
}
export default ModalConvertCurrency;
