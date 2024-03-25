// import { useState } from "react";
import PropTypes from 'prop-types';

import SelectCurrency from "../selectCurrency/SelectCurrency";
import './modalConvertCurrency.scss';



const ModalConvertCurrency = ({onClose}) => {

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
                            <SelectCurrency/>
                        </label>
                        <input type="number" className="modal-convert-input"/>
                        <label htmlFor="" className="modal-convert-label">
                            To:
                            <SelectCurrency/>
                        </label>
                        <input type="number" placeholder='' className="modal-convert-input"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
ModalConvertCurrency.propTypes = {
	onClose: PropTypes.func
}
export default ModalConvertCurrency;
