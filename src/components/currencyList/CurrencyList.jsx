import { useQuery } from "@tanstack/react-query";
import { getCurrencies, getExchange } from "../../services/getResponse";
import { currenciesInfo } from "../../data/currenciesInfo";
import { useState } from "react";
import CurrencyCard from "../currencyCard/CurrencyCard";
import './currencyList.scss';
import PortalModal from "../modalConvertCurrency/PortalModal";
import ModalConvertCurrency from "../modalConvertCurrency/ModalConvertCurrency";


const CurrencyList = () => {
    const currenciesList = useQuery({ queryKey: ["currencies"], queryFn: getCurrencies });
    const exchangeRates = useQuery({ queryKey: ["exchangeRates"], queryFn: getExchange });
    const [showModal, setShowModal] = useState(false);
    const [currencySelect, setCurrencySelect] = useState("");

    const currenciesData = currenciesList.data?.data.data;
    const exchangeRatesData = exchangeRates.data?.data.data;


    const openModal = (key) => {
        document.body.style.overflow = 'hidden';
        setShowModal(true);
        setCurrencySelect(key);
      };
    
    const closeModal = () => {
        document.body.style.overflow = '';
        setShowModal(false);
      };

    return (

        <section className="currency-cards">
            <div className="container">
                <div className="currency-cards-title">Currencies</div>
                <div className="currency-cards-line"></div>
                <div className="currency-cards-list">
                    {currenciesData &&
                    currenciesInfo &&
                    exchangeRatesData &&
                    Object.keys(currenciesData).map((key) => (
                        <CurrencyCard
                        key={exchangeRatesData[key].code}
                        currency={currenciesData[key].name}
                        exchangeValue={exchangeRatesData[key].value}
                        thumbPath={currenciesInfo[key]}
                        currencySymbol={currenciesData[key]["symbol_native"]}
                        onClick={() => openModal(key)}
                        />
                    ))}
                </div>
            </div>
            {showModal && 
            <PortalModal>
                <ModalConvertCurrency currencySelect={currencySelect} onClose={closeModal}/>
            </PortalModal>}
          </section>
    )
}

export default CurrencyList;