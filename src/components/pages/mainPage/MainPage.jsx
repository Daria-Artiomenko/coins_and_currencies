import CurrencyList from "../../currencyList/CurrencyList";
import LastUpdate from "../../lastUpdate/LastUpdate";
import Promo from "../../promo/Promo";

const MainPage = () => {
    return(
        <>
            <Promo/>
            <LastUpdate/>
            <CurrencyList/>
        </>

    )
}
export default MainPage;