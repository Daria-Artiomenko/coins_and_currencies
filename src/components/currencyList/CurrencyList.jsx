import { useQuery } from "@tanstack/react-query";
import { getCurrencies, getExchange } from "../../services/getResponse";
import { currenciesInfo } from "../../data/currenciesInfo";
import CurrencyCard from "../currencyCard/CurrencyCard";
import './currencyList.scss';


const CurrencyList = () => {
    const currenciesList = useQuery({ queryKey: ["currencies"], queryFn: getCurrencies });
    const exchangeRates = useQuery({ queryKey: ["exchangeRates"], queryFn: getExchange });

    const currenciesData = currenciesList.data?.data.data;
    const exchangeRatesData = exchangeRates.data?.data.data;
    
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
                        />
                    ))}
                </div>
            </div>
          </section>
    )
}

export default CurrencyList;